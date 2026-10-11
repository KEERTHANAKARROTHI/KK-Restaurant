import React from 'react';

export default function Hero({ onExploreMenu, onOpenReservation, searchQuery, onSearchChange }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-container">
        {/* Left Column: Story & Actions */}
        <div className="hero-editorial">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            <span className="eyebrow-text">KK Restaurant • South Indian Kitchen</span>
          </div>

          <h1 className="hero-heading">
            Authentic South Indian food, <br />
            <em>made fresh everyday.</em>
          </h1>

          <p className="hero-lead">
            Enjoy crispy ghee roast dosas, soft steaming idlis, authentic dum biryanis, and filter coffee prepared with traditional homestyle recipes.
          </p>

          {/* Quick Search */}
          <div className="hero-search-box">
            <div className="hero-search-input-wrap">
              <span className="search-inline-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search dishes (e.g. Dosa, Idli, Biryani, Chicken 65)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="hero-search-input"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button 
                  type="button"
                  className="hero-search-clear" 
                  onClick={() => onSearchChange('')}
                  title="Clear search"
                  aria-label="Clear search input"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="hero-cta-group">
            <button 
              type="button" 
              className="btn-hero-primary" 
              onClick={onExploreMenu}
            >
              <span>Explore Menu</span>
              <span className="cta-icon">↓</span>
            </button>
            <button 
              type="button" 
              className="btn-hero-secondary" 
              onClick={onOpenReservation}
            >
              <span>Book Table</span>
              <span className="cta-icon">→</span>
            </button>
          </div>

          {/* Realistic grounded notes */}
          <div className="hero-details-row">
            <div className="hero-detail-item">
              <span className="detail-label">Timings</span>
              <span className="detail-val">All Days: 7:00 AM – 10:30 PM</span>
            </div>
            <div className="hero-detail-divider" />
            <div className="hero-detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-val">100ft Road, Indiranagar, Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Right Column: South Indian Dosa & Chutneys Photography */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85" 
              alt="Crispy golden South Indian Ghee Masala Dosa served with coconut chutneys and sambar at KK Restaurant" 
              className="hero-img"
              loading="eager"
            />
            <div className="hero-caption-card">
              <span className="caption-tag">Customer Favorite</span>
              <p className="caption-text">Freshly roasted Ghee Podi Masala Dosa with stone-ground coconut chutney & drumstick sambar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
