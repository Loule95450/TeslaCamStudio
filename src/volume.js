/**
 * Docker volume source.
 *
 * When the app is served by its container, the user's TeslaCam folder is
 * bind-mounted at /teslacam and nginx exposes it with `autoindex_format json`.
 * This module walks that listing and produces file-like objects that the rest
 * of the player already knows how to consume: a plain duck type
 * (name / path / webkitRelativePath / text() / arrayBuffer()), so playback,
 * thumbnails and metadata parsing all flow through getFileUrl() unchanged.
 *
 * No folder picker, no upload: the browser only ever fetches URLs.
 */

const VOLUME_ROOT = '/teslacam/';
const VOLUME_MAX_DEPTH = 4;
const VOLUME_FETCH_CONCURRENCY = 8;

const TESLACAM_SUBFOLDERS = ['RecentClips', 'SavedClips', 'SentryClips'];
const VOLUME_WANTED_FILES = /\.(mp4|png)$|^event\.json$/i;

class VolumeFile {
    /**
     * @param {string} url - absolute URL the file is served at
     * @param {string} relativePath - path as the player expects it, e.g.
     *        "TeslaCam/SentryClips/2024-01-15_12-30-00/front.mp4"
     * @param {number} size - size in bytes, from the autoindex listing
     * @param {number} lastModified - epoch ms, from the autoindex listing
     */
    constructor(url, relativePath, size = 0, lastModified = 0) {
        this.url = url;
        // Several call sites branch on `file.path` to decide between a local
        // File and something fetched over HTTP; the URL is our path.
        this.path = url;
        this.name = relativePath.split('/').pop();
        this.webkitRelativePath = relativePath;
        this.size = size;
        this.lastModified = lastModified;
        this.type = VolumeFile.guessType(this.name);
    }

    static guessType(name) {
        if (name.endsWith('.mp4')) return 'video/mp4';
        if (name.endsWith('.json')) return 'application/json';
        if (name.endsWith('.png')) return 'image/png';
        return '';
    }

    async #fetch() {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error(`Failed to read ${this.webkitRelativePath}: HTTP ${response.status}`);
        }
        return response;
    }

    async text() {
        return (await this.#fetch()).text();
    }

    async arrayBuffer() {
        return (await this.#fetch()).arrayBuffer();
    }

    async blob() {
        return (await this.#fetch()).blob();
    }
}

/**
 * Read one directory from the nginx JSON autoindex.
 * @returns {Promise<Array<{name: string, type: string, size?: number, mtime?: string}>|null>}
 *          null when the path is not a browsable directory.
 */
async function listVolumeDirectory(url) {
    let response;
    try {
        response = await fetch(url, { headers: { Accept: 'application/json' } });
    } catch {
        return { status: 'unreachable', entries: null };
    }
    if (response.status === 403) {
        // Mounted, but the nginx worker cannot read it. Common on a NAS where
        // the shared folder is 0700 and owned by a uid the container is not.
        return { status: 'forbidden', entries: null };
    }
    if (!response.ok) {
        return { status: 'unreachable', entries: null, code: response.status };
    }
    if (!/json/i.test(response.headers.get('content-type') || '')) {
        return { status: 'unreachable', entries: null };
    }
    try {
        const entries = await response.json();
        if (!Array.isArray(entries)) return { status: 'unreachable', entries: null };
        return { status: 'ok', entries };
    } catch {
        return { status: 'unreachable', entries: null };
    }
}

/** Run `worker` over `items`, a few at a time, preserving input order. */
async function mapWithConcurrency(items, limit, worker) {
    const results = new Array(items.length);
    let next = 0;
    const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
        while (true) {
            const i = next++;
            if (i >= items.length) return;
            results[i] = await worker(items[i], i);
        }
    });
    await Promise.all(runners);
    return results;
}

/**
 * Walk a directory of the volume and collect every file the player cares about.
 */
async function collectVolumeFiles(url, relativePath, depth = 0) {
    if (depth > VOLUME_MAX_DEPTH) return [];

    const listing = await listVolumeDirectory(url);
    if (listing.status !== 'ok') return [];
    const entries = listing.entries;

    const files = [];
    const directories = [];

    for (const entry of entries) {
        if (!entry || !entry.name || entry.name.startsWith('.')) continue;
        const childRelative = `${relativePath}/${entry.name}`;

        if (entry.type === 'directory') {
            directories.push({ url: `${url}${encodeURIComponent(entry.name)}/`, relativePath: childRelative });
        } else if (entry.type === 'file' && VOLUME_WANTED_FILES.test(entry.name)) {
            files.push(new VolumeFile(
                `${url}${encodeURIComponent(entry.name)}`,
                childRelative,
                Number(entry.size) || 0,
                entry.mtime ? Date.parse(entry.mtime) || 0 : 0
            ));
        }
    }

    const nested = await mapWithConcurrency(
        directories,
        VOLUME_FETCH_CONCURRENCY,
        (dir) => collectVolumeFiles(dir.url, dir.relativePath, depth + 1)
    );

    return files.concat(...nested);
}

/**
 * Work out what is actually at /teslacam, and say so precisely.
 *
 * Every failure mode used to look identical from the browser (all of them
 * return HTTP 200 with valid JSON), so a wrong mount, an unreadable mount and
 * no mount at all were indistinguishable and fell back silently to the folder
 * picker. This reports which one it is.
 *
 * @returns {Promise<{status: string, url?: string, label?: string, found?: string[]}>}
 *   status is one of: ok | forbidden | empty | not-teslacam | unreachable
 */
async function probeTeslaCamVolume() {
    const root = await listVolumeDirectory(VOLUME_ROOT);
    if (root.status !== 'ok') return { status: root.status };

    const dirs = root.entries.filter((e) => e && e.type === 'directory').map((e) => e.name);
    const all = root.entries.filter((e) => e && e.name).map((e) => e.name);

    if (dirs.some((name) => TESLACAM_SUBFOLDERS.includes(name))) {
        return { status: 'ok', url: VOLUME_ROOT, label: 'TeslaCam' };
    }

    // Mounted one level up: /teslacam/TeslaCam/RecentClips/...
    if (dirs.includes('TeslaCam')) {
        const nestedUrl = `${VOLUME_ROOT}TeslaCam/`;
        const nested = await listVolumeDirectory(nestedUrl);
        if (nested.status === 'ok' &&
            nested.entries.some((e) => e && TESLACAM_SUBFOLDERS.includes(e.name))) {
            return { status: 'ok', url: nestedUrl, label: 'TeslaCam' };
        }
    }

    if (all.length === 0) return { status: 'empty' };
    return { status: 'not-teslacam', found: all.slice(0, 8) };
}

/**
 * Full discovery pass.
 * @returns {Promise<{status: string, files?: VolumeFile[], found?: string[]}>}
 */
async function loadTeslaCamVolume() {
    const probe = await probeTeslaCamVolume();
    if (probe.status !== 'ok') {
        console.warn(`[volume] ${VOLUME_ROOT} probe: ${probe.status}`,
                     probe.found ? `- found instead: ${probe.found.join(', ')}` : '');
        return probe;
    }

    const files = await collectVolumeFiles(probe.url, probe.label);
    console.log(`[volume] ${files.length} files discovered under ${probe.url}`);
    return { status: files.length ? 'ok' : 'no-clips', files };
}

/* ---------------------------------------------------------------------------
   Encrypted clips

   Vehicle software 2026.20 encrypts dashcam footage on the USB drive by
   default. The folder layout and the .mp4 extension are unchanged, but the
   bytes are AES-128-CBC in 4096-byte chunks, so no player can open them.

   The per-file keys live on Tesla's servers, not on the drive, and are fetched
   against a Tesla account. That means this app cannot decrypt anything: the
   most useful thing it can do is recognise an encrypted clip and say so,
   rather than handing the browser a file it will silently fail to decode.

   Detection is cheap and definitive: a real MP4 carries the `ftyp` box type at
   offset 4, and an encrypted clip does not.
   --------------------------------------------------------------------------- */

const MP4_FTYP = [0x66, 0x74, 0x79, 0x70]; // "ftyp"

/** Read the first `n` bytes of a clip, whichever kind of file object it is. */
async function readFileHead(file, n = 16) {
    if (typeof File !== 'undefined' && file instanceof File) {
        return new Uint8Array(await file.slice(0, n).arrayBuffer());
    }
    const url = file.url || file.path;
    if (!url) return null;
    const response = await fetch(url, { headers: { Range: `bytes=0-${n - 1}` } });
    if (!response.ok) return null;
    return new Uint8Array(await response.arrayBuffer());
}

/**
 * True when the file is not a playable MP4, which for a TeslaCam .mp4 means
 * it is encrypted. Returns null when the check could not be made, so callers
 * can tell "not encrypted" apart from "do not know".
 */
async function isClipEncrypted(file) {
    let head;
    try {
        head = await readFileHead(file, 16);
    } catch {
        return null;
    }
    if (!head || head.length < 8) return null;
    return !MP4_FTYP.every((b, i) => head[4 + i] === b);
}

/**
 * Probe one representative clip per event, a few at a time, and tag the event.
 * Encryption is a per-recording setting, so one segment answers for the event.
 */
async function markEncryptedEvents(events) {
    const targets = events
        .map((event) => {
            const segment = event.segments && event.segments[0];
            const file = segment && segment.files &&
                Object.values(segment.files).find((f) => f && f.name.endsWith('.mp4'));
            return file ? { event, file } : null;
        })
        .filter(Boolean);

    await mapWithConcurrency(targets, VOLUME_FETCH_CONCURRENCY, async ({ event, file }) => {
        event.encrypted = await isClipEncrypted(file);
    });

    const count = events.filter((e) => e.encrypted).length;
    if (count) console.warn(`[encryption] ${count} of ${events.length} events are encrypted clips`);
    return count;
}
