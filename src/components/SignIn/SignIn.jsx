import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoName from "../images/profileLogo.png";
import { GoogleLogin } from "@react-oauth/google";
import * as jwtDecode from "jwt-decode";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email/password sign-in
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://brandwaveapi-production.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          throw new Error("Login failed with unknown error");
        }
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/Dashboard");
    } catch (error) {
      alert(error.message);
      console.error("Login error:", error);
    }
  };

  // Google sign-in
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode.default(credentialResponse.credential);
      console.log("Decoded Google User:", decoded);

      const response = await fetch(
        "https://brandwaveapi-production.up.railway.app/google-login",
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
        throw new Error(data.message || "Google login failed");
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/Dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <img src={logoName} alt="Logo" className="h-10 w-10 rounded-xl" />
          <h3 className="text-2xl font-semibold text-blue-900">BRANDWAVE</h3>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign In to Your Account
        </h2>

        {/* Google Sign-in */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Google login failed")}
            useOneTap
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-between items-center text-sm text-blue-600">
            <span
              onClick={() => navigate("/ForgotPassword")}
              className="cursor-pointer hover:underline"
            >
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Redirect */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
