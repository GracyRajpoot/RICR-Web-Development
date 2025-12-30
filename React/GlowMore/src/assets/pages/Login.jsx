import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="auth-container">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
