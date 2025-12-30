import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="auth-container">
        <h2>Signup</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Create Account</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
