import React, { useState, useEffect } from 'react';

export default function ReservationModal({ isOpen, onClose, onConfirm }) {
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
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
    if (onConfirm) onConfirm(formData);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="reservation-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-res-heading"
      >
        <button 
          type="button" 
          className="modal-close-button" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="res-modal-header">
              <span className="res-modal-kicker">Table Booking</span>
              <h2 id="modal-res-heading" className="res-modal-title">Book a Table at KK</h2>
              <p className="res-modal-lead">Enjoy authentic South Indian meals with your family and friends.</p>
            </div>

            {error && (
              <div className="res-error-notice" role="alert">
                <span>⚠️ {error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="res-modal-form">
              <div className="form-grid-2">
                <div className="form-field">
                  <label htmlFor="modal-name">Your Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Keerthana"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="modal-phone">Mobile Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-grid-3">
                <div className="form-field">
                  <label htmlFor="modal-date">Date</label>
                  <input
                    id="modal-date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="modal-time">Time</label>
                  <select
                    id="modal-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="form-select"
                  >
                    <option value="08:30">8:30 AM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:30">8:30 PM</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="modal-guests">Guests</label>
                  <select
                    id="modal-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="form-select"
                  >
                    <option value="1 Person">1 Person</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3-4 Guests</option>
                    <option value="5-6 Guests">5-6 Guests</option>
                    <option value="7+ Guests">7+ Guests</option>
                  </select>
                </div>
              </div>

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
                <label htmlFor="modal-notes">Special Requests (Optional)</label>
                <textarea
                  id="modal-notes"
                  rows="2"
                  placeholder="e.g. Birthday, quiet table, kids chair..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-submit-modal-reservation">
                <span>Confirm Booking</span>
                <span className="btn-arr">→</span>
              </button>
            </form>
          </>
        ) : (
          <div className="reservation-modal-success">
            <div className="success-badge-circle">✓</div>
            <h3 className="modal-success-title">Table Confirmed!</h3>
            <p className="modal-success-body">
              Thank you <strong>{formData.name}</strong>. Your table at KK Restaurant has been booked for {formData.date} at {formData.time}.
            </p>

            <div className="modal-receipt-box">
              <div className="receipt-item">
                <span className="item-label">Date & Time:</span>
                <span className="item-val">{formData.date} at {formData.time}</span>
              </div>
              <div className="receipt-item">
                <span className="item-label">Party Size:</span>
                <span className="item-val">{formData.guests}</span>
              </div>
              <div className="receipt-item">
                <span className="item-label">Seating:</span>
                <span className="item-val">{formData.seating}</span>
              </div>
              <div className="receipt-item">
                <span className="item-label">Phone:</span>
                <span className="item-val">{formData.phone}</span>
              </div>
            </div>

            <button 
              type="button" 
              className="btn-modal-return" 
              onClick={handleReset}
            >
              Back to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
