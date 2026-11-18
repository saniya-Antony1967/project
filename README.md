# ✈️ Wanderlust - Travel Booking Platform

A complete, responsive travel booking platform application featuring handcrafted travel packages, interactive destination exploration, real-time price calculators, checkout with promo code discounts, digital printable vouchers with QR codes, and a booking management dashboard.

---

## 🌟 Application Pages & Highlights

| Page | Purpose & Key Features |
| :--- | :--- |
| **1. Welcome & Landing Page (Home)** | • Hero banner with inspiring travel tagline<br>• Live Search Widget (Destination autocomplete, departure date, categories, travelers)<br>• Quick category filter pills (Tropical Beaches, Mountain Escapes, Historic & Cultural, Safari, Winter)<br>• Featured & Trending Packages grid with badges & pricing<br>• Promotional Discount Banner (20% off with coupon `WANDER20`)<br>• "Why Choose Us" feature guarantees & customer testimonials |
| **2. Explore & Catalog Page** | • Interactive sidebar filters: Keyword search, Multi-category checkboxes, Max budget slider ($500 - $2,500), Trip duration<br>• Dynamic sorting (Featured, Price: Low to High, Price: High to Low, Highest Rated, Duration)<br>• Real-time package count and interactive destination cards |
| **3. Trip Details Page** | • High-resolution photo gallery with thumbnail previews<br>• Overview & Curated Tour Highlights<br>• Inclusions & Exclusions checklists<br>• Collapsible Day-by-Day Itinerary timeline (Days 1–9)<br>• Sticky Interactive Booking Widget with dynamic recalculation (travelers, room upgrades, 5% taxes) |
| **4. Booking & Checkout Page** | • 3-step progress indicator (Trip Selection → Traveler Info → Confirmation)<br>• Lead passenger form (Name, Email, Phone, Country, Passport ID, Special dietary requests)<br>• Optional Trip Extras (Travel Insurance, VIP Airport Transfer, Private Photographer)<br>• Promo Code Engine (`WANDER20` for 20% off, `TRAVEL100` for $100 off)<br>• Multiple Payment tabs (Credit Card, PayPal, Apple/Google Pay)<br>• Sticky Order Summary card with live price breakdown |
| **5. Confirmation & Digital Voucher** | • Confirmation checkmark & celebration header<br>• Official Digital Boarding Pass / Travel Voucher with simulated QR/Barcode<br>• Unique Booking Reference ID (e.g. `WL-2026-8491`)<br>• Lead traveler, destination, dates, room tier, and total paid<br>• Actions: 🖨️ Print / Save Voucher as PDF (`@media print` optimized), View in My Bookings, Back to Home |
| **6. My Bookings Dashboard** | • Tabbed filtering: "All Trips", "Upcoming", "Cancelled"<br>• Saved persistently in browser `localStorage`<br>• Pre-seeded with a demo trip + saves any newly booked trips<br>• "View Voucher" quick modal and "Cancel Trip" with 100% refund confirmation modal |
| **7. Help, Support & FAQs** | • 24/7 Hotline, WhatsApp Concierge, and Email support cards<br>• Expandable FAQ Accordion (Booking policies, Cancellations, Flights, Visas)<br>• Contact Inquiry submission form with instant toast notifications |

---

## 🚀 Quickstart & How to Run

### Method 1: Using Node.js (Zero external dependencies)
Open a terminal in this directory and start the built-in HTTP server:
```bash
node server.js
```
Then visit:
```
http://localhost:3000
```

### Method 2: Direct File Open (No server required!)
Simply double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Safari, or Firefox. All assets (styling, logic, and data) are self-contained and run cleanly out of the box!

---

## 🔴 Deploy to Red Hat OpenShift (Without GitHub)

You can deploy directly to your Red Hat OpenShift cluster from your local directory without using Git or GitHub using OpenShift's native **Binary Build**:

### 1. Log In to Your OpenShift Cluster
In your terminal, paste the login command from your OpenShift Web Console (top right menu -> *Copy login command*):
```bash
oc login --token=<your-token> --server=<your-openshift-api-url>
```

### 2. Run the Automated Deployment Script
- On Windows (PowerShell):
  ```powershell
  .\deploy-openshift.ps1
  ```
- On Linux/macOS/Git Bash:
  ```bash
  chmod +x deploy-openshift.sh
  ./deploy-openshift.sh
  ```

### Or Step-by-Step Manual Commands:
```bash
# 1. Create a project
oc new-project travel-booking

# 2. Apply ImageStream, BuildConfig, Deployment, Service & Route
oc apply -f openshift/app.yaml

# 3. Stream local code directly to OpenShift (Zero GitHub!)
oc start-build travel-booking-app --from-dir=. --follow

# 4. View your live application URL
oc get route travel-booking-app
```

---

## 💱 Multi-Currency Support
Switch between currencies seamlessly in the header navigation:
- **USD ($)**
- **EUR (€)**
- **GBP (£)**
- **INR (₹)**

All package prices, room upgrades, add-ons, and checkout subtotals automatically recalculate in real-time.

---

## 📁 Project Structure

```
travel-booking-app/
├── index.html       # Single-Page Application shell containing all 7 page views
├── styles.css       # Complete modern CSS design system, responsive styles & print layout
├── app.js           # Client-side routing, search/filter algorithms, checkout engine & localStorage
├── data.js          # Catalog of global travel destinations, itineraries, reviews & FAQs
├── server.js        # Zero-dependency local Node.js static server
├── package.json     # Node project configuration
└── README.md        # Documentation and walkthrough guide
```
