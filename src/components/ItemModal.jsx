import React, { useEffect } from 'react';

export default function ItemModal({ item, onClose, onAddToCart, inCartQuantity }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="item-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-dish-title"
      >
        <button 
          type="button" 
          className="modal-close-button" 
          onClick={onClose} 
          aria-label="Close details"
        >
          ✕
        </button>

        <div className="item-modal-layout">
          {/* Photo */}
          <div className="item-modal-photo-wrap">
            <img 
              src={item.image} 
              alt={item.name} 
              className="item-modal-img" 
            />
            {item.badge && (
              <span className="modal-photo-badge">{item.badge}</span>
            )}
          </div>

          {/* Info */}
          <div className="item-modal-details">
            <div className="modal-veg-row">
              <span className={`veg-nonveg-badge ${item.isVeg ? 'is-veg' : 'is-nonveg'}`}>
                <span className="dot" />
              </span>
              <span className="modal-category-label">
                {item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'} • {item.category.toUpperCase()}
              </span>
            </div>
            
            <h2 id="modal-dish-title" className="modal-dish-title">{item.name}</h2>
            
            <div className="modal-price-line">
              <span className="modal-price-figure">₹{item.price}</span>
              {item.details?.prepTime && (
                <span className="modal-prep-tag">Prep time: ~{item.details.prepTime}</span>
              )}
            </div>

            <p className="modal-dish-desc">{item.description}</p>

            {/* Ingredients */}
            {item.details?.ingredients?.length > 0 && (
              <div className="modal-info-block">
                <h4 className="modal-block-heading">Key Ingredients</h4>
                <div className="modal-chips-flex">
                  {item.details.ingredients.map((ing, i) => (
                    <span key={i} className="ingredient-chip-tag">{ing}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Side Serving Note */}
            {item.details?.sideServing && (
              <div className="modal-meta-card">
                <span className="meta-card-title">Accompaniment</span>
                <span className="meta-card-body">{item.details.sideServing}</span>
              </div>
            )}

            {/* Action Footer */}
            <div className="modal-action-footer">
              <button 
                type="button"
                className="btn-modal-add-to-order"
                onClick={() => {
                  onAddToCart(item);
                }}
              >
                <span>Add to Cart</span>
                <span className="btn-modal-price">₹{item.price}</span>
              </button>

              {inCartQuantity > 0 && (
                <span className="modal-in-order-hint">
                  ✓ Currently in your cart ({inCartQuantity})
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
