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
const crypto = require('crypto');
const C = require('./tesla-crypto.js');
const { TeslaAuth, inspectToken } = require('./tesla-auth.js');
const { KeyStore } = require('./key-store.js');

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

const keyStore = new KeyStore(
    process.env.TESLA_KEY_STORE || '/config/tesla-keys.json', log);

// Tesla's own page batches 20 clips per call.
const BATCH_SIZE = Number(process.env.TESLA_BATCH_SIZE || 20);

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
    if (bytesRead < C.HEADER_SIZE) {
        throw new C.InvalidHeaderError('file is too small to be an encrypted clip');
    }
    return buf;
}

/** Ask Tesla for the key of one file. Only identifiers leave the machine. */
async function requestKeys(items) {
    const attempt = async () => {
        const token = await auth.getAccessToken();
        return fetch(DECRYPT_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ items }),
        });
    };

    let response = await attempt();
    if (response.status === 401) {
        auth.invalidate();
        response = await attempt();
        if (response.status === 401) {
            const claims = inspectToken(await auth.getAccessToken().catch(() => ''));
            log.error(`[auth] Tesla rejected the token twice. Claims: ${JSON.stringify({
                kind: claims.kind, aud: claims.aud, expired: claims.expired })}`);
            log.error("[auth] the token must come from dashcam.tesla.com (localStorage key ROCP_token).");
        }
    }
    if (!response.ok) {
        let detail = '';
        try { detail = (await response.text()).slice(0, 200).replace(/\s+/g, ' '); } catch { /* gone */ }
        throw new Error(`Tesla key request failed: HTTP ${response.status}${detail ? ` - ${detail}` : ''}`);
    }
    const body = await response.json();
    return new Map((body.results || []).map((r) => [r.id, r]));
}

/** Key for one clip: from the store when we have it, from Tesla otherwise. */
async function fetchKey(meta) {
    const stored = keyStore.get(meta);
    if (stored) return stored;

    const id = KeyStore.identity(meta);
    const results = await requestKeys([{
        id,
        vin: meta.vin,
        key_id: meta.key_id,
        timestamp: meta.timestamp,
        wrapped_key: meta.wrapped_key,
        public_key: meta.public_key,
    }]);
    const result = results.get(id) || [...results.values()][0];
    if (!result) throw new Error('Tesla returned no result for this clip');
    if (result.error) throw new Error(`Tesla refused the key: ${result.error}`);
    if (!result.key) throw new Error('Tesla returned no key for this clip');

    const key = Buffer.from(result.key, 'base64');
    if (key.length !== 16) throw new Error(`unexpected key length ${key.length}, expected 16`);
    keyStore.set(meta, key);
    await keyStore.save();
    return key;
}

/** Read one encrypted page and give back its plaintext. */
async function readPage(fd, key, index) {
    const buf = Buffer.alloc(C.PAGE_SIZE);
    const { bytesRead } = await fd.read(buf, 0, C.PAGE_SIZE, C.pageOffset(index));
    if (bytesRead === 0) return Buffer.alloc(0);
    return C.decryptPage(key, index, buf.subarray(0, bytesRead - (bytesRead % 16)));
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

        let meta;
        try {
            meta = C.parseHeader(await readHeader(fd), stat.size);
        } catch (e) {
            if (!(e instanceof C.InvalidHeaderError)) throw e;
            // Not an encrypted clip after all. Tesla's EncryptedClips tree is
            // not uniformly encrypted - thumbnails in particular can be plain -
            // so serve the bytes rather than failing the request.
            return serveRaw(req, res, fd, stat, file);
        }
        log.info(`[decrypt] ${path.basename(file)} size=${stat.size} plaintext=${meta.plaintextSize} ` +
                 `key_id=${meta.key_id} vin=${meta.vin.slice(0, 3)}***${meta.vin.slice(-4)}`);
        const key = await fetchKey(meta);
        const size = meta.plaintextSize;

        const range = parseRange(req.headers.range, size);
        if (range === 'unsatisfiable') {
            res.writeHead(416, { 'Content-Range': `bytes */${size}` });
            return res.end();
        }
        const { start, end } = range || { start: 0, end: Math.max(0, size - 1) };
        const length = end - start + 1;

        res.writeHead(range ? 206 : 200, {
            'Content-Type': contentTypeFor(file),
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

/**
 * Report how a real file is laid out, for checking the offsets against a drive
 * without anyone having to send the footage anywhere. Deliberately omits the
 * wrapped key and the full public key: those are key material.
 */
async function inspectClip(res, rel) {
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
        const head = Buffer.alloc(Math.min(C.HEADER_SIZE, stat.size));
        await fd.read(head, 0, head.length, 0);
        const at = (o, n) => head.length >= o + n ? head.subarray(o, o + n).toString('hex') : null;
        let parsed = null, parseError = null;
        try { parsed = C.parseHeader(head, stat.size); } catch (e) { parseError = e.message; }
        sendJson(res, 200, {
            size: stat.size,
            payloadWouldStartAt: C.PAYLOAD_START,
            looksLikePlainMp4: head.subarray(4, 8).toString() === 'ftyp',
            firstBytes: at(0x0000, 48),
            atPage2: at(0x1000, 48),
            pageAligned: stat.size % C.PAGE_SIZE === 0,
            parsed: parsed && {
                plaintextSize: parsed.plaintextSize,
                key_id: parsed.key_id,
                vin: parsed.vin.replace(/.(?=.{4})/g, '*'),
                vinLooksValid: /^[A-HJ-NPR-Z0-9]{17}$/.test(parsed.vin),
                timestamp: parsed.timestamp,
                publicKeyFirstByte: '0x' + Buffer.from(parsed.public_key, 'base64')[0].toString(16),
                publicKeyBytes: Buffer.from(parsed.public_key, 'base64').length,
                wrappedKeyBytes: Buffer.from(parsed.wrapped_key, 'base64').length,
            },
            parseError,
        });
    } catch (e) {
        send(res, 500, e.message);
    } finally {
        await fd.close().catch(() => {});
    }
}

/* ---------------------------------------------------------------------------
   Prefetch

   The token expires in eight hours; the keys it buys never do. So the moment a
   valid token exists, fetch the key for every encrypted clip on the drive.
   After that the whole drive plays with no token at all, and a new one is only
   needed for footage recorded since.
   --------------------------------------------------------------------------- */

const prefetch = { running: false, total: 0, done: 0, fetched: 0, failed: 0, startedAt: null, finishedAt: null, error: null };

async function* walkClips(dir) {
    let entries;
    try {
        entries = await fsp.readdir(dir, { withFileTypes: true });
    } catch {
        return;
    }
    for (const entry of entries) {
        if (entry.name.startsWith('.')) continue;
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) yield* walkClips(full);
        else if (/\.(mp4|png)$/i.test(entry.name) || entry.name === 'event.json') yield full;
    }
}

/** Read a clip's header, or null when it is not an encrypted clip. */
async function readClipMeta(file) {
    let fd;
    try {
        fd = await fsp.open(file, 'r');
        const stat = await fd.stat();
        if (stat.size < C.HEADER_SIZE) return null;
        const header = Buffer.alloc(C.HEADER_SIZE);
        await fd.read(header, 0, C.HEADER_SIZE, 0);
        return C.parseHeader(header, stat.size);
    } catch {
        return null;                     // plain file, or unreadable: skip it
    } finally {
        if (fd) await fd.close().catch(() => {});
    }
}

async function runPrefetch() {
    if (prefetch.running) return;
    Object.assign(prefetch, { running: true, total: 0, done: 0, fetched: 0, failed: 0,
                              startedAt: new Date().toISOString(), finishedAt: null, error: null });
    log.info('[prefetch] collecting keys for every encrypted clip on the drive');

    try {
        const pending = [];
        for await (const file of walkClips(ROOT)) {
            const meta = await readClipMeta(file);
            if (!meta) continue;
            prefetch.total++;
            if (keyStore.has(meta)) continue;
            pending.push(meta);
        }
        log.info(`[prefetch] ${prefetch.total} encrypted clips, ${pending.length} without a key yet`);

        for (let i = 0; i < pending.length; i += BATCH_SIZE) {
            const batch = pending.slice(i, i + BATCH_SIZE);
            const items = batch.map((meta) => ({
                id: KeyStore.identity(meta),
                vin: meta.vin,
                key_id: meta.key_id,
                timestamp: meta.timestamp,
                wrapped_key: meta.wrapped_key,
                public_key: meta.public_key,
            }));
            const results = await requestKeys(items);
            for (const meta of batch) {
                const r = results.get(KeyStore.identity(meta));
                if (r && r.key && !r.error) {
                    keyStore.set(meta, Buffer.from(r.key, 'base64'));
                    prefetch.fetched++;
                } else {
                    prefetch.failed++;
                }
                prefetch.done++;
            }
            await keyStore.save();
            log.info(`[prefetch] ${prefetch.done}/${pending.length} (${prefetch.fetched} keys, ${prefetch.failed} refused)`);
        }
        log.info(`[prefetch] finished: ${keyStore.size} keys stored. These clips no longer need a token.`);
    } catch (e) {
        prefetch.error = e.message;
        log.error(`[prefetch] stopped: ${e.message}`);
    } finally {
        await keyStore.save();
        prefetch.running = false;
        prefetch.finishedAt = new Date().toISOString();
    }
}

/** Stream a file untouched, with range support. */
async function serveRaw(req, res, fd, stat, file) {
    const size = stat.size;
    const range = parseRange(req.headers.range, size);
    if (range === 'unsatisfiable') {
        res.writeHead(416, { 'Content-Range': `bytes */${size}` });
        return res.end();
    }
    const { start, end } = range || { start: 0, end: Math.max(0, size - 1) };
    res.writeHead(range ? 206 : 200, {
        'Content-Type': contentTypeFor(file),
        'Content-Length': end - start + 1,
        'Accept-Ranges': 'bytes',
        ...(range ? { 'Content-Range': `bytes ${start}-${end}/${size}` } : {}),
    });
    if (req.method === 'HEAD') return res.end();

    // Explicit reads rather than a stream off this FileHandle: the header has
    // already been read from it, and mixing the two stalls the response.
    const CHUNK = 64 * 1024;
    const buf = Buffer.alloc(CHUNK);
    for (let pos = start; pos <= end; pos += CHUNK) {
        const want = Math.min(CHUNK, end - pos + 1);
        const { bytesRead } = await fd.read(buf, 0, want, pos);
        if (!bytesRead) break;
        if (!res.write(Buffer.from(buf.subarray(0, bytesRead)))) {
            await new Promise((r) => res.once('drain', r));
        }
    }
    res.end();
}

function contentTypeFor(file) {
    if (file.endsWith('.png')) return 'image/png';
    if (file.endsWith('.json')) return 'application/json';
    return 'video/mp4';
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
        const auth_status = auth.status();
        // Stored keys never expire, so clips whose key we already hold play
        // with no token at all. `configured` reflects that, not just the token.
        return sendJson(res, 200, {
            ...auth_status,
            storedKeys: keyStore.size,
            configured: auth_status.configured || keyStore.size > 0,
            canFetchNewKeys: auth_status.configured,
            prefetch,
        });
    }
    if (url.pathname === '/decrypt/prefetch' && req.method === 'POST') {
        runPrefetch();
        return sendJson(res, 202, { started: true });
    }
    if (url.pathname === '/decrypt/token' && req.method === 'POST') {
        // Behind the site's basic auth, like everything else here. The token is
        // stored, never echoed back.
        let body = '';
        req.on('data', (c) => { body += c; if (body.length > 8192) req.destroy(); });
        return req.on('end', () => {
            try {
                const { token } = JSON.parse(body || '{}');
                const info = auth.setAccessToken(token);
                sendJson(res, 200, { ok: true, ...info });
                // A fresh token is exactly the moment to collect every missing
                // key, so the drive keeps playing once it expires.
                runPrefetch();
            } catch (e) {
                sendJson(res, 400, { ok: false, error: e.message });
            }
        });
    }
    if (url.pathname.startsWith('/decrypt/clip/')) {
        return serveClip(req, res, url.pathname.slice('/decrypt/clip/'.length));
    }
    if (url.pathname.startsWith('/decrypt/inspect/')) {
        return inspectClip(res, url.pathname.slice('/decrypt/inspect/'.length));
    }
    send(res, 404, 'not found');
});

server.listen(PORT, '127.0.0.1', () => {
    log.info(`[decrypt] listening on 127.0.0.1:${PORT}, footage root ${ROOT}`);
    if (!auth.configured) {
        if (keyStore.size) {
            log.info(`[decrypt] no Tesla token, but ${keyStore.size} stored keys: those clips still play.`);
            log.info('[decrypt] a token is only needed for clips recorded since.');
        } else {
            log.info('[decrypt] no Tesla token and no stored keys: encrypted clips stay unplayable');
        }
        return;
    }
    // Say up front what was supplied and when it dies, so an expiry is not
    // mistaken for a broken setup hours later.
    const claims = inspectToken(process.env.TESLA_ACCESS_TOKEN || '');
    if (claims.kind === 'jwt') {
        log.info(`[decrypt] access token for '${claims.aud}', expires ${claims.expiresAt}`);
        if (claims.expired) log.warn('[decrypt] that token has already expired');
        if (claims.aud && !String(claims.aud).includes('dashcam')) {
            log.warn(`[decrypt] audience '${claims.aud}' is not the dashcam service; Tesla will answer 401.`);
            log.warn("[decrypt] the token must come from dashcam.tesla.com (localStorage key ROCP_token).");
        }
    }
    if (auth.status().hasToken && !auth.status().expired) runPrefetch();
    if (!process.env.TESLA_REFRESH_TOKEN) {
        log.info('[decrypt] no refresh token: decryption stops when this one expires.');
        log.info('[decrypt] the dashcam client does not issue refresh tokens, so this is expected.');
    }
});
