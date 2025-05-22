"use client";
import React from "react";
import {
  Coins,
  ArrowRight,
  Wallet,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 overflow-hidden ">
      {/* bg element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-caret-blink"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-in"></div>
      </div>

      <section className="relative z-10 min-h-screen flex flex-col  ">
        {/* Hero  */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left */}
              <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 w-fit mx-auto lg:mx-0">
                  <Sparkles className="animate-pulse" size={16} />
                  Next-Gen Solana Wallet
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                      Sonna Wallet
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Experience the future of Solana wallet management. Connect,
                    explore, and transact with unparalleled security and
                    elegance.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Wallet className="text-purple-600" size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">
                        Easy Connection
                      </h3>
                      <p className="text-sm text-gray-600">
                        One-click wallet setup
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="text-green-600" size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">
                        Real-time Data
                      </h3>
                      <p className="text-sm text-gray-600">
                        Live balance & transactions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Shield className="text-blue-600" size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">Secure</h3>
                      <p className="text-sm text-gray-600">
                        Bank-grade security
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Globe className="text-pink-600" size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-800">
                        Cross-platform
                      </h3>
                      <p className="text-sm text-gray-600">Works everywhere</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a
                        href="/wallet"
                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started
                        <ArrowRight
                          className="group-hover:translate-x-1 transition-transform"
                          size={20}
                        />
                      </a>
                    </div>
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg animate-float z-10">
                      <Coins className="text-white" size={24} />
                    </div>

                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg animate-float-delay z-10">
                      <Sparkles className="text-white" size={16} />
                    </div>

                    <div className="absolute top-1/2 -left-12 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg flex items-center justify-center shadow-lg animate-float-slow z-10">
                      <Shield className="text-white" size={12} />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-3xl blur-3xl opacity-20 animate-pulse-slow scale-110"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
