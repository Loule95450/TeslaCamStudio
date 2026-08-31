'use strict';

/**
 * Tesla token handling.
 *
 * An access token lasts hours, so pinning one in an environment variable means
 * decryption stops working overnight. A refresh token lasts months, but Tesla
 * rotates it: each refresh consumes the old one and returns a new one. That
 * makes a refresh token in an environment variable a one-shot too, since the
 * variable cannot be written back.
 *
 * So the environment variable is treated as a seed. The current refresh token
 * is kept in a small state file, and the seed is only used when that file has
 * nothing in it. Set TESLA_TOKEN_STORE to a path on a writable volume, or the
 * rotation is lost on every restart and you are back to one-shot.
 *
 * Tokens are never logged and never sent to the browser.
 */

const fs = require('fs');
const path = require('path');

// Taken from dashcam.tesla.com's own bundle. The dashcam service has its own
// OAuth client: a token minted for `ownerapi` (what third-party Tesla auth apps
// hand out) is refused with HTTP 401. There is no audience parameter.
const TOKEN_URL = process.env.TESLA_TOKEN_URL || 'https://auth.tesla.com/oauth2/v3/token';
const CLIENT_ID = process.env.TESLA_CLIENT_ID || 'dashcam';
const SCOPE = process.env.TESLA_SCOPE || 'openid profile email employee';
const REDIRECT_URI = process.env.TESLA_REDIRECT_URI || 'https://dashcam.tesla.com/callback';
const EXPIRY_MARGIN_MS = 60_000;

/**
 * Tidy up a pasted token.
 *
 * localStorage holds it JSON-encoded, so copying it out of the DevTools
 * storage view brings the quotes along, and people reasonably paste the whole
 * `Authorization` value including "Bearer ". Both would otherwise fail as an
 * opaque 401.
 */
function normaliseToken(value) {
    if (!value) return null;
    let t = String(value).trim();
    if (t.startsWith('"') && t.endsWith('"')) t = t.slice(1, -1);
    if (/^bearer\s+/i.test(t)) t = t.replace(/^bearer\s+/i, '');
    return t.trim() || null;
}

class TeslaAuth {
    constructor({ refreshToken, accessToken, storePath, log = console }) {
        refreshToken = normaliseToken(refreshToken);
        accessToken = normaliseToken(accessToken);
        this.seedRefreshToken = refreshToken || null;
        this.storePath = storePath || '/config/tesla-token.json';
        this.log = log;
        this.accessToken = accessToken || null;
        this.accessTokenExpiry = 0;
        if (!this.accessToken) {
            const stored = normaliseToken(this.readStoredAccessToken());
            if (stored) {
                const { exp } = decodeClaims(stored) || {};
                if (!exp || exp * 1000 > Date.now()) {
                    this.accessToken = stored;
                    accessToken = stored;
                }
            }
        }
        if (accessToken) {
            const { exp } = decodeClaims(accessToken) || {};
            this.accessTokenExpiry = exp ? exp * 1000 : Date.now() + 5 * 60_000;
        }
        this.refreshing = null;
    }

    get configured() {
        return Boolean(this.seedRefreshToken || this.accessToken || this.readStore());
    }

    readStore() {
        try {
            return JSON.parse(fs.readFileSync(this.storePath, 'utf8')).refresh_token || null;
        } catch {
            return null;
        }
    }

    writeStore(refreshToken) {
        try {
            fs.mkdirSync(path.dirname(this.storePath), { recursive: true });
            fs.writeFileSync(this.storePath, JSON.stringify({ refresh_token: refreshToken }), { mode: 0o600 });
            return true;
        } catch (e) {
            this.log.warn(`[auth] could not persist the rotated refresh token to ${this.storePath}: ${e.code || e.message}`);
            this.log.warn('[auth] mount a writable volume there, or the next restart falls back to the seed token');
            return false;
        }
    }

    /** The stored token wins: it is the one that has not been consumed yet. */
    currentRefreshToken() {
        return this.readStore() || this.seedRefreshToken;
    }

    async getAccessToken() {
        if (this.accessToken && Date.now() < this.accessTokenExpiry - EXPIRY_MARGIN_MS) {
            return this.accessToken;
        }
        if (!this.refreshing) {
            this.refreshing = this.refresh().finally(() => { this.refreshing = null; });
        }
        return this.refreshing;
    }

    async refresh() {
        const refreshToken = this.currentRefreshToken();
        if (!refreshToken) {
            throw new Error('no Tesla refresh token configured');
        }

        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                client_id: CLIENT_ID,
                refresh_token: refreshToken,
                redirect_uri: REDIRECT_URI,
                scope: SCOPE,
            }),
        });

        if (!response.ok) {
            const detail = response.status === 401
                ? 'the refresh token was rejected: it may already have been used, or it expired'
                : `HTTP ${response.status}`;
            throw new Error(`Tesla token refresh failed - ${detail}`);
        }

        const body = await response.json();
        if (!body.access_token) throw new Error('Tesla token refresh returned no access token');

        this.accessToken = body.access_token;
        this.accessTokenExpiry = Date.now() + (Number(body.expires_in) || 3600) * 1000;

        // Tesla rotates the refresh token; keep the new one or the next refresh fails.
        if (body.refresh_token && body.refresh_token !== refreshToken) {
            this.writeStore(body.refresh_token);
            this.log.info('[auth] refresh token rotated and stored');
        }
        this.log.info('[auth] access token renewed');
        return this.accessToken;
    }

    /**
     * Replace the access token at runtime.
     *
     * The dashcam client issues no refresh token, so a token lasts eight hours
     * and then has to be replaced by hand. Doing that through an endpoint
     * beats editing the compose file and restarting the container.
     */
    setAccessToken(raw) {
        const token = normaliseToken(raw);
        if (!token) throw new Error('empty token');
        const claims = decodeClaims(token);
        if (!claims) throw new Error('that does not look like a JWT');
        if (claims.exp && claims.exp * 1000 < Date.now()) {
            throw new Error(`that token expired on ${new Date(claims.exp * 1000).toISOString()}`);
        }
        this.accessToken = token;
        this.accessTokenExpiry = claims.exp ? claims.exp * 1000 : Date.now() + 8 * 3600_000;
        this.persistAccessToken(token);
        this.log.info(`[auth] access token replaced, expires ${new Date(this.accessTokenExpiry).toISOString()}`);
        return { aud: claims.aud, expiresAt: new Date(this.accessTokenExpiry).toISOString() };
    }

    /** Keep it across restarts when /config is writable. */
    persistAccessToken(token) {
        try {
            fs.mkdirSync(path.dirname(this.storePath), { recursive: true });
            const current = (() => { try { return JSON.parse(fs.readFileSync(this.storePath, 'utf8')); } catch { return {}; } })();
            fs.writeFileSync(this.storePath, JSON.stringify({ ...current, access_token: token }), { mode: 0o600 });
        } catch (e) {
            this.log.warn(`[auth] token not persisted (${e.code || e.message}); it will be lost on restart`);
        }
    }

    readStoredAccessToken() {
        try {
            return JSON.parse(fs.readFileSync(this.storePath, 'utf8')).access_token || null;
        } catch {
            return null;
        }
    }

    /** What the UI may know: never the token itself. */
    status() {
        const claims = this.accessToken ? decodeClaims(this.accessToken) : null;
        return {
            configured: Boolean(this.accessToken || this.currentRefreshToken()),
            hasToken: Boolean(this.accessToken),
            expiresAt: this.accessTokenExpiry ? new Date(this.accessTokenExpiry).toISOString() : null,
            expired: this.accessTokenExpiry ? this.accessTokenExpiry < Date.now() : null,
            audience: claims ? claims.aud : null,
            canRefresh: Boolean(this.currentRefreshToken()),
        };
    }

    /** Force a refresh once, for when the API rejects a token we thought was good. */
    invalidate() {
        this.accessToken = null;
        this.accessTokenExpiry = 0;
    }
}

/**
 * Read the unsigned claims of a JWT, for diagnostics only.
 *
 * A 401 from Tesla is nearly always an audience mismatch rather than an
 * expiry, and the claims say which. Never returns the signature, and callers
 * must only log `aud`, `iss` and `exp`: the rest can identify the account.
 */
function decodeClaims(token) {
    try {
        const [, payload] = String(token).split('.');
        if (!payload) return null;
        return JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    } catch {
        return null;
    }
}

function inspectToken(token) {
    try {
        const claims = decodeClaims(token);
        if (!claims) return { kind: 'opaque, not a JWT' };
        return {
            kind: 'jwt',
            aud: claims.aud,
            iss: claims.iss,
            scp: claims.scp,
            expiresAt: claims.exp ? new Date(claims.exp * 1000).toISOString() : undefined,
            expired: claims.exp ? claims.exp * 1000 < Date.now() : undefined,
        };
    } catch {
        return { kind: 'unreadable' };
    }
}

module.exports = { TeslaAuth, inspectToken, normaliseToken, TOKEN_URL, CLIENT_ID, SCOPE, REDIRECT_URI };
