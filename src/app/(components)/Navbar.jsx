import React from "react";
import { Coins, Wallet, Home, Info, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent shadow-md border-b border-purple-100 px-6 py-3 flex items-center justify-between">
 
      <div className="flex items-center gap-2">
        <Coins className="text-purple-600" size={28} />
        <span className="font-bold text-xl text-purple-700 tracking-tight">Sonna Wallet</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium">
          <Home size={18} /> Home
        </a>
        <a href="/wallet" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium">
          <Wallet size={18} /> Wallet
        </a>
        <a href="/about" className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium">
          <Info size={18} /> About
        </a>
        <a
          href="https://github.com/ashimgautam01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;