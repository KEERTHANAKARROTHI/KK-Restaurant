import React from 'react';

export default function OurStory() {
  return (
    <section className="story-section" id="our-story">
      <div className="story-container">
        {/* Visual column */}
        <div className="story-visual-wrap">
          <div className="story-image-card">
            <img 
              src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1000&q=80" 
              alt="Traditional South Indian Thali meals served on banana leaf at KK Restaurant" 
              className="story-img"
              loading="lazy"
            />
            <div className="story-badge-note">
              <span className="story-badge-year">KK</span>
              <span className="story-badge-place">Pure Flavours</span>
            </div>
          </div>
        </div>

        {/* Story copy column */}
        <div className="story-content">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>About KK Restaurant</span>
          </div>

          <h2 className="story-title">
            Simple, honest cooking <br />
            rooted in South Indian tradition.
          </h2>

          <div className="story-text-body">
            <p>
              KK Restaurant was started with a passion for bringing authentic South Indian home-style cooking to food lovers. We celebrate the culinary heritage of Tamil Nadu, Andhra Pradesh, Kerala, and Karnataka.
            </p>
            <p>
              Every morning begins at 5:00 AM with fresh coconut grating, dal soaking, and slow stone-ground batter preparation. We roast our spices in pure ghee and prepare fresh sambar with drumsticks and shallots throughout the day.
            </p>
            <p>
              Whether you are stopping by for a quick morning idli-vada, enjoying an afternoon Hyderabadi biryani, or catching up over degree filter coffee, we want you to enjoy every bite.
            </p>
          </div>

          {/* Core values */}
          <div className="story-pillars">
            <div className="pillar-item">
              <span className="pillar-num">01</span>
              <div>
                <h4 className="pillar-name">Daily Fresh Batters</h4>
                <p className="pillar-desc">Naturally fermented idli and dosa batters ground fresh each morning.</p>
              </div>
            </div>

            <div className="pillar-item">
              <span className="pillar-num">02</span>
              <div>
                <h4 className="pillar-name">Pure Ghee & Handpicked Spices</h4>
                <p className="pillar-desc">Traditional Byadgi chillies, Tellicherry pepper, and aromatic desi ghee.</p>
              </div>
            </div>

            <div className="pillar-item">
              <span className="pillar-num">03</span>
              <div>
                <h4 className="pillar-name">Homestyle Taste</h4>
                <p className="pillar-desc">No artificial colors, no preservatives—just honest, flavorful cooking.</p>
              </div>
            </div>
          </div>

          <div className="story-signoff">
            <div className="chef-info">
              <span className="chef-name">KK Family Kitchen</span>
              <span className="chef-role">Serving with love & hygiene</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
