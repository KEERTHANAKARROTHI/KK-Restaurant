import React, { useState, useEffect } from 'react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
}) {
  const [tipAmount, setTipAmount] = useState(20);
  const [kitchenNotes, setKitchenNotes] = useState('');

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

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + gst + tipAmount;

  return (
    <div className="cart-backdrop" onClick={onClose}>
      <aside 
        className="cart-drawer-panel" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Your dining order cart"
      >
        {/* Header */}
        <div className="cart-drawer-header">
          <div>
            <h3 className="cart-drawer-title">Your Food Cart</h3>
            <p className="cart-drawer-subtitle">
              {cartItems.length} {cartItems.length === 1 ? 'dish' : 'dishes'} selected
            </p>
          </div>
          <button 
            type="button" 
            className="cart-drawer-close" 
            onClick={onClose} 
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-message">
              <span className="cart-empty-glyph">🍽️</span>
              <h4 className="cart-empty-title">Your cart is empty</h4>
              <p className="cart-empty-text">
                Browse our fresh tiffins, authentic biryanis, and snacks to add items to your cart.
              </p>
              <button 
                type="button" 
                className="btn-cart-browse" 
                onClick={onClose}
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Item rows */}
              <div className="cart-items-scroll">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item-card">
                    <img src={item.image} alt={item.name} className="cart-item-photo" />
                    
                    <div className="cart-item-details">
                      <div className="cart-item-top">
                        <div className="cart-item-title-row">
                          <span className={`food-type-icon ${item.isVeg ? 'veg' : 'non-veg'}`}>●</span>
                          <h4 className="cart-item-title">{item.name}</h4>
                        </div>
                        <span className="cart-item-line-total">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                      
                      <span className="cart-item-single-price">
                        ₹{item.price} each
                      </span>

                      <div className="cart-item-stepper-row">
                        <div className="qty-stepper">
                          <button
                            type="button"
                            className="qty-step-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            –
                          </button>
                          <span className="qty-count">{item.quantity}</span>
                          <button
                            type="button"
                            className="qty-step-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          className="cart-remove-link"
                          onClick={() => onRemoveItem(item.id)}
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Kitchen notes */}
              <div className="cart-notes-block">
                <label htmlFor="order-kitchen-notes" className="cart-notes-label">
                  Cooking Instructions
                </label>
                <textarea
                  id="order-kitchen-notes"
                  rows="2"
                  placeholder="e.g. Extra coconut chutney, make dosa crispy, less spicy..."
                  value={kitchenNotes}
                  onChange={(e) => setKitchenNotes(e.target.value)}
                  className="cart-notes-textarea"
                />
              </div>

              {/* Delivery / Staff Tip */}
              <div className="cart-gratuity-block">
                <span className="gratuity-title">Add Tip for Restaurant Staff</span>
                <div className="gratuity-chips">
                  {[10, 20, 30, 50].map((amt) => (
                    <button
                      type="button"
                      key={amt}
                      className={`gratuity-chip ${tipAmount === amt ? 'selected' : ''}`}
                      onClick={() => setTipAmount(amt)}
                    >
                      ₹{amt}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`gratuity-chip ${tipAmount === 0 ? 'selected' : ''}`}
                    onClick={() => setTipAmount(0)}
                  >
                    No Tip
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-cost-summary">
              <div className="cost-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="cost-row">
                <span>GST (5%)</span>
                <span>₹{gst}</span>
              </div>
              {tipAmount > 0 && (
                <div className="cost-row">
                  <span>Staff Tip</span>
                  <span>₹{tipAmount}</span>
                </div>
              )}
              <div className="cost-divider" />
              <div className="cost-row cost-total">
                <span>Total Amount</span>
                <span className="total-figure">₹{grandTotal}</span>
              </div>
            </div>

            <div className="cart-footer-buttons">
              <button
                type="button"
                className="btn-cart-checkout"
                onClick={() =>
                  onCheckout({
                    items: cartItems,
                    subtotal,
                    tax: gst,
                    tipAmount,
                    grandTotal,
                    kitchenNotes,
                  })
                }
              >
                <span>Confirm & Place Order</span>
                <span className="btn-arrow">→</span>
              </button>
              
              <button 
                type="button" 
                className="btn-cart-clear" 
                onClick={onClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
