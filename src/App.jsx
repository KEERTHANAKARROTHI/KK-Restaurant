import React, { useState, useMemo } from 'react';
import './App.css';
import { MENU_ITEMS, CATEGORIES, RESTAURANT_INFO } from './data/menuData';

function App() {
  // Cart state
  const [cart, setCart] = useState([
    { ...MENU_ITEMS[0], quantity: 1 },  // Ghee Podi Masala Dosa
    { ...MENU_ITEMS[23], quantity: 2 }, // Filter Coffee
  ]);

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vegFilter, setVegFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const [searchQuery, setSearchQuery] = useState('');

  // Table reservation form state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2 Guests',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Toast helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  // Cart actions
  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    showToast(`Added ${dish.name} to cart!`);
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setOrderSuccess({
      orderId: `KK-${Math.floor(1000 + Math.random() * 9000)}`,
      items: cart,
      total,
    });
    setCart([]);
    setIsCartOpen(false);
  };

  // Table booking submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone) return;
    setBookingSuccess(true);
  };

  // Filtered menu
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Veg / Non-Veg
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'non-veg' && item.isVeg) return false;

      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        if (!matchName && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, vegFilter, searchQuery]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="simple-app">
      {/* 1. Simple Navbar */}
      <header className="simple-navbar">
        <div className="navbar-content">
          <div className="brand-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-badge">KK</span>
            <div>
              <h1 className="logo-title">KK Restaurant</h1>
              <p className="logo-subtitle">South Indian Food</p>
            </div>
          </div>

          <nav className="nav-menu">
            <a href="#menu" className="nav-item">Menu</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#booking" className="nav-item">Book a Table</a>
            <a href="#contact" className="nav-item">Contact</a>
          </nav>

          <button 
            type="button" 
            className="cart-button" 
            onClick={() => setIsCartOpen(true)}
            aria-label="View Cart"
          >
            <span>🛒 Cart</span>
            {totalCartCount > 0 && <span className="cart-badge">{totalCartCount}</span>}
          </button>
        </div>
      </header>

      <main>
        {/* 2. Simple Hero Banner */}
        <section className="simple-hero">
          <div className="hero-container">
            <div className="hero-text-block">
              <span className="hero-tag">Authentic Taste</span>
              <h2 className="hero-heading">Fresh & Tasty South Indian Food</h2>
              <p className="hero-description">
                Enjoy crispy dosas, soft idlis, authentic biryanis, fresh fruit juices, and ice creams made fresh every day.
              </p>
              
              <div className="hero-btn-group">
                <a href="#menu" className="btn-primary">View Menu ↓</a>
                <a href="#booking" className="btn-secondary">Book a Table</a>
              </div>

              <div className="hero-quick-info">
                <span>📍 Indiranagar, Bengaluru</span>
                <span>•</span>
                <span>⏰ 7:00 AM – 10:30 PM</span>
              </div>
            </div>

            <div className="hero-image-block">
              <img 
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80" 
                alt="South Indian Ghee Masala Dosa with Sambar and Chutney"
                className="hero-main-img" 
              />
            </div>
          </div>
        </section>

        {/* 3. Main Menu Section */}
        <section className="menu-container" id="menu">
          <div className="section-title-wrap">
            <h2 className="section-main-heading">Our Menu</h2>
            <p className="section-sub-heading">Choose from our fresh tiffins, authentic biryanis, fresh juices & ice creams</p>
          </div>

          {/* Search & Veg/Non-Veg filter bar */}
          <div className="menu-filter-controls">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search dish (e.g. Dosa, Biryani, Juice, Ice Cream)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button type="button" className="clear-btn" onClick={() => setSearchQuery('')}>✕</button>
              )}
            </div>

            <div className="veg-filter-tabs">
              <button 
                type="button" 
                className={`veg-tab ${vegFilter === 'all' ? 'active' : ''}`}
                onClick={() => setVegFilter('all')}
              >
                All
              </button>
              <button 
                type="button" 
                className={`veg-tab ${vegFilter === 'veg' ? 'active' : ''}`}
                onClick={() => setVegFilter('veg')}
              >
                🟢 Pure Veg
              </button>
              <button 
                type="button" 
                className={`veg-tab ${vegFilter === 'non-veg' ? 'active' : ''}`}
                onClick={() => setVegFilter('non-veg')}
              >
                🔴 Non-Veg
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`cat-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Cards Grid */}
          <div className="dishes-grid">
            {filteredDishes.length > 0 ? (
              filteredDishes.map((dish) => {
                const inCart = cart.find((c) => c.id === dish.id);
                return (
                  <div key={dish.id} className="dish-card">
                    <div className="dish-img-wrap" onClick={() => setSelectedItem(dish)}>
                      <img src={dish.image} alt={dish.name} className="dish-img" loading="lazy" />
                      <span className={`dish-veg-symbol ${dish.isVeg ? 'veg' : 'non-veg'}`}>
                        ●
                      </span>
                    </div>

                    <div className="dish-content">
                      <div className="dish-header-row">
                        <h3 className="dish-name" onClick={() => setSelectedItem(dish)}>
                          {dish.name}
                        </h3>
                        <span className="dish-price">₹{dish.price}</span>
                      </div>

                      <p className="dish-desc">{dish.description}</p>

                      <div className="dish-footer-row">
                        <button 
                          type="button" 
                          className="btn-details"
                          onClick={() => setSelectedItem(dish)}
                        >
                          View Info
                        </button>

                        <button 
                          type="button" 
                          className={`btn-add-cart ${inCart ? 'in-cart' : ''}`}
                          onClick={() => addToCart(dish)}
                        >
                          {inCart ? `Added (${inCart.quantity})` : '+ Add'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="empty-results">
                <p>No dishes found matching your search.</p>
                <button 
                  type="button" 
                  className="btn-reset" 
                  onClick={() => {
                    setSelectedCategory('all');
                    setVegFilter('all');
                    setSearchQuery('');
                  }}
                >
                  Show All Dishes
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 4. About Us Section */}
        <section className="about-section" id="about">
          <div className="about-container">
            <div className="about-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80" 
                alt="South Indian Meals Thali"
                className="about-img" 
              />
            </div>
            <div className="about-text-wrap">
              <span className="hero-tag">About KK Restaurant</span>
              <h2>Authentic Homestyle South Indian Food</h2>
              <p>
                At KK Restaurant, we serve authentic food prepared with traditional homestyle recipes. 
                Our idli and dosa batters are naturally fermented and stone-ground daily. 
                We use pure desi ghee and handpicked spices to give you the real South Indian flavor.
              </p>
              <ul className="about-features-list">
                <li>✓ Stone-ground fresh batters every morning</li>
                <li>✓ Pure ghee & traditional spices</li>
                <li>✓ Clean, hygienic, and affordable meals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Simple Table Booking Section */}
        <section className="booking-section" id="booking">
          <div className="booking-container">
            <div className="section-title-wrap">
              <h2 className="section-main-heading">Book a Table</h2>
              <p className="section-sub-heading">Reserve your table in advance for family lunch or dinner</p>
            </div>

            {!bookingSuccess ? (
              <form onSubmit={handleBookingSubmit} className="simple-booking-form">
                <div className="form-group-row">
                  <div className="form-item">
                    <label>Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Keerthana"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    />
                  </div>

                  <div className="form-item">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-row three">
                  <div className="form-item">
                    <label>Date</label>
                    <input 
                      type="date" 
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    />
                  </div>

                  <div className="form-item">
                    <label>Time</label>
                    <select 
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                    >
                      <option value="08:30">8:30 AM (Breakfast)</option>
                      <option value="12:30">12:30 PM (Lunch)</option>
                      <option value="13:30">1:30 PM (Lunch)</option>
                      <option value="19:30">7:30 PM (Dinner)</option>
                      <option value="20:30">8:30 PM (Dinner)</option>
                    </select>
                  </div>

                  <div className="form-item">
                    <label>Number of Guests</label>
                    <select 
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="6 Guests">6 Guests</option>
                      <option value="8+ Guests">8+ Guests</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary full-width">
                  Confirm Table Reservation
                </button>
              </form>
            ) : (
              <div className="booking-success-box">
                <span className="success-icon">✓</span>
                <h3>Table Reserved Successfully!</h3>
                <p>
                  Thank you <strong>{bookingForm.name}</strong>! Your table for <strong>{bookingForm.guests}</strong> on <strong>{bookingForm.date}</strong> at <strong>{bookingForm.time}</strong> has been booked.
                </p>
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => setBookingSuccess(false)}
                >
                  Book Another Table
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 6. Simple Footer */}
      <footer className="simple-footer" id="contact">
        <div className="footer-content">
          <div className="footer-col">
            <h3>KK Restaurant</h3>
            <p>Authentic South Indian Tiffins, Meals & Biryanis served hot and fresh.</p>
            <p className="footer-credits">Portfolio Project developed by Keerthana</p>
          </div>

          <div className="footer-col">
            <h4>Timings</h4>
            <p>Breakfast: 7:00 AM – 11:30 AM</p>
            <p>Lunch: 12:00 PM – 3:30 PM</p>
            <p>Dinner: 4:30 PM – 10:30 PM</p>
            <p>Open 7 Days a Week</p>
          </div>

          <div className="footer-col">
            <h4>Contact & Location</h4>
            <p>📍 {RESTAURANT_INFO.address}</p>
            <p>📞 Phone: {RESTAURANT_INFO.phone}</p>
            <p>✉️ Email: {RESTAURANT_INFO.email}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} KK Restaurant. All rights reserved.</p>
        </div>
      </footer>

      {/* 7. Simple Cart Sidebar */}
      {isCartOpen && (
        <div className="cart-modal-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>Your Food Cart</h3>
              <button type="button" className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
            </div>

            <div className="cart-items-area">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <p>Your cart is empty.</p>
                  <button type="button" className="btn-primary" onClick={() => setIsCartOpen(false)}>
                    Browse Menu
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img src={item.image} alt={item.name} className="cart-thumb" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <span className="cart-item-price">₹{item.price} each</span>
                      
                      <div className="cart-qty-buttons">
                        <button type="button" onClick={() => updateQuantity(item.id, -1)}>−</button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        <button type="button" className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </div>
                    </div>
                    <span className="cart-item-total">₹{item.price * item.quantity}</span>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-summary-line">
                  <span>Subtotal:</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                <div className="cart-summary-line">
                  <span>GST (5%):</span>
                  <span>₹{Math.round(cartSubtotal * 0.05)}</span>
                </div>
                <div className="cart-summary-line total">
                  <span>Total Amount:</span>
                  <span>₹{cartSubtotal + Math.round(cartSubtotal * 0.05)}</span>
                </div>

                <div className="cart-actions">
                  <button type="button" className="btn-primary full-width" onClick={handleCheckout}>
                    Place Order (₹{cartSubtotal + Math.round(cartSubtotal * 0.05)})
                  </button>
                  <button type="button" className="btn-clear" onClick={clearCart}>
                    Clear Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 8. Simple Item Detail Popup */}
      {selectedItem && (
        <div className="modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="simple-modal-box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedItem(null)}>✕</button>
            <img src={selectedItem.image} alt={selectedItem.name} className="modal-hero-img" />
            
            <div className="modal-content-area">
              <div className="modal-title-row">
                <h3>{selectedItem.name}</h3>
                <span className="modal-price">₹{selectedItem.price}</span>
              </div>

              <span className={`modal-veg-tag ${selectedItem.isVeg ? 'veg' : 'non-veg'}`}>
                {selectedItem.isVeg ? '🟢 Pure Vegetarian' : '🔴 Non-Vegetarian'}
              </span>

              <p className="modal-desc">{selectedItem.description}</p>

              {selectedItem.details?.ingredients && (
                <div className="modal-ingredients">
                  <strong>Key Ingredients:</strong>
                  <p>{selectedItem.details.ingredients.join(', ')}</p>
                </div>
              )}

              {selectedItem.details?.sideServing && (
                <div className="modal-ingredients">
                  <strong>Served with:</strong>
                  <p>{selectedItem.details.sideServing}</p>
                </div>
              )}

              <button 
                type="button" 
                className="btn-primary full-width" 
                onClick={() => {
                  addToCart(selectedItem);
                  setSelectedItem(null);
                }}
              >
                Add to Cart (₹{selectedItem.price})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. Simple Order Placed Modal */}
      {orderSuccess && (
        <div className="modal-backdrop" onClick={() => setOrderSuccess(null)}>
          <div className="simple-modal-box text-center" onClick={(e) => e.stopPropagation()}>
            <span className="success-icon">✓</span>
            <h3>Order Received!</h3>
            <p>Your order token number is <strong>#{orderSuccess.orderId}</strong></p>
            
            <div className="order-summary-box">
              <p>Items: {orderSuccess.items.length} items</p>
              <p>Total Paid: <strong>₹{orderSuccess.total + Math.round(orderSuccess.total * 0.05)}</strong></p>
              <p>Estimated prep time: 15–20 Mins</p>
            </div>

            <button type="button" className="btn-primary" onClick={() => setOrderSuccess(null)}>
              Back to Menu
            </button>
          </div>
        </div>
      )}

      {/* 10. Simple Toast Notification */}
      {toastMessage && (
        <div className="simple-toast">
          <span>✓ {toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
