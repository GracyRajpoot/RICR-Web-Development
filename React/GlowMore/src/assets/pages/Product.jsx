import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Product = () => {
  const product = [
    { name: "Lipstick", price: "₹599" },
    { name: "Foundation", price: "₹999" },
    { name: "Mascara", price: "₹499" },
    { name: "Blush", price: "₹399" },
    { name: "Eyeliner", price: "₹299" },
    { name: "Compact Powder", price: "₹699" },
  ];

  return (
    <>
      <Navbar />
      <section className="product">
        <h2>Our Product</h2>
        <div className="product-grid">
          {products.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
