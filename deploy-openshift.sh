#!/usr/bin/env bash
# Deploy Wanderlust Travel App directly to Red Hat OpenShift without GitHub

set -e

PROJECT_NAME="${1:-travel-booking}"

echo "========================================================"
echo "  Deploying Travel Booking App to Red Hat OpenShift"
echo "  (Zero GitHub / Local Directory Binary Build)"
echo "========================================================"

# 1. Check if oc CLI is installed
if ! command -v oc &> /dev/null; then
    echo "[ERROR] OpenShift CLI ('oc') is not installed or not in PATH."
    echo "Install it from: https://console.redhat.com/openshift/downloads"
    exit 1
fi

# 2. Check login
if ! oc whoami &> /dev/null; then
    echo "[ERROR] You are not logged into an OpenShift cluster."
    echo "Log in using: oc login --token=<token> --server=<server-url>"
    exit 1
fi

echo "Logged in as: $(oc whoami)"

# 3. Create/Switch project
echo "[1/4] Switching to project: $PROJECT_NAME"
oc new-project "$PROJECT_NAME" 2>/dev/null || oc project "$PROJECT_NAME"

# 4. Apply resources
echo "[2/4] Creating ImageStream, BuildConfig, Deployment, Service, and Route..."
oc apply -f openshift/app.yaml

# 5. Start Binary Build from current local directory
echo "[3/4] Streaming local files to OpenShift cluster for binary build..."
oc start-build travel-booking-app --from-dir=. --follow

# 6. Retrieve Route URL
echo "[4/4] Getting live route URL..."
sleep 3
ROUTE_HOST=$(oc get route travel-booking-app -o jsonpath='{.spec.host}')

echo "========================================================"
echo "🎉 DEPLOYMENT COMPLETE!"
echo "Public URL: https://$ROUTE_HOST"
echo "========================================================"
