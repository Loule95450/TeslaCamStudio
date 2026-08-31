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

const TOKEN_URL = 'https://auth.tesla.com/oauth2/v3/token';
const CLIENT_ID = 'ownerapi';
const SCOPE = 'openid email offline_access';
const EXPIRY_MARGIN_MS = 60_000;

class TeslaAuth {
    constructor({ refreshToken, accessToken, storePath, log = console }) {
        this.seedRefreshToken = refreshToken || null;
        this.storePath = storePath || '/config/tesla-token.json';
        this.log = log;
        this.accessToken = accessToken || null;
        // An access token supplied directly has an unknown lifetime; assume it
        // is already close to expiry so the first failure triggers a refresh.
        this.accessTokenExpiry = accessToken ? Date.now() + 5 * 60_000 : 0;
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                grant_type: 'refresh_token',
                client_id: CLIENT_ID,
                refresh_token: refreshToken,
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

    /** Force a refresh once, for when the API rejects a token we thought was good. */
    invalidate() {
        this.accessToken = null;
        this.accessTokenExpiry = 0;
    }
}

module.exports = { TeslaAuth, TOKEN_URL, CLIENT_ID, SCOPE };
