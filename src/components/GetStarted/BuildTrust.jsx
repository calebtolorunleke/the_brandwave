import React from "react";
import laptopImage from "../images/laptopImage.png";

const BuildTrust = () => {
  return (
    <div className="flex flex-row px-6 gap-10 justify-center items-center">
      <div className="flex flex-col gap-5 w-[50%]">
        <h1 className="font-bold text-3xl">
          Build Trust and Showcase Your Brand Effortlessly
        </h1>
        <p>
          Create a professional brand page, manage multiple brands, and track
          performance
        </p>
        <button className="bg-blue-600 py-2 px-4 w-30 rounded-xl text-white hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
      <img
        src={laptopImage}
        alt=""
        className="mx-30 w-[50%] h-100  object-contain"
      />
    </div>
  );
};

export default BuildTrust;
