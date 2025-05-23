"use client"
import React, { useState } from "react";
import { Coins, Wallet, Home, Info, Github, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-transparent backdrop-blur-sm shadow-md border-b border-purple-100 px-4 sm:px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Coins className="text-purple-600" size={28} />
          <span className="font-bold text-xl text-purple-700 tracking-tight">
            Sonna Wallet
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
          >
            <Home size={18} /> Home
          </a>
          <a
            href="/wallet"
            className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
          >
            <Wallet size={18} /> Wallet
          </a>
          <a
            href="/about"
            className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
          >
            <Info size={18} /> About
          </a>
          <a
            href="https://github.com/ashimgautam01/builders-assignment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
          >
            <Github size={18} /> GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="text-gray-700" size={24} />
          ) : (
            <Menu className="text-gray-700" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="pt-4 pb-2 space-y-2 border-t border-purple-100 mt-3">
          <a
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium py-3 px-4 rounded-lg"
          >
            <Home size={20} /> Home
          </a>
          <a
            href="/wallet"
            onClick={closeMenu}
            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium py-3 px-4 rounded-lg"
          >
            <Wallet size={20} /> Wallet
          </a>
          <a
            href="/about"
            onClick={closeMenu}
            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium py-3 px-4 rounded-lg"
          >
            <Info size={20} /> About
          </a>
          <a
            href="https://github.com/ashimgautam01/builders-assignment"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all font-medium py-3 px-4 rounded-lg"
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;