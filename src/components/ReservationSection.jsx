import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function ReservationSection({ onReservationConfirmed }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:30',
    guests: '2 Guests',
    seating: 'AC Family Dining',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and phone number to book a table.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
    if (onReservationConfirmed) {
      onReservationConfirmed(formData);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '19:30',
      guests: '2 Guests',
      seating: 'AC Family Dining',
      notes: '',
    });
  };

  return (
    <section className="reservations-section" id="reservations">
      <div className="reservations-container">
        {/* Info Column */}
        <div className="reservation-intro-col">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Table Booking</span>
          </div>

          <h2 className="reservation-section-title">
            Reserve a table at KK.
          </h2>

          <p className="reservation-section-lead">
            Planning a family lunch, celebration, or weekend dinner? Book your table in advance to avoid waiting during peak hours.
          </p>

          <div className="reservation-info-cards">
            <div className="res-card-block">
              <h4 className="res-block-title">Restaurant Timings</h4>
              <p><strong>Breakfast & Tiffins:</strong> 7:00 AM – 11:30 AM</p>
              <p><strong>South Indian Meals & Biryani:</strong> 12:00 PM – 3:30 PM</p>
              <p><strong>Evening Snacks & Dinner:</strong> 4:30 PM – 10:30 PM</p>
            </div>

            <div className="res-card-block">
              <h4 className="res-block-title">Location & Contact</h4>
              <p>{RESTAURANT_INFO.address}</p>
              <p>Direct Call: <strong>{RESTAURANT_INFO.phone}</strong></p>
            </div>

            <div className="res-card-block">
              <h4 className="res-block-title">Seating Options</h4>
              <p>
                We have comfortable AC family dining sections and quick seating. Tables are reserved for 15 minutes past booking time.
              </p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="reservation-form-col">
          <div className="reservation-form-card">
            {!submitted ? (
              <>
                <div className="res-form-header">
                  <h3 className="res-form-title">Book Your Table</h3>
                  <p className="res-form-sub">Instant confirmation for dine-in tables.</p>
                </div>

                {errorMessage && (
                  <div className="res-error-notice" role="alert">
                    <span>⚠️ {errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="res-native-form">
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="res-name">Your Name *</label>
                      <input
                        id="res-name"
                        type="text"
                        required
                        placeholder="e.g. Keerthana"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="res-phone">Mobile Number *</label>
                      <input
                        id="res-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="res-email">Email Address</label>
                    <input
                      id="res-email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-grid-3">
                    <div className="form-field">
                      <label htmlFor="res-date">Date</label>
                      <input
                        id="res-date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="res-time">Time</label>
                      <select
                        id="res-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="form-select"
                      >
                        <option value="08:30">8:30 AM (Breakfast)</option>
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="13:30">1:30 PM (Lunch)</option>
                        <option value="19:00">7:00 PM (Dinner)</option>
                        <option value="19:30">7:30 PM (Dinner)</option>
                        <option value="20:30">8:30 PM (Dinner)</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="res-guests">Guests</label>
                      <select
                        id="res-guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="form-select"
                      >
                        <option value="1 Person">1 Person</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3-4 Guests">3-4 Guests</option>
                        <option value="5-6 Guests">5-6 Guests (Family)</option>
                        <option value="7+ Guests">7+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Seating preference */}
                  <div className="form-field">
                    <label>Seating Preference</label>
                    <div className="seating-choice-pills">
                      {['AC Family Dining', 'Main Hall', 'Window Side'].map((area) => (
                        <button
                          type="button"
                          key={area}
                          className={`seating-choice-btn ${formData.seating === area ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, seating: area })}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="res-notes">Special Requests (Optional)</label>
                    <textarea
                      id="res-notes"
                      rows="2"
                      placeholder="e.g. Birthday celebration, high chair for kids, quiet corner..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-submit-reservation">
                    <span>Confirm Table Booking</span>
                    <span className="btn-arr">→</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="reservation-success-state">
                <div className="success-icon-badge">✓</div>
                <h3 className="success-title">Table Reserved!</h3>
                <p className="success-intro">
                  We look forward to welcoming you, <strong>{formData.name}</strong>. Your table at KK Restaurant has been confirmed.
                </p>

                <div className="reservation-summary-receipt">
                  <div className="receipt-row">
                    <span className="row-label">Date & Time</span>
                    <span className="row-value">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="row-label">Party Size</span>
                    <span className="row-value">{formData.guests}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="row-label">Seating Area</span>
                    <span className="row-value">{formData.seating}</span>
                  </div>
                  <div className="receipt-row">
                    <span className="row-label">Contact Phone</span>
                    <span className="row-value">{formData.phone}</span>
                  </div>
                  {formData.notes && (
                    <div className="receipt-row">
                      <span className="row-label">Notes</span>
                      <span className="row-value">{formData.notes}</span>
                    </div>
                  )}
                </div>

                <div className="success-actions">
                  <button 
                    type="button" 
                    className="btn-book-another"
                    onClick={handleReset}
                  >
                    Book Another Table
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
