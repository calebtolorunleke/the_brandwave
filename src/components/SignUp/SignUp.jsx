import React from "react";
import logoName from "../images/profileLogo.png";
import google from "../icons/google.png";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      {/* Logo and Branding */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src={logoName}
          className="h-10 w-10 object-contain rounded-xl"
          alt="Brandwave Logo"
        />
        <h3 className="text-xl font-semibold text-blue-900 tracking-wide">
          BRANDWAVE
        </h3>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Create Your Account
      </h1>

      {/* Google Sign Up Button */}
      <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition w-full max-w-xs justify-center mb-4">
        <img
          src={google}
          alt="Google"
          className="bg-white rounded-full p-1 w-6 h-6"
        />
        <span className="text-sm font-medium">Sign up with Google</span>
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4 w-full max-w-xs">
        <div className="h-px flex-grow bg-gray-300"></div>
        <span className="text-gray-500 text-sm">or</span>
        <div className="h-px flex-grow bg-gray-300"></div>
      </div>

      {/* Sign-up form */}
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
        >
          Create Account
        </button>
      </form>

      {/* Terms of Service */}
      <p className="text-sm text-gray-500 mt-4 text-center w-full max-w-xs">
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

      {/* Already have an account */}
      <p className="text-sm text-gray-600 mt-2">
        Already have an account?{" "}
        <a href="/signin" className="text-blue-600 underline">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default SignUp;
