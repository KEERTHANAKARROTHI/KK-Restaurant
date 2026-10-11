import React, { useState, useEffect } from 'react';

export default function Navbar({ cartCount, onOpenCart, onOpenReservation, onScrollToMenu }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-container ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <a 
          href="#top" 
          className="brand" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="brand-crest">
            <span className="crest-letter">KK</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">KK Restaurant</span>
            <span className="brand-sub">South Indian Kitchen</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('menu-catalog')}
          >
            Menu
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('our-story')}
          >
            About Us
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('specials')}
          >
            Specials
          </button>
          <button 
            type="button" 
            className="nav-link" 
            onClick={() => handleNavClick('reservations')}
          >
            Book Table
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            type="button"
            className="btn-reserve-nav" 
            onClick={onOpenReservation}
            title="Book a table"
          >
            Book Table
          </button>

          <button 
            type="button"
            className={`btn-cart-nav ${cartCount > 0 ? 'has-items' : ''}`}
            onClick={onOpenCart}
            aria-label={`View order cart with ${cartCount} items`}
          >
            <span className="cart-nav-icon">🛍️</span>
            <span className="cart-nav-text">Cart</span>
            {cartCount > 0 && (
              <span className="cart-badge-count">{cartCount}</span>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close mobile navigation' : 'Open mobile navigation'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <div className="brand-text">
                <span className="brand-name">KK Restaurant</span>
                <span className="brand-sub">South Indian Kitchen</span>
              </div>
              <button 
                type="button" 
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-nav-links">
              <button 
                type="button" 
                className="mobile-link" 
                onClick={() => handleNavClick('menu-catalog')}
              >
                <span>Menu</span>
                <span className="mobile-arrow">→</span>
              </button>
              <button 
                type="button" 
                className="mobile-link" 
                onClick={() => handleNavClick('our-story')}
              >
                <span>About Us</span>
                <span className="mobile-arrow">→</span>
              </button>
              <button 
                type="button" 
                className="mobile-link" 
                onClick={() => handleNavClick('specials')}
              >
                <span>KK Specials</span>
                <span className="mobile-arrow">→</span>
              </button>
              <button 
                type="button" 
                className="mobile-link" 
                onClick={() => handleNavClick('reservations')}
              >
                <span>Book Table</span>
                <span className="mobile-arrow">→</span>
              </button>
            </nav>

            <div className="mobile-nav-actions">
              <button 
                type="button" 
                className="mobile-btn-reserve" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
              >
                Book a Table
              </button>
              <button 
                type="button" 
                className="mobile-btn-cart" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
              >
                <span>View Cart</span>
                {cartCount > 0 && <span className="cart-badge-count">{cartCount}</span>}
              </button>
            </div>

            <div className="mobile-nav-footer">
              <p>📍 Indiranagar, Bengaluru</p>
              <p>⏰ Open Daily: 7:00 AM – 10:30 PM</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
