import React from "react";
import logo from "../images/logo.svg";
import headImg from "../images/homeImg.jpg";
import simg from "../images/sImg.jpg";
import roundimg from "../images/test1.jpeg";

const Homupdate = () => {
  return (
    <main className="max-w-[1300px] mx-auto px-6 md:px-12">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-[40rem] overflow-hidden"
        style={{
          backgroundImage: `url(${headImg})`,
        }}
      >
        {/* Overlay */}
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

      {/* Brand Section */}
      <div className="bg-[#99A6AF] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 rounded-b-xl">
        {/* Left: Profile and Service */}
        <div className="flex flex-col gap-8">
          {/* Profile Card */}
          <div className="rounded bg-[#C8C9CA] p-6 space-y-4 shadow-md">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={roundimg}
                className="w-12 h-12 rounded-full"
                alt="Profile"
              />
              <div className="flex flex-col">
                <span className="font-semibold">Createx Inc.</span>
                <span className="text-sm text-gray-700">Fashion Designer</span>
              </div>
            </div>
            <p className="text-sm text-gray-800">
              Cretex Inc. is a contemporary fashion brand redefining African
              style through innovative tailoring, modern cuts, and timeless
              elegance. From custom pieces to ready-to-wear, each outfit tells a
              story of confidence and culture.
            </p>
            {/* You can replace the following with actual star icons or social media icons */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-4 h-4 bg-yellow-400 rounded-full"
                  title="Star"
                ></div>
              ))}
            </div>
          </div>

          {/* Design Services and Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3 py-6 px-4 bg-[#C8C9CA] rounded shadow-sm">
              <h2 className="font-bold text-lg">Design Services</h2>
              <p className="text-sm">
                Custom Tailoring (Men & Women) <br />
                Ready-to-Wear Sales <br />
                Bridal & Eventwear <br />
                Creative Styling & Consultation <br />
                Fashion Design for Film/Stage
              </p>
              <span className="underline text-sm text-blue-800 cursor-pointer">
                Book a Styling Session
              </span>
            </div>
            <div className="h-full">
              <img
                src={simg}
                className="w-full h-full object-cover rounded"
                alt="Design Sample"
              />
            </div>
          </div>
        </div>

        {/* Right: CTA Section */}
        <div className="flex flex-col gap-6 justify-center items-start px-4 md:px-8">
          <h1 className="font-bold text-4xl text-white leading-tight">
            Build a Brand Page That Speaks for You
          </h1>
          <p className="text-white text-base">
            Brandwave makes it easy to build a standout presence. Upload your
            assets, choose a layout, and go live – no code, no hassle.
          </p>
          <button className="text-white bg-[#1E88E5] px-6 py-3 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Homupdate;
