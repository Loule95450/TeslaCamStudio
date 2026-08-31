# Lightweight nginx base image
FROM nginx:alpine

# Node.js is needed to run the injection script
RUN apk add --no-cache nodejs

# Copy the app into the nginx web root
COPY src /usr/share/nginx/html
COPY scripts/inject-umami.js /usr/share/nginx/inject-umami.js

# Entrypoint hook
RUN echo '#!/bin/sh' > /docker-entrypoint.d/99-inject-umami.sh && \
    echo 'cd /usr/share/nginx && node inject-umami.js' >> /docker-entrypoint.d/99-inject-umami.sh && \
    chmod +x /docker-entrypoint.d/99-inject-umami.sh

# Expose port 80
EXPOSE 80

# The nginx base image starts the server by default
