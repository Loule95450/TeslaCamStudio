# TeslaCam Studio - a static player served by nginx, reading footage straight
# out of a read-only bind mount at /teslacam.
#
#   docker run -p 8188:80 -v /mnt/usb/TeslaCam:/teslacam:ro \
#     -e AUTH_USER=me -e AUTH_PASSWORD=secret \
#     ghcr.io/loule95450/teslacamstudio:latest
FROM nginx:1.27-alpine

# htpasswd for the optional basic auth; node runs the decryption sidecar.
RUN apk add --no-cache apache2-utils nodejs

COPY src /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY docker/10-teslacam-auth.sh /docker-entrypoint.d/10-teslacam-auth.sh
COPY docker/20-teslacam-decrypt.sh /docker-entrypoint.d/20-teslacam-decrypt.sh
COPY docker/tesla-crypto.js docker/tesla-auth.js docker/decrypt-server.js /opt/teslacam/

# The include must exist even when the hook has not run yet (e.g. `nginx -t`).
RUN chmod +x /docker-entrypoint.d/10-teslacam-auth.sh /docker-entrypoint.d/20-teslacam-decrypt.sh \
 && touch /etc/nginx/teslacam-auth.inc \
 && mkdir -p /teslacam \
 && nginx -t

EXPOSE 80
