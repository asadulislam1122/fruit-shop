"use client";
import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react"; // Added Menu and X icons
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Products", "Use Case", "Integration", "Resources"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Logo />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <li
              key={item}
              className="text-sm font-medium text-slate-600 hover:text-purple-600 cursor-pointer transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-600 hover:text-purple-600 transition-all">
            <ShoppingCart size={20} />
          </button>

          <button className="hidden sm:block text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg shadow-md transition-all active:scale-95">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 border-b" : "max-h-0"}`}
      >
        <ul className="px-6 py-4 space-y-4 bg-white">
          {navLinks.map((item) => (
            <li
              key={item}
              className="text-base font-medium text-slate-600 hover:text-purple-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
          <li className="pt-2">
            <Button></Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
