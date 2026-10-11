import React from 'react';

export default function MenuCard({ item, inCartQuantity, onAddToCart, onQuickView }) {
  return (
    <article className="menu-card">
      {/* Media container */}
      <div 
        className="card-media" 
        onClick={() => onQuickView(item)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${item.name}`}
      >
        <img 
          src={item.image} 
          alt={item.name} 
          loading="lazy" 
          className="card-img"
        />

        {/* Veg / Non-Veg Indicator & Badge */}
        <div className="card-top-badges">
          <span className={`veg-nonveg-badge ${item.isVeg ? 'is-veg' : 'is-nonveg'}`} title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
            <span className="dot" />
          </span>
          {item.badge && <span className="badge-highlight">{item.badge}</span>}
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="card-header">
          <h3 
            className="card-title" 
            onClick={() => onQuickView(item)}
          >
            {item.name}
          </h3>
          <span className="card-price">₹{item.price}</span>
        </div>

        <p className="card-description">
          {item.description}
        </p>

        {/* Metadata */}
        <div className="card-meta">
          {item.details?.prepTime && (
            <span className="card-meta-tag">⏱️ {item.details.prepTime}</span>
          )}
          <span className="card-meta-tag">★ {item.rating.toFixed(1)} ({item.reviewsCount})</span>
        </div>

        {/* Actions */}
        <div className="card-footer">
          <button 
            type="button"
            className="btn-card-details"
            onClick={() => onQuickView(item)}
          >
            Details
          </button>

          <button 
            type="button"
            className={`btn-card-add ${inCartQuantity > 0 ? 'is-in-cart' : ''}`}
            onClick={() => onAddToCart(item)}
            aria-label={`Add ${item.name} to cart`}
          >
            {inCartQuantity > 0 ? `In Cart (${inCartQuantity})` : '+ Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}
