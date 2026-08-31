#!/bin/sh
# Runs before nginx starts (the nginx image executes /docker-entrypoint.d/*.sh).
#
# Turns AUTH_USER / AUTH_PASSWORD into a basic-auth htpasswd file. Without them
# the site is served with no authentication at all, which for dashcam footage
# means anyone who can reach the port can watch where you have driven - so say
# so loudly rather than failing silently.
set -eu

AUTH_INC=/etc/nginx/teslacam-auth.inc
HTPASSWD=/etc/nginx/.htpasswd

if [ -n "${AUTH_USER:-}" ] && [ -n "${AUTH_PASSWORD:-}" ]; then
    htpasswd -bc "$HTPASSWD" "$AUTH_USER" "$AUTH_PASSWORD" >/dev/null 2>&1
    # nginx workers drop to an unprivileged user and are the ones that read
    # this file, so it has to belong to them - root-owned 600 yields a 500.
    chown nginx:nginx "$HTPASSWD"
    chmod 400 "$HTPASSWD"
    cat > "$AUTH_INC" <<AUTHCONF
auth_basic           "TeslaCam Studio";
auth_basic_user_file $HTPASSWD;
AUTHCONF
    echo "[teslacam] basic auth enabled for user '${AUTH_USER}'"
else
    : > "$AUTH_INC"
    echo "[teslacam] ============================================================"
    echo "[teslacam] WARNING: no AUTH_USER / AUTH_PASSWORD set."
    echo "[teslacam] This instance is UNAUTHENTICATED: anyone who can reach this"
    echo "[teslacam] port can watch your dashcam footage and read its GPS track."
    echo "[teslacam] Only leave it this way on a trusted private network."
    echo "[teslacam] ============================================================"
fi

if [ ! -d /teslacam ]; then
    echo "[teslacam] WARNING: /teslacam is not mounted - no footage will appear."
    echo "[teslacam] Mount your TeslaCam folder there, e.g.:"
    echo "[teslacam]   -v /mnt/usb/TeslaCam:/teslacam:ro"
fi
