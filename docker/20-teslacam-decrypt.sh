#!/bin/sh
# Starts the decryption sidecar.
set -eu

# The sidecar always runs, even with no credentials: a token can be pasted into
# the running app, and that needs an endpoint to be listening. With nothing
# configured it simply reports that it cannot decrypt yet.
if [ -z "${TESLA_REFRESH_TOKEN:-}" ] && [ -z "${TESLA_ACCESS_TOKEN:-}" ]; then
    echo "[teslacam] no Tesla token set; paste one in the app to decrypt clips"
fi

STORE="${TESLA_TOKEN_STORE:-/config/tesla-token.json}"
mkdir -p "$(dirname "$STORE")" 2>/dev/null || true
if ! touch "$STORE" 2>/dev/null; then
    echo "[teslacam] WARNING: $(dirname "$STORE") is not writable."
    echo "[teslacam] Tesla rotates the refresh token on every use, so without a"
    echo "[teslacam] writable path the rotated token is lost and decryption stops"
    echo "[teslacam] working after the first renewal. Mount a volume there."
else
    chown "${PUID:-0}:${PGID:-0}" "$STORE" 2>/dev/null || true
fi

echo "[teslacam] starting the decryption sidecar"
TESLACAM_ROOT=/teslacam \
DECRYPT_PORT=8189 \
node /opt/teslacam/decrypt-server.js &
