import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Star, Play, Heart, ArrowRight } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Menu', 'Gallery', 'Contact'];

  return (
    <>
      {/* Infinity Scrolling Header - Rainbow Colors */}
      <div className={`bg-black text-white py-2.5 overflow-hidden relative shadow-sm transition-all duration-300 ${
        isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="inline-flex items-center text-sm font-medium mx-8">
            <Heart className="w-3 h-3 mr-2 text-white" />
            A HEALTHY WAY • Fresh Since 1996 • 100% Natural & Pure
            <Sparkles className="w-3 h-3 mx-2 text-white" />
            Rainbow Juice & Snacks Center - Your Health Partner
            <Star className="w-3 h-3 mx-2 text-white" />
            Quality Guaranteed • Made with Love Daily
            <Heart className="w-3 h-3 ml-2 text-white" />
          </span>
          <span className="inline-flex items-center text-sm font-medium mx-8">
            <Heart className="w-3 h-3 mr-2 text-white" />
            A HEALTHY WAY • Fresh Since 1996 • 100% Natural & Pure
            <Sparkles className="w-3 h-3 mx-2 text-white" />
            Rainbow Juice & Snacks Center - Your Health Partner
            <Star className="w-3 h-3 mx-2 text-white" />
            Quality Guaranteed • Made with Love Daily
            <Heart className="w-3 h-3 ml-2 text-white" />
          </span>
        </div>
      </div>

      {/* Main Navbar - Fixed positioning with smooth transition */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-0 bg-[#FEE4A4] shadow-xl border-b border-gray-100' 
          : 'top-10 bg-[#FEE4A4]/95 backdrop-blur-md shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section - Updated to match your design */}
            <div className="flex items-center group">
              <a href="/" className="flex items-center space-x-3">
                <div className="relative">
                  {/* Rainbow border circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 p-1 transition-all duration-300 group-hover:scale-105 shadow-md">
                    {/* White background circle */}
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      {/* Logo text */}
                      <div className="text-center">
                        <div className="text-[6px] font-bold text-gray-600 leading-tight">A HEALTHY</div>
                        <div className="text-[6px] font-bold text-gray-600 leading-tight">WAY</div>
                        <div className="text-xs font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent leading-tight">
                          Rainbow
                        </div>
                        <div className="text-[6px] text-gray-500 leading-tight">SINCE 1996</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                    Rainbow
                  </span>
                  <span className="text-sm text-gray-600">
                    Juice & Snacks Center
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 group hover:text-orange-600"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="/menu"
                className="custom-btn btn-5"
              >
                <Play className="w-4 h-4 mr-2" />
                <span>Explore Menu</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {toggleMenu && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setToggleMenu(false)}></div>
            <div className="fixed top-0 left-0 w-full h-screen bg-[#FEE4A4] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col">
              
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#FEE4A4] flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-xs">R</span>
                    </div>
                  </div>
                  <span className="text-gray-800 font-semibold">Rainbow</span>
                </div>
                <button
                  onClick={() => setToggleMenu(false)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 p-6 space-y-2 flex flex-col" style={{backgroundColor: '#FEE4A4'}}>
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                    onClick={() => setToggleMenu(false)}
                    className="flex items-center justify-between text-gray-700 hover:text-orange-600 hover:bg-orange-50 py-3 px-4 rounded-lg transition-all duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-base font-medium">{item}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 mt-6 border-t border-gray-200">
                  <a
                    href="/menu"
                    onClick={() => setToggleMenu(false)}
                    className="custom-btn btn-5"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    <span>Explore Menu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;