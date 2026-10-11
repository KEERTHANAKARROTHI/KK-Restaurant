import React, { useEffect } from 'react';

export default function OrderSuccessModal({ orderDetails, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!orderDetails) return null;

  const orderId = `KK-${Math.floor(1000 + Math.random() * 9000)}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="order-success-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-heading"
      >
        <div className="success-dialog-icon">✓</div>
        
        <h2 id="success-heading" className="success-dialog-title">Order Placed Successfully!</h2>
        
        <p className="success-dialog-sub">
          Thank you! The kitchen at KK Restaurant is now preparing your food hot and fresh.
        </p>

        <div className="order-receipt-card">
          <div className="receipt-header-row">
            <span>Order Token: <strong>#{orderId}</strong></span>
            <span>Est. Time: <strong>15–20 Mins</strong></span>
          </div>

          <div className="receipt-items-list">
            {orderDetails.items?.map((item) => (
              <div key={item.id} className="receipt-dish-line">
                <span className="dish-qty-col">{item.quantity}×</span>
                <span className="dish-name-col">{item.name}</span>
                <span className="dish-price-col">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          {orderDetails.kitchenNotes && (
            <div className="receipt-kitchen-note">
              <strong>Cooking Note:</strong> <em>"{orderDetails.kitchenNotes}"</em>
            </div>
          )}

          <div className="receipt-totals-section">
            <div className="receipt-row-sm">
              <span>Item Total</span>
              <span>₹{orderDetails.subtotal}</span>
            </div>
            <div className="receipt-row-sm">
              <span>GST & Staff Tip</span>
              <span>₹{orderDetails.tax + orderDetails.tipAmount}</span>
            </div>
            <div className="receipt-divider-line" />
            <div className="receipt-row-final">
              <span>Total Paid</span>
              <span className="final-total-figure">₹{orderDetails.grandTotal}</span>
            </div>
          </div>
        </div>

        <button 
          type="button" 
          className="btn-success-close" 
          onClick={onClose}
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
