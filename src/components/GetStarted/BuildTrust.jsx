import React from "react";
import laptopImage from "../images/laptopImage.png";
import { useNavigate } from "react-router-dom";

const BuildTrust = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-6 py-8 gap-8 md:gap-10 items-center justify-center">
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl text-blue-900">
          Build Trust and Showcase Your Brand Effortlessly
        </h1>
        <p className="text-gray-600">
          Create a professional brand page, manage multiple brands, and track
          performance.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            onClick={handleGetStarted}
            className="bg-blue-600 py-2 px-6 rounded-xl text-white hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img
          src={laptopImage}
          alt="Laptop Display"
          className="w-full max-w-md mx-auto object-contain"
        />
      </div>
    </div>
  );
};

export default BuildTrust;
