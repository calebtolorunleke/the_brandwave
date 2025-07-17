import React from "react";
import logo from "../images/logo.svg";
import headImg from "../images/homeImg.jpg";

const Homupdate = () => {
  return (
    <main>
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[40rem] max-w-[1300px] mx-auto px-6 md:px-12"
        style={{
          backgroundImage: `url(${headImg})`,
        }}
      >
        {/* Overlay (optional for better text visibility) */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center text-white py-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Brandwave logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold">Brandwave</span>
          </div>
          <nav>
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li className="hover:text-gray-300 cursor-pointer">Features</li>
              <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </ul>
          </nav>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium transition">
            Launch my Brand
          </button>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full max-w-2xl mx-auto gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Make Waves with Your Brand
          </h1>
          <p className="text-lg md:text-xl">
            Launch your products, showcase your story, and ride the wave to
            global recognition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium">
              Get Started
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-gray-100 transition font-medium">
              Try for Free
            </button>
          </div>
          <p className="text-sm text-gray-200">
            No credit card required. Set-up in under 5 minutes.
          </p>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Homupdate;
