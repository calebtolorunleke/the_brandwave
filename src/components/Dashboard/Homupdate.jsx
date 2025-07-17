import React, { useState } from "react";
import logo from "../images/logo.svg";
import headImg from "../images/homeImg.jpg";
import simg from "../images/sImg.jpg";
import roundimg from "../images/test1.jpeg";
import FirstFooter from "../GetStarted/FirstFooter";

const Homupdate = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="max-w-[1300px] mx-auto md:px-12">
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
        <header className="relative z-10  px-4 flex justify-between items-center text-white py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Brandwave logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold">Brandwave</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              <li className="hover:text-gray-300 cursor-pointer">Features</li>
              <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </ul>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 text-sm font-medium transition">
            Launch my Brand
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black/80 text-white z-20 px-6 py-4 space-y-4 text-sm font-medium">
            <ul className="space-y-2">
              <li className="hover:text-gray-300 cursor-pointer">Features</li>
              <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-300 cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </ul>
            <button className="w-full bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
              Launch my Brand
            </button>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 px-4 flex flex-col items-center justify-center text-center text-white h-full max-w-2xl mx-auto gap-6">
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
      <div className="bg-[#99A6AF] grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 py-20 ">
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
      <FirstFooter />
      <footer className="bg-blue-900 text-white px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
              <img src={logo} alt="Brandwave logo" className="h-6 w-auto" />
              <span className="text-xl font-semibold">Brandwave</span>
            </div>
            <p className="text-sm text-gray-200 max-w-xs">
              Collaboration platform for modern teams.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">Company</h5>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>Product</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">Features</h5>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>Screen sharing</li>
              <li>iOS & Android Apps</li>
              <li>File Sharing User Management</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">
              Contact Us
            </h5>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>info@brandwave.com</li>
              <li>1-800-200-300</li>
              <li>1010 Sunset Blv.</li>
              <li>Pali Alto, California</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h5 className="text-[#5468E7] font-bold text-lg mb-2">
              Stay ahead with branding tips
            </h5>
            <p className="text-sm text-gray-200 mb-4">
              Subscribe to our newsletter
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email"
                className="px-4 bg-gray-400 py-2 rounded text-black focus:outline-none"
              />
              <button className="bg-[#5468E7] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homupdate;
