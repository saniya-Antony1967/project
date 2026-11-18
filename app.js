/**
 * Wanderlust Travel Booking Platform - Client Application
 */

const app = {
  // Application State
  currentView: 'home',
  selectedPackage: null,
  currency: 'USD',
  currencyRates: {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    INR: 84.5
  },
  currencySymbols: {
    USD: '$',
    EUR: '€',
    GBP: '£',
    INR: '₹'
  },
  selectedAddons: new Map(), // key -> { name, price }
  appliedPromo: null,
  activeCancelId: null,
  bookings: [],

  // Booking draft state for checkout
  bookingDraft: {
    travelDate: '',
    adults: 2,
    roomTier: 'standard',
    roomUpgradeCostPerNight: 0
  },

  // Initialize Application
  init() {
    this.loadBookings();
    this.setupDatePickers();
    this.renderHomeFeatured();
    this.renderExplorePackages(travelPackages);
    this.renderFaqs();
    this.updateBookingsBadge();

    // Default select first package for safety
    if (travelPackages.length > 0) {
      this.selectedPackage = travelPackages[0];
    }

    // Hash navigation listener
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && document.getElementById(`${hash}-view`)) {
        this.navigateTo(hash, false);
      }
    });

    // Check if initial hash is set
    if (window.location.hash) {
      const initialHash = window.location.hash.replace('#', '');
      if (document.getElementById(`${initialHash}-view`)) {
        this.navigateTo(initialHash, false);
      }
    }
  },

  // Setup sensible default dates (today + 14 days)
  setupDatePickers() {
    const today = new Date();
    const defaultDeparture = new Date(today);
    defaultDeparture.setDate(today.getDate() + 14);

    const dateStr = defaultDeparture.toISOString().split('T')[0];
    const heroDate = document.getElementById('hero-date-input');
    const widgetDate = document.getElementById('widget-date-picker');

    if (heroDate) heroDate.value = dateStr;
    if (widgetDate) {
      widgetDate.value = dateStr;
      widgetDate.min = today.toISOString().split('T')[0];
    }
    this.bookingDraft.travelDate = dateStr;
  },

  // Load Bookings from localStorage
  loadBookings() {
    try {
      const stored = localStorage.getItem('wanderlust_bookings');
      if (stored) {
        this.bookings = JSON.parse(stored);
      } else {
        this.bookings = [...defaultDemoBookings];
        this.saveBookings();
      }
    } catch (e) {
      console.warn('Could not load localStorage:', e);
      this.bookings = [...defaultDemoBookings];
    }
  },

  // Save Bookings to localStorage
  saveBookings() {
    try {
      localStorage.setItem('wanderlust_bookings', JSON.stringify(this.bookings));
      this.updateBookingsBadge();
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  },

  updateBookingsBadge() {
    const badge = document.getElementById('booking-badge-count');
    if (!badge) return;
    const activeCount = this.bookings.filter(b => b.status !== 'Cancelled').length;
    if (activeCount > 0) {
      badge.textContent = activeCount;
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }
  },

  // Navigation Controller
  navigateTo(viewId, updateHash = true) {
    const views = document.querySelectorAll('.view-section');
    views.forEach(v => v.style.display = 'none');

    const target = document.getElementById(`${viewId}-view`);
    if (target) {
      target.style.display = 'block';
      this.currentView = viewId;

      if (updateHash) {
        window.location.hash = viewId;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Update Nav active styling
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-page') === viewId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      // Special page actions
      if (viewId === 'my-bookings') {
        this.renderBookings('all');
      } else if (viewId === 'explore') {
        this.applyFilters();
      }
    }

    // Close mobile menu if open
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('mobile-open');
  },

  toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.toggle('mobile-open');
  },

  // Currency Formatter
  formatPrice(usdAmount) {
    const rate = this.currencyRates[this.currency] || 1;
    const symbol = this.currencySymbols[this.currency] || '$';
    const converted = Math.round(usdAmount * rate);
    return `${symbol}${converted.toLocaleString()}`;
  },

  handleCurrencyChange(newCurrency) {
    this.currency = newCurrency;
    this.renderHomeFeatured();
    this.applyFilters();
    if (this.selectedPackage && this.currentView === 'details') {
      this.recalculateWidgetTotal();
    }
    if (this.currentView === 'booking') {
      this.updateCheckoutSummary();
    }
    this.showToast(`Currency updated to ${newCurrency}`, 'info');
  },

  // Package Card Template Generator
  renderPackageCardHTML(pkg) {
    let badgeClass = 'badge-popular';
    if (pkg.badge === 'Bestseller') badgeClass = 'badge-bestseller';
    else if (pkg.badge === 'Top Rated') badgeClass = 'badge-toprated';
    else if (pkg.badge === 'Trending') badgeClass = 'badge-trending';
    else if (pkg.badge === 'Romantic') badgeClass = 'badge-romantic';
    else if (pkg.badge === 'Bucket List') badgeClass = 'badge-bucketlist';

    return `
      <div class="package-card" data-id="${pkg.id}">
        <div class="card-image-wrap">
          <img src="${pkg.heroImage}" alt="${pkg.title}" loading="lazy">
          <div class="card-badge-top">
            <span class="badge ${badgeClass}">${pkg.badge}</span>
          </div>
          <div class="card-duration-badge">
            <span>⏱️</span> ${pkg.durationDays} Days / ${pkg.durationNights} Nights
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta">
            <span class="card-location">📍 ${pkg.location}</span>
            <span class="card-rating">⭐ ${pkg.rating} (${pkg.reviewsCount})</span>
          </div>

          <h3 class="card-title">${pkg.title}</h3>
          <p class="card-description">${pkg.overview}</p>

          <div class="card-footer">
            <div class="card-price-block">
              <span class="price-from">From</span>
              <div>
                <span class="price-amount">${this.formatPrice(pkg.price)}</span>
                <span class="price-original">${this.formatPrice(pkg.originalPrice)}</span>
              </div>
            </div>

            <button class="btn btn-primary btn-sm" onclick="app.viewTripById('${pkg.id}')">
              Explore Package ➔
            </button>
          </div>
        </div>
      </div>
    `;
  },

  // 1. Home Page Functions
  renderHomeFeatured(category = 'all') {
    const grid = document.getElementById('home-featured-grid');
    if (!grid) return;

    let list = travelPackages;
    if (category !== 'all') {
      list = travelPackages.filter(p => p.category === category);
    }

    grid.innerHTML = list.slice(0, 6).map(pkg => this.renderPackageCardHTML(pkg)).join('');
  },

  filterHomeByCategory(category, btnElement) {
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    this.renderHomeFeatured(category);
  },

  setSearchTab(tabName, el) {
    document.querySelectorAll('.search-tab-btn').forEach(b => b.classList.remove('active'));
    if (el) el.classList.add('active');
    this.showToast(`Viewing ${tabName.toUpperCase()} inventory`, 'info');
  },

  handleHeroSearch(event) {
    event.preventDefault();
    const dest = document.getElementById('hero-dest-input').value.trim();
    const cat = document.getElementById('hero-category-select').value;
    const guests = document.getElementById('hero-guests-select').value;
    const date = document.getElementById('hero-date-input').value;

    this.bookingDraft.adults = parseInt(guests) || 2;
    if (date) this.bookingDraft.travelDate = date;

    // Navigate to explore view and apply filters
    this.navigateTo('explore');

    // Prepopulate filters
    const filterSearch = document.getElementById('filter-search-input');
    if (filterSearch && dest) filterSearch.value = dest;

    if (cat && cat !== 'all') {
      document.querySelectorAll('input[name="cat-filter"]').forEach(cb => {
        cb.checked = (cb.value === cat);
      });
    }

    this.applyFilters();
  },

  // 2. Explore / Catalog Page
  renderExplorePackages(packagesList) {
    const grid = document.getElementById('explore-packages-grid');
    const counter = document.getElementById('explore-results-count');
    if (!grid) return;

    if (counter) {
      counter.innerHTML = `Showing <strong>${packagesList.length}</strong> of ${travelPackages.length} packages`;
    }

    if (packagesList.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: white; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔍</div>
          <h3>No matching travel packages found</h3>
          <p style="color:var(--text-muted); margin: 0.5rem 0 1.25rem;">Try adjusting your keyword, category, or budget slider filters.</p>
          <button class="btn btn-outline btn-sm" onclick="app.resetFilters()">Clear All Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = packagesList.map(pkg => this.renderPackageCardHTML(pkg)).join('');
  },

  updatePriceSlider(val) {
    const display = document.getElementById('price-slider-display');
    if (display) display.textContent = this.formatPrice(val);
    this.applyFilters();
  },

  applyFilters() {
    const keyword = (document.getElementById('filter-search-input')?.value || '').toLowerCase().trim();
    const maxPrice = parseFloat(document.getElementById('price-slider')?.value || 2500);
    const sort = document.getElementById('sort-select')?.value || 'recommended';

    // Get checked categories
    const selectedCats = [];
    document.querySelectorAll('input[name="cat-filter"]:checked').forEach(cb => {
      selectedCats.push(cb.value);
    });

    // Get checked durations
    const selectedDurations = [];
    document.querySelectorAll('input[name="duration-filter"]:checked').forEach(cb => {
      selectedDurations.push(cb.value);
    });

    let results = travelPackages.filter(pkg => {
      // Keyword match (title, location, country, subtitle)
      if (keyword) {
        const matchesKeyword = pkg.title.toLowerCase().includes(keyword) ||
                               pkg.location.toLowerCase().includes(keyword) ||
                               pkg.country.toLowerCase().includes(keyword) ||
                               pkg.subtitle.toLowerCase().includes(keyword);
        if (!matchesKeyword) return false;
      }

      // Price filter
      if (pkg.price > maxPrice) return false;

      // Category filter
      if (selectedCats.length > 0 && !selectedCats.includes(pkg.category)) {
        return false;
      }

      // Duration filter
      if (selectedDurations.length > 0) {
        let matchDuration = false;
        if (selectedDurations.includes('short') && pkg.durationDays <= 5) matchDuration = true;
        if (selectedDurations.includes('medium') && pkg.durationDays >= 6 && pkg.durationDays <= 8) matchDuration = true;
        if (selectedDurations.includes('long') && pkg.durationDays >= 9) matchDuration = true;
        if (!matchDuration) return false;
      }

      return true;
    });

    // Sort results
    if (sort === 'price-asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      results.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating-desc') {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'duration-desc') {
      results.sort((a, b) => b.durationDays - a.durationDays);
    }

    this.renderExplorePackages(results);
  },

  resetFilters() {
    const searchInput = document.getElementById('filter-search-input');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('input[name="cat-filter"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="duration-filter"]').forEach(cb => cb.checked = false);

    const slider = document.getElementById('price-slider');
    if (slider) {
      slider.value = 2500;
      this.updatePriceSlider(2500);
    }

    const sort = document.getElementById('sort-select');
    if (sort) sort.value = 'recommended';

    this.applyFilters();
    this.showToast('All filters have been reset', 'info');
  },

  // 3. Trip Details Page
  viewTripById(id) {
    const pkg = travelPackages.find(p => p.id === id);
    if (!pkg) return;

    this.selectedPackage = pkg;

    // Set Text Content
    document.getElementById('breadcrumb-trip-title').textContent = pkg.title;
    document.getElementById('details-title').textContent = pkg.title;
    document.getElementById('details-subtitle').textContent = pkg.subtitle;
    document.getElementById('details-location').textContent = pkg.location;
    document.getElementById('details-duration').textContent = `${pkg.durationDays} Days / ${pkg.durationNights} Nights`;
    document.getElementById('details-rating').textContent = pkg.rating;
    document.getElementById('details-reviews').textContent = pkg.reviewsCount;
    document.getElementById('details-overview').textContent = pkg.overview;

    const badge = document.getElementById('details-badge');
    badge.textContent = pkg.badge;

    // Gallery
    const galleryEl = document.getElementById('details-gallery');
    galleryEl.innerHTML = `
      <div class="gallery-item gallery-main">
        <img src="${pkg.gallery[0] || pkg.heroImage}" alt="${pkg.title} main preview">
      </div>
      <div class="gallery-item">
        <img src="${pkg.gallery[1] || pkg.heroImage}" alt="${pkg.title} thumbnail 1">
      </div>
      <div class="gallery-item">
        <img src="${pkg.gallery[2] || pkg.heroImage}" alt="${pkg.title} thumbnail 2">
      </div>
    `;

    // Highlights
    const hlList = document.getElementById('details-highlights');
    hlList.innerHTML = pkg.highlights.map(hl => `
      <li class="highlight-item">
        <span class="bullet-check">✓</span>
        <span>${hl}</span>
      </li>
    `).join('');

    // Inclusions & Exclusions
    const incList = document.getElementById('details-inclusions');
    incList.innerHTML = pkg.inclusions.map(inc => `<li>✓ ${inc}</li>`).join('');

    const excList = document.getElementById('details-exclusions');
    excList.innerHTML = pkg.exclusions.map(exc => `<li>✗ ${exc}</li>`).join('');

    // Itinerary Accordion
    const itinList = document.getElementById('details-itinerary');
    itinList.innerHTML = pkg.itinerary.map((item, idx) => `
      <div class="itinerary-item ${idx === 0 ? 'open' : ''}" onclick="this.classList.toggle('open')">
        <div class="itinerary-header">
          <div style="display:flex; align-items:center;">
            <span class="itinerary-day-badge">Day ${item.day}</span>
            <span class="itinerary-item-title">${item.title}</span>
          </div>
          <span class="itinerary-toggle-icon">▼</span>
        </div>
        <div class="itinerary-body">
          <p>${item.description}</p>
        </div>
      </div>
    `).join('');

    // Update Widget
    document.getElementById('widget-display-price').textContent = this.formatPrice(pkg.price);
    const adultsSelect = document.getElementById('widget-adults-select');
    if (adultsSelect) adultsSelect.value = this.bookingDraft.adults || '2';

    this.recalculateWidgetTotal();
    this.navigateTo('details');
  },

  recalculateWidgetTotal() {
    if (!this.selectedPackage) return;

    const adults = parseInt(document.getElementById('widget-adults-select')?.value || 2);
    const roomTier = document.getElementById('widget-room-select')?.value || 'standard';
    const date = document.getElementById('widget-date-picker')?.value;

    this.bookingDraft.adults = adults;
    this.bookingDraft.roomTier = roomTier;
    if (date) this.bookingDraft.travelDate = date;

    // Room upgrade calculation
    let upgradePerNight = 0;
    if (roomTier === 'ocean') upgradePerNight = 120;
    else if (roomTier === 'presidential') upgradePerNight = 240;

    const nights = this.selectedPackage.durationNights || 5;
    const totalUpgrade = upgradePerNight * nights;
    this.bookingDraft.roomUpgradeCost = totalUpgrade;

    const baseSubtotal = this.selectedPackage.price * adults;
    const taxes = Math.round((baseSubtotal + totalUpgrade) * 0.05);
    const total = baseSubtotal + totalUpgrade + taxes;

    // Update UI elements
    document.getElementById('calc-guests-count').textContent = adults;
    document.getElementById('calc-base-subtotal').textContent = this.formatPrice(baseSubtotal);

    const roomRow = document.getElementById('calc-room-row');
    if (totalUpgrade > 0) {
      roomRow.style.display = 'flex';
      document.getElementById('calc-room-upgrade').textContent = `+${this.formatPrice(totalUpgrade)}`;
    } else {
      roomRow.style.display = 'none';
    }

    document.getElementById('calc-taxes').textContent = this.formatPrice(taxes);
    document.getElementById('calc-total').textContent = this.formatPrice(total);

    this.bookingDraft.totalEstimated = total;
    this.bookingDraft.baseSubtotal = baseSubtotal;
    this.bookingDraft.taxes = taxes;
  },

  // 4. Booking & Checkout Page
  startBookingFlow() {
    if (!this.selectedPackage) {
      this.showToast('Please choose a package first', 'error');
      return;
    }

    this.recalculateWidgetTotal();

    // Reset add-ons & promo
    this.selectedAddons.clear();
    this.appliedPromo = null;
    const promoInput = document.getElementById('promo-input');
    if (promoInput) promoInput.value = '';
    const promoFeedback = document.getElementById('promo-feedback');
    if (promoFeedback) promoFeedback.innerHTML = '';

    document.querySelectorAll('.addon-card').forEach(card => {
      card.classList.remove('selected');
      const cb = card.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = false;
    });

    // Populate summary card
    document.getElementById('summary-img').src = this.selectedPackage.heroImage;
    document.getElementById('summary-title').textContent = this.selectedPackage.title;
    document.getElementById('summary-location').textContent = this.selectedPackage.location;
    document.getElementById('summary-dates').textContent = `${this.bookingDraft.travelDate} (${this.selectedPackage.durationDays} Days)`;

    this.updateCheckoutSummary();
    this.navigateTo('booking');
  },

  toggleAddon(addonKey, price, cardElement) {
    const cb = cardElement.querySelector('input[type="checkbox"]');
    const isNowChecked = !cb.checked;
    cb.checked = isNowChecked;

    if (isNowChecked) {
      cardElement.classList.add('selected');
      let effectivePrice = price;
      // Insurance is per person
      if (addonKey === 'insurance') {
        effectivePrice = price * this.bookingDraft.adults;
      }
      this.selectedAddons.set(addonKey, {
        name: addonKey === 'insurance' ? 'Travel Insurance' : (addonKey === 'transfer' ? 'VIP Airport Transfer' : 'Photographer Session'),
        price: effectivePrice
      });
      this.showToast(`Added ${addonKey === 'insurance' ? 'Travel Insurance' : 'Add-on'}`, 'info');
    } else {
      cardElement.classList.remove('selected');
      this.selectedAddons.delete(addonKey);
    }

    this.updateCheckoutSummary();
  },

  setPaymentTab(method, el) {
    document.querySelectorAll('.payment-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (el) el.classList.add('active');

    const cardFields = document.getElementById('payment-card-fields');
    const altFields = document.getElementById('payment-alt-fields');

    if (method === 'card') {
      cardFields.style.display = 'block';
      altFields.style.display = 'none';
    } else {
      cardFields.style.display = 'none';
      altFields.style.display = 'block';
    }
  },

  applyPromoCode() {
    const input = document.getElementById('promo-input');
    const feedback = document.getElementById('promo-feedback');
    const code = (input?.value || '').trim().toUpperCase();

    if (!code) {
      this.showToast('Please enter a coupon code', 'error');
      return;
    }

    if (code === 'WANDER20') {
      this.appliedPromo = { code: 'WANDER20', percent: 20, desc: '20% Summer Early Bird Discount' };
      feedback.innerHTML = `<div class="promo-applied-badge">✓ 20% DISCOUNT APPLIED!</div>`;
      this.showToast('Promo code WANDER20 applied! Saved 20%', 'success');
    } else if (code === 'TRAVEL100' || code === 'EXPLORE100') {
      this.appliedPromo = { code: code, fixedUSD: 100, desc: '$100 Instant Traveler Voucher' };
      feedback.innerHTML = `<div class="promo-applied-badge">✓ $100 OFF APPLIED!</div>`;
      this.showToast('Voucher code applied! Saved $100', 'success');
    } else {
      this.appliedPromo = null;
      feedback.innerHTML = `<div style="color:var(--danger); font-size:0.8rem; margin-top:0.3rem;">Invalid promo code. Try <strong>WANDER20</strong></div>`;
      this.showToast('Invalid promo code. Try WANDER20', 'error');
    }

    this.updateCheckoutSummary();
  },

  updateCheckoutSummary() {
    const adults = this.bookingDraft.adults;
    const baseSubtotal = this.selectedPackage.price * adults;
    const roomUpgrade = this.bookingDraft.roomUpgradeCost || 0;

    let addonsTotal = 0;
    this.selectedAddons.forEach(item => {
      addonsTotal += item.price;
    });

    const subtotalBeforeDiscount = baseSubtotal + roomUpgrade + addonsTotal;

    let discountAmount = 0;
    if (this.appliedPromo) {
      if (this.appliedPromo.percent) {
        discountAmount = Math.round(subtotalBeforeDiscount * (this.appliedPromo.percent / 100));
      } else if (this.appliedPromo.fixedUSD) {
        discountAmount = this.appliedPromo.fixedUSD;
      }
    }

    const discountedSubtotal = Math.max(0, subtotalBeforeDiscount - discountAmount);
    const taxes = Math.round(discountedSubtotal * 0.05);
    const finalTotal = discountedSubtotal + taxes;

    // Update summary UI
    document.getElementById('summary-guests-count').textContent = adults;
    document.getElementById('summary-base-price').textContent = this.formatPrice(baseSubtotal);

    const roomRow = document.getElementById('summary-room-row');
    if (roomUpgrade > 0) {
      roomRow.style.display = 'flex';
      document.getElementById('summary-room-upgrade').textContent = `+${this.formatPrice(roomUpgrade)}`;
    } else {
      roomRow.style.display = 'none';
    }

    const addonsRow = document.getElementById('summary-addons-row');
    if (addonsTotal > 0) {
      addonsRow.style.display = 'flex';
      document.getElementById('summary-addons-total').textContent = `+${this.formatPrice(addonsTotal)}`;
    } else {
      addonsRow.style.display = 'none';
    }

    const discountRow = document.getElementById('summary-discount-row');
    if (discountAmount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('summary-discount-val').textContent = `-${this.formatPrice(discountAmount)}`;
    } else {
      discountRow.style.display = 'none';
    }

    document.getElementById('summary-taxes').textContent = this.formatPrice(taxes);
    document.getElementById('summary-final-total').textContent = this.formatPrice(finalTotal);

    this.bookingDraft.finalAmount = finalTotal;
  },

  completeBooking() {
    const firstName = document.getElementById('traveler-first-name')?.value.trim();
    const lastName = document.getElementById('traveler-last-name')?.value.trim();
    const email = document.getElementById('traveler-email')?.value.trim();
    const phone = document.getElementById('traveler-phone')?.value.trim();

    if (!firstName || !lastName || !email || !phone) {
      this.showToast('Please fill in all required traveler contact fields', 'error');
      return;
    }

    // Generate unique confirmation reference
    const refCode = `WL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const roomLabels = {
      standard: 'Standard Premium Villa',
      ocean: 'Oceanfront Deluxe Villa',
      presidential: 'Private Pool Suite'
    };

    const newBooking = {
      id: refCode,
      packageId: this.selectedPackage.id,
      title: this.selectedPackage.title,
      location: this.selectedPackage.location,
      image: this.selectedPackage.heroImage,
      travelDate: this.bookingDraft.travelDate,
      durationDays: this.selectedPackage.durationDays,
      guestsCount: this.bookingDraft.adults,
      guestName: `${firstName} ${lastName}`,
      guestEmail: email,
      guestPhone: phone,
      roomType: roomLabels[this.bookingDraft.roomTier] || 'Standard Room',
      addOns: Array.from(this.selectedAddons.values()).map(a => a.name),
      totalAmount: this.bookingDraft.finalAmount,
      currency: this.currency,
      status: 'Confirmed',
      bookingDate: new Date().toISOString().split('T')[0],
      paymentMethod: 'Credit Card (ending in 4242)'
    };

    this.bookings.unshift(newBooking);
    this.saveBookings();

    // Populate Printable Voucher
    document.getElementById('voucher-ref').textContent = refCode;
    document.getElementById('voucher-guest-name').textContent = `${firstName} ${lastName}`;
    document.getElementById('voucher-destination').textContent = this.selectedPackage.location;
    document.getElementById('voucher-dates').textContent = `${this.bookingDraft.travelDate} (${this.selectedPackage.durationDays} Days)`;
    document.getElementById('voucher-guests').textContent = `${this.bookingDraft.adults} Travelers`;
    document.getElementById('voucher-room').textContent = roomLabels[this.bookingDraft.roomTier];
    document.getElementById('voucher-total-paid').textContent = this.formatPrice(this.bookingDraft.finalAmount);

    this.showToast(`Booking ${refCode} successfully confirmed! 🎉`, 'success');
    this.navigateTo('confirmation');
  },

  // 5. My Bookings Management
  filterBookingsTab(filter, btnEl) {
    document.querySelectorAll('.dashboard-tab-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    this.renderBookings(filter);
  },

  renderBookings(filter = 'all') {
    const container = document.getElementById('bookings-list-container');
    if (!container) return;

    let filtered = this.bookings;
    if (filter === 'upcoming') {
      filtered = this.bookings.filter(b => b.status === 'Confirmed');
    } else if (filter === 'cancelled') {
      filtered = this.bookings.filter(b => b.status === 'Cancelled');
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-bookings-box">
          <div class="empty-icon">🏖️</div>
          <h3>No ${filter === 'all' ? '' : filter} bookings found</h3>
          <p style="color:var(--text-muted); margin: 0.5rem 0 1.5rem;">
            Ready to explore? Discover world-class packages and book your next dream vacation!
          </p>
          <button class="btn btn-primary btn-sm" onclick="app.navigateTo('explore')">Browse Packages</button>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(b => {
      const isCancelled = b.status === 'Cancelled';
      const statusColor = isCancelled ? 'var(--danger)' : 'var(--success)';
      const statusBg = isCancelled ? 'var(--danger-light)' : 'var(--success-light)';

      return `
        <div class="booking-item-card">
          <img src="${b.image}" alt="${b.title}" class="booking-card-img">

          <div class="booking-card-info">
            <div class="booking-card-top">
              <span class="booking-card-ref">${b.id}</span>
              <span class="badge" style="background:${statusBg}; color:${statusColor};">
                ${b.status}
              </span>
            </div>

            <h3 class="booking-card-title">${b.title}</h3>

            <div class="booking-card-details">
              <span>📅 ${b.travelDate} (${b.durationDays} Days)</span>
              <span>👥 ${b.guestsCount} Travelers</span>
              <span>💳 ${this.formatPrice(b.totalAmount)}</span>
            </div>
          </div>

          <div class="booking-card-actions">
            <button class="btn btn-outline btn-sm" onclick="app.viewStoredVoucher('${b.id}')">
              📄 View Voucher
            </button>
            ${!isCancelled ? `
              <button class="btn btn-sm" style="color:var(--danger); border:1px solid #fecaca; background:#fff;" onclick="app.openCancelModal('${b.id}')">
                Cancel Trip
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  },

  viewStoredVoucher(bookingId) {
    const booking = this.bookings.find(b => b.id === bookingId);
    if (!booking) return;

    document.getElementById('voucher-ref').textContent = booking.id;
    document.getElementById('voucher-guest-name').textContent = booking.guestName;
    document.getElementById('voucher-destination').textContent = booking.location;
    document.getElementById('voucher-dates').textContent = `${booking.travelDate} (${booking.durationDays} Days)`;
    document.getElementById('voucher-guests').textContent = `${booking.guestsCount} Travelers`;
    document.getElementById('voucher-room').textContent = booking.roomType || 'Standard Villa';
    document.getElementById('voucher-total-paid').textContent = this.formatPrice(booking.totalAmount);

    this.navigateTo('confirmation');
  },

  openCancelModal(bookingId) {
    this.activeCancelId = bookingId;
    document.getElementById('cancel-modal-ref').textContent = bookingId;
    document.getElementById('cancel-modal').classList.add('active');
  },

  closeCancelModal() {
    this.activeCancelId = null;
    document.getElementById('cancel-modal').classList.remove('active');
  },

  confirmCancellation() {
    if (!this.activeCancelId) return;

    const booking = this.bookings.find(b => b.id === this.activeCancelId);
    if (booking) {
      booking.status = 'Cancelled';
      this.saveBookings();
      this.showToast(`Booking ${this.activeCancelId} has been cancelled. Full refund initiated.`, 'info');
      this.renderBookings('all');
    }

    this.closeCancelModal();
  },

  // 6. Help & Support Page
  renderFaqs() {
    const accordion = document.getElementById('faq-accordion-list');
    if (!accordion) return;

    accordion.innerHTML = faqsData.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'open' : ''}">
        <div class="faq-question" onclick="this.parentElement.classList.toggle('open')">
          <span>${faq.q}</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');
  },

  handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name')?.value;
    this.showToast(`Thank you, ${name}! Your inquiry has been sent to our concierge team.`, 'success');
    document.getElementById('contact-form')?.reset();
  },

  handleNewsletter(event) {
    event.preventDefault();
    this.showToast('Thank you for subscribing! Your 15% welcome code is on its way.', 'success');
    event.target.reset();
  },

  // Toast Notification System
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '⚠️';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
};

// Auto-run on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
