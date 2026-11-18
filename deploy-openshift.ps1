<#
.SYNOPSIS
    Deploys the Wanderlust Travel Booking App directly to Red Hat OpenShift without GitHub.
.DESCRIPTION
    Uses OpenShift's binary build capability to stream local project files directly to the OpenShift cluster.
#>

[CmdletBinding()]
param(
    [string]$Project = "travel-booking"
)

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Deploying Travel Booking App to Red Hat OpenShift" -ForegroundColor Cyan
Write-Host "  (Zero GitHub / Local Directory Binary Build)" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

# 1. Verify oc CLI is installed
if (-not (Get-Command oc -ErrorAction SilentlyContinue)) {
    Write-Host "`n[ERROR] OpenShift CLI ('oc') was not found in your PATH." -ForegroundColor Red
    Write-Host "Please download the OpenShift CLI from Red Hat:" -ForegroundColor Yellow
    Write-Host "https://console.redhat.com/openshift/downloads" -ForegroundColor White
    Write-Host "Or install via winget: winget install RedHat.OpenShiftCLI`n" -ForegroundColor White
    exit 1
}

# 2. Check login status
Write-Host "`n[1/5] Checking OpenShift login status..." -ForegroundColor Green
$currentUser = oc whoami 2>$null
if (-not $currentUser) {
    Write-Host "[ERROR] You are not currently logged into an OpenShift cluster." -ForegroundColor Red
    Write-Host "Log in using the login token from your OpenShift Web Console (top-right menu -> 'Copy login command'):" -ForegroundColor Yellow
    Write-Host "oc login --token=<your-token> --server=<your-openshift-api-url>`n" -ForegroundColor White
    exit 1
}
Write-Host "Logged in as: $currentUser" -ForegroundColor White

# 3. Create or switch to project/namespace
Write-Host "`n[2/5] Setting up OpenShift Project: $Project..." -ForegroundColor Green
oc new-project $Project 2>$null
oc project $Project

# 4. Apply OpenShift resources (ImageStream, BuildConfig, Deployment, Service, Route)
Write-Host "`n[3/5] Applying OpenShift resources..." -ForegroundColor Green
oc apply -f openshift/app.yaml

# 5. Start Binary Build from current local directory (NO GITHUB REQUIRED!)
Write-Host "`n[4/5] Streaming local project directory to OpenShift for container build..." -ForegroundColor Green
oc start-build travel-booking-app --from-dir=. --follow

# 6. Retrieve Route URL
Write-Host "`n[5/5] Fetching live public application URL..." -ForegroundColor Green
Start-Sleep -Seconds 3
$routeHost = oc get route travel-booking-app -o jsonpath="{.spec.host}" 2>$null

Write-Host "`n========================================================" -ForegroundColor Cyan
Write-Host "🎉 DEPLOYMENT COMPLETE!" -ForegroundColor Green
if ($routeHost) {
    Write-Host "Your live application is accessible at:" -ForegroundColor White
    Write-Host "https://$routeHost" -ForegroundColor Yellow
} else {
    Write-Host "Check route status: oc get route travel-booking-app" -ForegroundColor White
}
Write-Host "========================================================`n" -ForegroundColor Cyan
