import React, { useState } from "react";
import logoName from "../images/profileLogo.png";
import { Menu, X } from "lucide-react"; // Optional: install with `npm i lucide-react`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="px-6 py-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logoName}
            className="h-10 w-10 object-contain rounded-xl"
            alt="Brandwave Logo"
          />
          <h3 className="text-xl font-semibold text-blue-900 tracking-wide">
            BRANDWAVE
          </h3>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <span className="cursor-pointer hover:text-blue-600">Features</span>
          <span className="cursor-pointer hover:text-blue-600">Pricing</span>
          <span className="cursor-pointer hover:text-blue-600">
            Testimonials
          </span>
          <button className="bg-blue-600 py-2 px-4 rounded-xl text-white hover:bg-blue-700 transition">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-blue-900"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-start gap-4 mt-4 md:hidden text-gray-700">
          <span className="cursor-pointer hover:text-blue-600">Features</span>
          <span className="cursor-pointer hover:text-blue-600">Pricing</span>
          <span className="cursor-pointer hover:text-blue-600">
            Testimonials
          </span>
          <button className="bg-blue-600 py-2 px-4 rounded-xl text-white hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
