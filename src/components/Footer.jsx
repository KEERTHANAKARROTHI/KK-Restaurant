import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Footer({ onOpenReservation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top grid */}
        <div className="footer-top-grid">
          {/* Brand & summary */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <span className="footer-brand-crest">KK</span>
              <div>
                <h3 className="footer-brand-name">KK Restaurant</h3>
                <span className="footer-brand-sub">South Indian Kitchen</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Authentic South Indian tiffins, traditional meals, biryanis, and filter coffee. Made with fresh ingredients and homestyle recipes every day.
            </p>

            <div className="footer-social-links">
              <a href="#instagram" aria-label="Instagram" className="social-link">Instagram</a>
              <span className="social-sep">•</span>
              <a href="#facebook" aria-label="Facebook" className="social-link">Facebook</a>
              <span className="social-sep">•</span>
              <a href="#zomato" aria-label="Zomato" className="social-link">Zomato / Swiggy</a>
            </div>
          </div>

          {/* Hours column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Timings</h4>
            <ul className="footer-hours-list">
              <li>
                <strong>Tiffins & Breakfast</strong>
                <span>7:00 AM – 11:30 AM</span>
              </li>
              <li>
                <strong>Lunch & Biryani</strong>
                <span>12:00 PM – 3:30 PM</span>
              </li>
              <li>
                <strong>Evening Snacks & Dinner</strong>
                <span>4:30 PM – 10:30 PM</span>
              </li>
              <li className="footer-closed-note">
                Open all 7 days of the week
              </li>
            </ul>
          </div>

          {/* Location & Contact column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Find Us</h4>
            <address className="footer-address">
              <p>{RESTAURANT_INFO.address}</p>
              <p>Phone: <a href={`tel:${RESTAURANT_INFO.phone}`}>{RESTAURANT_INFO.phone}</a></p>
              <p>Email: <a href={`mailto:${RESTAURANT_INFO.email}`}>{RESTAURANT_INFO.email}</a></p>
            </address>

            <button 
              type="button" 
              className="footer-res-btn" 
              onClick={onOpenReservation}
            >
              Book a Table Online →
            </button>
          </div>

          {/* Quick Navigation column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-quick-links">
              <li>
                <button type="button" onClick={() => scrollTo('menu-catalog')}>
                  Explore Menu
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('our-story')}>
                  About KK Restaurant
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('specials')}>
                  Popular Specials
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('reservations')}>
                  Table Booking
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} KK Restaurant. Developed by Keerthana.
          </p>
          <div className="footer-policy-links">
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
            <span>•</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
