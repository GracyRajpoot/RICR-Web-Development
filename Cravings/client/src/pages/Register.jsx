import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
    setValidationError({});
  };

  const validate = () => {
    let error = {};

    // Full Name
    if (formData.fullName.trim().length < 3) {
      error.fullName = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      error.fullName = "Only alphabets and spaces allowed";
    }

    // Email
    if (
      !/^[\w\.]+@(gmail|outlook|yahoo)\.(com|in)$/.test(formData.email)
    ) {
      error.email = "Enter a valid email address";
    }

    // Mobile Number
    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      error.mobileNumber = "Enter a valid Indian mobile number";
    }

    // Password
    if (formData.password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (formData.password !== formData.confirmPassword) {
      error.confirmPassword = "Passwords do not match";
    }

    setValidationError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      toast.error("Please fix validation errors");
      setIsLoading(false);
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-6 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Registration</h1>
          <p className="text-gray-600">You are 1 step away to stop your cravings</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} onReset={handleClearForm} className="p-8 space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 rounded-lg"
            />
            {validationError.fullName && (
              <p className="text-red-500 text-sm">{validationError.fullName}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 rounded-lg"
            />
            {validationError.email && (
              <p className="text-red-500 text-sm">{validationError.email}</p>
            )}

            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              maxLength="10"
              value={formData.mobileNumber}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 rounded-lg"
            />
            {validationError.mobileNumber && (
              <p className="text-red-500 text-sm">{validationError.mobileNumber}</p>
            )}

            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 rounded-lg"
            />
            {validationError.password && (
              <p className="text-red-500 text-sm">{validationError.password}</p>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-4 py-3 border-2 rounded-lg"
            />
            {validationError.confirmPassword && (
              <p className="text-red-500 text-sm">
                {validationError.confirmPassword}
              </p>
            )}

            <div className="flex gap-4 pt-6">
              <button
                type="reset"
                disabled={isLoading}
                className="flex-1 bg-gray-300 py-3 rounded-lg"
              >
                Clear
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg"
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
