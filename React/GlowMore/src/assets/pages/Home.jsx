import React from "react";
import Home from "./pages/Home.jsx";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Enhance Your Beauty</h1>
        <p>Premium makeup products for your perfect look</p>
        <button>Shop Now</button>
      </section>

      <section className="features">
        <div className="feature">💄 Premium Products</div>
        <div className="feature">🌸 Skin Friendly</div>
        <div className="feature">🚚 Fast Delivery</div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
