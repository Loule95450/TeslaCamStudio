#!/bin/sh
# Runs before nginx starts (the nginx image executes /docker-entrypoint.d/*.sh).
#
# Two jobs:
#   1. optionally run the nginx workers as the owner of the mounted footage, so
#      a private NAS folder can be read without loosening its permissions;
#   2. turn AUTH_USER / AUTH_PASSWORD into a basic-auth htpasswd file.
set -eu

AUTH_INC=/etc/nginx/teslacam-auth.inc
HTPASSWD=/etc/nginx/.htpasswd
WORKER_USER=nginx
WORKER_GROUP=nginx

# --- optional PUID / PGID ----------------------------------------------------
#
# Note this is NOT the same as docker's `user:` setting. Running the whole
# container as a non-root user breaks it: the master process could not bind
# port 80 nor write its own config. Only the workers need to change identity,
# which is what nginx's `user` directive does.
if [ -n "${PUID:-}" ] && [ -n "${PGID:-}" ]; then
    existing_group=$(getent group "$PGID" 2>/dev/null | cut -d: -f1 || true)
    if [ -n "$existing_group" ]; then
        WORKER_GROUP=$existing_group
    else
        WORKER_GROUP=teslacam
        addgroup -g "$PGID" "$WORKER_GROUP"
    fi

    existing_user=$(getent passwd "$PUID" 2>/dev/null | cut -d: -f1 || true)
    if [ -n "$existing_user" ]; then
        WORKER_USER=$existing_user
    else
        WORKER_USER=teslacam
        adduser -D -H -u "$PUID" -G "$WORKER_GROUP" "$WORKER_USER"
    fi

    sed -i "s/^user .*/user ${WORKER_USER} ${WORKER_GROUP};/" /etc/nginx/nginx.conf
    # The workers own their runtime directories once they are no longer nginx.
    chown -R "$PUID:$PGID" /var/cache/nginx
    echo "[teslacam] nginx workers run as ${WORKER_USER}:${WORKER_GROUP} (${PUID}:${PGID})"
fi

# --- optional basic auth -----------------------------------------------------
#
# Without credentials the site is served with no authentication at all, which
# for dashcam footage means anyone who can reach the port can watch where you
# have driven. Say so loudly rather than failing silently.
if [ -n "${AUTH_USER:-}" ] && [ -n "${AUTH_PASSWORD:-}" ]; then
    htpasswd -bc "$HTPASSWD" "$AUTH_USER" "$AUTH_PASSWORD" >/dev/null 2>&1
    # The workers are the ones that read this file, so it has to belong to
    # them: root-owned 0600 makes every authenticated request 500.
    chown "${WORKER_USER}:${WORKER_GROUP}" "$HTPASSWD"
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
