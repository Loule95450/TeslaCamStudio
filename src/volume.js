/**
 * Docker volume source.
 *
 * When the app is served by its container, the user's TeslaCam folder is
 * bind-mounted at /teslacam and nginx exposes it with `autoindex_format json`.
 * This module walks that listing and produces file-like objects that the rest
 * of the player already knows how to consume: the same duck type as TauriFile
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
        return null; // not served, or the network is gone
    }
    if (!response.ok) return null;
    if (!/json/i.test(response.headers.get('content-type') || '')) return null;

    try {
        const entries = await response.json();
        return Array.isArray(entries) ? entries : null;
    } catch {
        return null; // autoindex off, or a listing we cannot parse
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

    const entries = await listVolumeDirectory(url);
    if (!entries) return [];

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
 * Is a TeslaCam volume mounted and browsable?
 *
 * Accepts either layout: the mount is the TeslaCam folder itself, or it holds
 * a TeslaCam folder. Returns the URL and label of the folder to walk, or null.
 */
async function detectTeslaCamVolume() {
    const entries = await listVolumeDirectory(VOLUME_ROOT);
    if (!entries) return null;

    const names = entries.filter((e) => e && e.type === 'directory').map((e) => e.name);

    if (names.some((name) => TESLACAM_SUBFOLDERS.includes(name))) {
        return { url: VOLUME_ROOT, label: 'TeslaCam' };
    }

    // Mounted one level up: /teslacam/TeslaCam/RecentClips/...
    const nested = names.find((name) => name === 'TeslaCam');
    if (nested) {
        const nestedUrl = `${VOLUME_ROOT}${encodeURIComponent(nested)}/`;
        const nestedEntries = await listVolumeDirectory(nestedUrl);
        if (nestedEntries && nestedEntries.some((e) => e && TESLACAM_SUBFOLDERS.includes(e.name))) {
            return { url: nestedUrl, label: 'TeslaCam' };
        }
    }

    return null;
}

/**
 * Full discovery pass.
 * @returns {Promise<VolumeFile[]|null>} null when no volume is mounted.
 */
async function loadTeslaCamVolume() {
    const root = await detectTeslaCamVolume();
    if (!root) return null;

    const files = await collectVolumeFiles(root.url, root.label);
    console.log(`[volume] ${files.length} files discovered under ${root.url}`);
    return files;
}
