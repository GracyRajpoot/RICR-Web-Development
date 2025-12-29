import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Glow With Confidence</h1>
          <p>Discover premium makeup products that enhance your natural beauty.</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Lipstick" />
            <h3>Matte Lipstick</h3>
            <p>₹799</p>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Foundation" />
            <h3>Liquid Foundation</h3>
            <p>₹1299</p>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Eyeshadow" />
            <h3>Eyeshadow Palette</h3>
            <p>₹1499</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <div className="feature">
          <h3>💄 Premium Quality</h3>
          <p>Made with skin-friendly ingredients.</p>
        </div>
        <div className="feature">
          <h3>🐰 Cruelty Free</h3>
          <p>No animal testing ever.</p>
        </div>
        <div className="feature">
          <h3>✨ Long Lasting</h3>
          <p>Stay flawless all day.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Glow?</h2>
        <button>Explore Collection</button>
      </section>

    </div>
  );
};

export default Home;
