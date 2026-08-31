'use strict';

/**
 * Persistent store of per-clip decryption keys.
 *
 * A Tesla dashcam token lasts eight hours, but the keys it buys do not expire:
 * they belong to the clip. So the token is only needed to *fetch* a key, never
 * to use one. Keeping the keys means one sign-in covers every clip already on
 * the drive, for good, and a new token is only needed for footage recorded
 * since.
 *
 * Keys are identified by what the clip itself carries rather than by its path,
 * so moving or renaming a file does not lose its key.
 */

const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

class KeyStore {
    constructor(storePath, log = console) {
        this.storePath = storePath;
        this.log = log;
        this.keys = new Map();
        this.dirty = false;
        this.load();
    }

    /** Identity of a clip, from fields that travel with it. */
    static identity(meta) {
        return crypto.createHash('sha1')
            .update(`${meta.vin}|${meta.key_id}|${meta.timestamp}|${meta.wrapped_key}`)
            .digest('hex');
    }

    load() {
        try {
            const raw = JSON.parse(fs.readFileSync(this.storePath, 'utf8'));
            for (const [id, key] of Object.entries(raw.keys || {})) this.keys.set(id, key);
            this.log.info(`[keys] ${this.keys.size} clip keys loaded from ${this.storePath}`);
        } catch (e) {
            if (e.code !== 'ENOENT') this.log.warn(`[keys] could not read ${this.storePath}: ${e.message}`);
        }
    }

    async save() {
        if (!this.dirty) return;
        try {
            await fsp.mkdir(path.dirname(this.storePath), { recursive: true });
            const body = JSON.stringify({ keys: Object.fromEntries(this.keys) });
            await fsp.writeFile(this.storePath, body, { mode: 0o600 });
            this.dirty = false;
        } catch (e) {
            this.log.warn(`[keys] not persisted (${e.code || e.message}); they will be refetched after a restart`);
        }
    }

    get(meta) {
        const key = this.keys.get(KeyStore.identity(meta));
        return key ? Buffer.from(key, 'base64') : null;
    }

    set(meta, keyBuffer) {
        this.keys.set(KeyStore.identity(meta), keyBuffer.toString('base64'));
        this.dirty = true;
    }

    has(meta) {
        return this.keys.has(KeyStore.identity(meta));
    }

    get size() {
        return this.keys.size;
    }
}

module.exports = { KeyStore };
