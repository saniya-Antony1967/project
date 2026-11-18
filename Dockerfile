# Use Red Hat Universal Base Image (UBI 9) for Node.js
FROM registry.access.redhat.com/ubi9/nodejs-20:latest

# OpenShift specific labels
LABEL io.k8s.description="Wanderlust Travel Booking Platform" \
      io.k8s.display-name="Wanderlust Travel Booking App" \
      io.openshift.expose-services="3000:http" \
      io.openshift.tags="nodejs,travel,booking,spa"

# Set working directory inside container
WORKDIR /opt/app-root/src

# Copy package configuration
COPY --chown=1001:0 package.json ./

# Copy all application static assets and source code
COPY --chown=1001:0 index.html styles.css app.js data.js server.js ./

# OpenShift permissions check for arbitrary user IDs (GID 0)
RUN chmod -R g+rwX /opt/app-root/src

# Expose port
EXPOSE 3000

# Set environment
ENV PORT=3000 \
    HOST=0.0.0.0 \
    NODE_ENV=production

# Run with standard non-root user (UID 1001)
USER 1001

# Start the Node.js server
CMD ["node", "server.js"]
