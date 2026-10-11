import React from 'react';

export default function ChefSpecials({ specials, cart, onAddToCart, onQuickView }) {
  if (!specials || specials.length === 0) return null;

  const spotlightItem = specials[0];
  const sideItems = specials.slice(1);

  const getInCartQty = (id) => {
    const found = cart.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section className="specials-section" id="specials">
      <div className="specials-container">
        <div className="section-header-centered">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Customer Favorites</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="specials-main-title">KK Chef's Specials</h2>
          <p className="specials-subtitle">
            Our most popular and loved dishes prepared fresh using traditional spices and pure ghee.
          </p>
        </div>

        <div className="specials-showcase-grid">
          {/* Main Spotlight Dish */}
          {spotlightItem && (
            <article className="spotlight-card">
              <div className="spotlight-media" onClick={() => onQuickView(spotlightItem)}>
                <img 
                  src={spotlightItem.image} 
                  alt={spotlightItem.name} 
                  className="spotlight-img"
                  loading="lazy"
                />
                <span className="spotlight-tag">Must Try</span>
              </div>

              <div className="spotlight-content">
                <div className="spotlight-meta-top">
                  <div className="veg-badge-row">
                    <span className={`food-type-icon ${spotlightItem.isVeg ? 'veg' : 'non-veg'}`} title={spotlightItem.isVeg ? 'Pure Veg' : 'Non-Veg'}>
                      ●
                    </span>
                    <span className="spotlight-category">South Indian Tiffins</span>
                  </div>
                  <span className="spotlight-price">₹{spotlightItem.price}</span>
                </div>

                <h3 className="spotlight-title" onClick={() => onQuickView(spotlightItem)}>
                  {spotlightItem.name}
                </h3>

                <p className="spotlight-desc">{spotlightItem.description}</p>

                {/* Key Ingredients */}
                <div className="spotlight-ingredients">
                  <span className="ingredients-label">Key ingredients:</span>
                  <div className="ingredients-list">
                    {spotlightItem.details?.ingredients?.slice(0, 5).map((ing, i) => (
                      <span key={i} className="ingredient-pill">{ing}</span>
                    ))}
                  </div>
                </div>

                {spotlightItem.details?.sideServing && (
                  <div className="spotlight-pairing">
                    <span className="pairing-icon">🥣</span>
                    <span className="pairing-text">
                      <strong>Served with:</strong> {spotlightItem.details.sideServing}
                    </span>
                  </div>
                )}

                <div className="spotlight-actions">
                  <button 
                    type="button"
                    className={`btn-specials-add ${getInCartQty(spotlightItem.id) > 0 ? 'in-order' : ''}`}
                    onClick={() => onAddToCart(spotlightItem)}
                  >
                    {getInCartQty(spotlightItem.id) > 0 
                      ? `In Cart (${getInCartQty(spotlightItem.id)})` 
                      : '+ Add to Cart'}
                  </button>

                  <button 
                    type="button"
                    className="btn-specials-view"
                    onClick={() => onQuickView(spotlightItem)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Side Signature Items */}
          <div className="specials-side-stack">
            {sideItems.map((item) => {
              const qty = getInCartQty(item.id);
              return (
                <article key={item.id} className="side-special-item">
                  <div 
                    className="side-special-thumb"
                    onClick={() => onQuickView(item)}
                  >
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>

                  <div className="side-special-info">
                    <div className="side-special-header">
                      <div className="title-with-veg">
                        <span className={`food-type-icon ${item.isVeg ? 'veg' : 'non-veg'}`} title={item.isVeg ? 'Pure Veg' : 'Non-Veg'}>
                          ●
                        </span>
                        <h4 
                          className="side-special-name" 
                          onClick={() => onQuickView(item)}
                        >
                          {item.name}
                        </h4>
                      </div>
                      <span className="side-special-price">₹{item.price}</span>
                    </div>

                    <p className="side-special-desc">{item.description}</p>

                    <div className="side-special-footer">
                      <span className="side-category-pill">{item.details?.prepTime || 'Fresh'}</span>
                      
                      <div className="side-actions">
                        <button 
                          type="button"
                          className="side-btn-quick"
                          onClick={() => onQuickView(item)}
                          title="View details"
                        >
                          Details
                        </button>
                        <button 
                          type="button"
                          className={`side-btn-add ${qty > 0 ? 'in-order' : ''}`}
                          onClick={() => onAddToCart(item)}
                          aria-label={`Add ${item.name} to cart`}
                        >
                          {qty > 0 ? `In Cart (${qty})` : '+ Add'}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
