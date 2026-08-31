'use strict';

/**
 * Decryption sidecar.
 *
 * nginx serves the app and the mounted footage; this process handles only the
 * clips Tesla encrypted. It holds the Tesla credentials so the browser never
 * does, asks Tesla for the per-file key, and streams a plain MP4 back.
 *
 * Streaming plaintext (rather than handing keys to the page) means the player
 * needs no special case: it gets a normal MP4 over HTTP, with byte ranges, so
 * seeking works. Pages are independently encrypted, so a range request only
 * decrypts the pages it touches.
 *
 *   GET  /decrypt/status          is decryption configured and working
 *   GET  /decrypt/clip/<path>     the decrypted clip
 */

const http = require('http');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const C = require('./tesla-crypto.js');
const { TeslaAuth } = require('./tesla-auth.js');

const PORT = Number(process.env.DECRYPT_PORT || 8189);
const ROOT = process.env.TESLACAM_ROOT || '/teslacam';
const DECRYPT_API = process.env.TESLA_DECRYPT_API || 'https://dashcam.tesla.com/api/1/decrypt/batch';
const KEY_CACHE_MAX = 512;

const log = {
    info: (m) => console.log(m),
    warn: (m) => console.warn(m),
    error: (m) => console.error(m),
};

const auth = new TeslaAuth({
    refreshToken: process.env.TESLA_REFRESH_TOKEN,
    accessToken: process.env.TESLA_ACCESS_TOKEN,
    storePath: process.env.TESLA_TOKEN_STORE,
    log,
});

/** uuid -> 16-byte AES key. Keys are per file and do not change. */
const keyCache = new Map();

function cacheKey(id, key) {
    if (keyCache.size >= KEY_CACHE_MAX) keyCache.delete(keyCache.keys().next().value);
    keyCache.set(id, key);
}

/** Resolve a request path inside ROOT, refusing anything that escapes it. */
function safePath(rel) {
    const decoded = decodeURIComponent(rel).replace(/^\/+/, '');
    const full = path.resolve(ROOT, decoded);
    const root = path.resolve(ROOT);
    if (full !== root && !full.startsWith(root + path.sep)) return null;
    return full;
}

async function readHeader(fd) {
    const buf = Buffer.alloc(C.HEADER_SIZE);
    const { bytesRead } = await fd.read(buf, 0, C.HEADER_SIZE, 0);
    if (bytesRead < C.HEADER_SIZE) throw new Error('file is too small to be an encrypted clip');
    return buf;
}

/** Ask Tesla for the key of one file. Only identifiers leave the machine. */
async function fetchKey(meta) {
    if (keyCache.has(meta.id)) return keyCache.get(meta.id);

    const request = async () => {
        const token = await auth.getAccessToken();
        return fetch(DECRYPT_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({
                items: [{
                    id: meta.id,
                    vin: meta.vin,
                    key_id: meta.key_id,
                    timestamp: meta.timestamp,
                    wrapped_key: meta.wrapped_key,
                    public_key: meta.public_key,
                }],
            }),
        });
    };

    let response = await request();
    if (response.status === 401) {
        auth.invalidate();               // token may have expired mid-flight
        response = await request();
    }
    if (!response.ok) {
        throw new Error(`Tesla key request failed: HTTP ${response.status}`);
    }

    const body = await response.json();
    const result = (body.results || []).find((r) => r && r.id === meta.id) || (body.results || [])[0];
    if (!result) throw new Error('Tesla returned no result for this clip');
    if (result.error) throw new Error(`Tesla refused the key: ${result.error}`);
    if (!result.key) throw new Error('Tesla returned no key for this clip');

    const key = Buffer.from(result.key, 'base64');
    if (key.length !== 16) throw new Error(`unexpected key length ${key.length}, expected 16`);
    cacheKey(meta.id, key);
    return key;
}

/** Read one encrypted page and give back its plaintext. */
async function readPage(fd, key, index) {
    const buf = Buffer.alloc(C.PAGE_SIZE);
    const { bytesRead } = await fd.read(buf, 0, C.PAGE_SIZE, C.pageOffset(index));
    if (bytesRead === 0) return Buffer.alloc(0);
    return C.decryptPage(key, index, buf.subarray(0, bytesRead - (bytesRead % 16)));
}

async function plaintextSize(fd, key, encryptedSize) {
    const pages = Math.ceil((encryptedSize - C.PAYLOAD_START) / C.PAGE_SIZE);
    if (pages <= 0) return 0;
    const last = await readPage(fd, key, pages - 1);
    return C.plaintextLength(encryptedSize, last);
}

function parseRange(header, size) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(header || '');
    if (!m) return null;
    let start = m[1] === '' ? null : Number(m[1]);
    let end = m[2] === '' ? null : Number(m[2]);
    if (start === null && end === null) return null;
    if (start === null) { start = Math.max(0, size - end); end = size - 1; }
    else if (end === null || end >= size) { end = size - 1; }
    if (start > end || start >= size) return 'unsatisfiable';
    return { start, end };
}

async function serveClip(req, res, rel) {
    const file = safePath(rel);
    if (!file) return send(res, 400, 'bad path');

    let fd;
    try {
        fd = await fsp.open(file, 'r');
    } catch {
        return send(res, 404, 'not found');
    }

    try {
        const stat = await fd.stat();
        const meta = C.parseHeader(await readHeader(fd));
        const key = await fetchKey(meta);
        const size = await plaintextSize(fd, key, stat.size);

        const range = parseRange(req.headers.range, size);
        if (range === 'unsatisfiable') {
            res.writeHead(416, { 'Content-Range': `bytes */${size}` });
            return res.end();
        }
        const { start, end } = range || { start: 0, end: Math.max(0, size - 1) };
        const length = end - start + 1;

        res.writeHead(range ? 206 : 200, {
            'Content-Type': 'video/mp4',
            'Content-Length': length,
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'private, max-age=300',
            ...(range ? { 'Content-Range': `bytes ${start}-${end}/${size}` } : {}),
        });
        if (req.method === 'HEAD') return res.end();

        const { firstPage, lastPage } = C.pagesForRange(start, end);
        for (let i = firstPage; i <= lastPage; i++) {
            const page = await readPage(fd, key, i);
            const from = i === firstPage ? start - firstPage * C.PAGE_SIZE : 0;
            const to = i === lastPage ? end - i * C.PAGE_SIZE + 1 : page.length;
            if (!res.write(page.subarray(from, Math.min(to, page.length)))) {
                await new Promise((r) => res.once('drain', r));
            }
        }
        res.end();
    } catch (e) {
        log.error(`[decrypt] ${path.basename(file)}: ${e.message}`);
        if (!res.headersSent) send(res, 502, e.message);
        else res.destroy();
    } finally {
        await fd.close().catch(() => {});
    }
}

function sendJson(res, code, payload) {
    const body = JSON.stringify(payload);
    res.writeHead(code, { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) });
    res.end(body);
}

function send(res, code, message) {
    sendJson(res, code, { error: message });
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (url.pathname === '/decrypt/status') {
        return sendJson(res, 200, { configured: auth.configured });
    }
    if (url.pathname.startsWith('/decrypt/clip/')) {
        return serveClip(req, res, url.pathname.slice('/decrypt/clip/'.length));
    }
    send(res, 404, 'not found');
});

server.listen(PORT, '127.0.0.1', () => {
    log.info(`[decrypt] listening on 127.0.0.1:${PORT}, footage root ${ROOT}`);
    log.info(auth.configured
        ? '[decrypt] Tesla credentials present'
        : '[decrypt] no Tesla credentials: encrypted clips stay unplayable');
});
