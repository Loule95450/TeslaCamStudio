#!/bin/sh
# Starts the decryption sidecar, but only when there is something to decrypt
# with. Without credentials nothing is started and /decrypt/ answers 502, which
# the app reads as "decryption unavailable" and falls back to explaining that
# the clip is encrypted.
set -eu

if [ -z "${TESLA_REFRESH_TOKEN:-}" ] && [ -z "${TESLA_ACCESS_TOKEN:-}" ]; then
    echo "[teslacam] no TESLA_REFRESH_TOKEN: encrypted clips will stay unplayable"
    exit 0
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
