import React, { useState } from "react";
import logoName from "../images/profileLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("https://brandwave-api.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        navigate("/signin");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting form: ", err);
      alert("Failed to submit. Please try again.");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      if (!credentialResponse?.credential) {
        throw new Error("Google credential not received");
      }

      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Decoded Google User (SignUp):", decoded);

      const response = await fetch(
        "https://brandwave-api.onrender.com/google-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: credentialResponse.credential }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Google signup failed");
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/Dashboard");
    } catch (error) {
      console.error("Google Sign-Up Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      {/* Logo and Branding */}
      <Link to="/" className="flex items-center gap-3 mb-6">
        <img
          src={logoName}
          className="h-10 w-10 object-contain rounded-xl"
          alt="Brandwave Logo"
        />
        <h3 className="text-xl font-semibold text-blue-900 tracking-wide">
          BRANDWAVE
        </h3>
      </Link>
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Create Your Account
      </h1>

      {/* Google Sign Up */}
      <div className="flex justify-center w-full max-w-xs mb-4">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={(error) => console.error("Google Sign-Up Error:", error)}
          theme="outline"
          size="large"
          type="standard"
          shape="pill"
        />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4 w-full max-w-xs">
        <div className="h-px flex-grow bg-gray-300"></div>
        <span className="text-gray-500 text-sm">or</span>
        <div className="h-px flex-grow bg-gray-300"></div>
      </div>

      {/* Sign-up Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <input
          type="text"
          placeholder="Full Name"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          Create Account
        </button>
      </form>

      {/* Terms */}
      <p className="text-sm text-gray-500 mt-6 text-center max-w-xs px-2">
        By signing up, you agree to our{" "}
        <a href="/terms" className="text-blue-600 underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-blue-600 underline">
          Privacy Policy
        </a>
        .
      </p>

      {/* Redirect to Sign In */}
      <p className="text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/signin")}
          className="text-blue-600 underline cursor-pointer"
        >
          Sign in
        </span>
      </p>
    </div>
  );
};

export default SignUp;
