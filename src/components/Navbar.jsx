import React from "react";
import { Apple, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      {/* Logo Section */}
      <Logo></Logo>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8">
        {["Products", "Use Case", "Integration", "Resources", "Pricing"].map(
          (item) => (
            <li
              key={item}
              className="group flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-purple-600 cursor-pointer transition-colors duration-200"
            >
              {item}
              {item !== "Pricing" && (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              )}
            </li>
          ),
        )}
      </ul>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold text-purple-700 hover:text-purple-900 px-4 py-2 transition-all">
          Login
        </button>
        <button className="hidden lg:block text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 px-5 py-2.5 rounded-lg transition-all active:scale-95">
          Request demo
        </button>
        <button className="text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-6 py-2.5 rounded-lg shadow-md shadow-purple-200 hover:shadow-lg transition-all active:scale-95">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
