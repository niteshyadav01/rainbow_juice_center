import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sparkles,
  Star,
  Play,
  ChevronDown,
  Heart,
  ArrowRight,
} from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/rainbow_logo (1).png";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = ["Home", "About", "Menu", "Gallery", "Contact"];
  // const menuCategories = ['Starters', 'Main Course', 'Desserts', 'Beverages'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Infinity Scrolling Header - Rainbow Colors */}
      <div
        className={`bg-amber-50 py-2.5 overflow-hidden relative shadow-sm transition-all duration-300 ${isScrolled
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
          }`}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="inline-flex items-center text-sm font-medium mx-8 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            <Heart className="w-3 h-3 mr-2 text-red-500" />
            A HEALTHY WAY • Fresh Since 1996 • 100% Natural & Pure
            <Sparkles className="w-3 h-3 mx-2 text-orange-500" />
            Rainbow Juice & Snacks Center - Your Health Partner
            <Star className="w-3 h-3 mx-2 text-yellow-500" />
            Quality Guaranteed • Made with Love Daily
            <Heart className="w-3 h-3 ml-2 text-green-500" />
          </span>
          <span className="inline-flex items-center text-sm font-medium mx-8 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            <Heart className="w-3 h-3 mr-2 text-blue-500" />
            A HEALTHY WAY • Fresh Since 1996 • 100% Natural & Pure
            <Sparkles className="w-3 h-3 mx-2 text-indigo-500" />
            Rainbow Juice & Snacks Center - Your Health Partner
            <Star className="w-3 h-3 mx-2 text-purple-500" />
            Quality Guaranteed • Made with Love Daily
            <Heart className="w-3 h-3 ml-2 text-red-500" />
          </span>
          <span className="inline-flex items-center text-sm font-medium mx-8 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            <Heart className="w-3 h-3 mr-2 text-green-500" />
            A HEALTHY WAY • Fresh Since 1996 • 100% Natural & Pure
            <Sparkles className="w-3 h-3 mx-2 text-blue-500" />
            Rainbow Juice & Snacks Center - Your Health Partner
            <Star className="w-3 h-3 mx-2 text-indigo-500" />
            Quality Guaranteed • Made with Love Daily
            <Heart className="w-3 h-3 ml-2 text-purple-500" />
          </span>
        </div>
      </div>

      {/* Main Navbar - Fixed positioning with smooth transition */}
      <div
        className={`${isScrolled ? "top-0 h-20" : "top-10 h-28"
          } transition-all duration-500`}
      ></div>

      <nav
        className={`fixed  w-full z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/95 top-0 backdrop-blur-lg shadow-xl py-2"
            : "bg-white/90 top-10 backdrop-blur-md shadow-lg py-4"
          }`}
      >
        {/* Rainbow accent border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section - Optimized for large logos */}
            <div className="flex items-center">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <img
                    src={logo}
                    alt="Rainbow Restaurant"
                    className={`object-cover rounded-full border-4 border-white shadow-lg transition-all duration-500 ${isScrolled ? "h-12 w-12" : "h-20 w-20 md:h-24 md:w-24"
                      }`}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item} className="relative">
                  {item === "" ? (
                    <div
                      className="relative"
                    // onMouseEnter={() => setDropdownOpen(true)}
                    // onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <button className="flex items-center px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-orange-600 group">
                        {item}
                        {/* <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" /> */}
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                      </button>
                    </div>
                  ) : (
                    <a
                      href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 group hover:text-orange-600"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="/order"
                className="bg-gradient-to-r custom-btn btn-5 from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                {/* <Play className="w-4 h-4" /> */}
                <a href="/contact">Visit Now</a>
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
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setToggleMenu(false)}
            ></div>
            <div className="fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl transform transition-transform duration-300 ease-out flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
                <button
                  onClick={() => setToggleMenu(false)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 p-6 space-y-2 overflow-y-auto">
                {navItems.map((item, index) => (
                  <div key={item}>
                    <a
                      href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                      onClick={() => setToggleMenu(false)}
                      className="flex items-center justify-between text-gray-700 hover:text-orange-600 hover:bg-orange-50 py-4 px-4 rounded-xl transition-all duration-200 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-lg font-medium">{item}</span>
                      {/* <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" /> */}
                    </a>

                    {/* Mobile submenu for Menu item */}
                    {/* {item === 'Menu' && (
                      <div className="ml-4 space-y-1 mt-2">
                        {menuCategories.map((category) => (
                          <a
                            key={category}
                            href={`/menu/${category.toLowerCase()}`}
                            onClick={() => setToggleMenu(false)}
                            className="block text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                          >
                            {category}
                          </a>
                        ))}
                      </div>
                    )} */}
                  </div>
                ))}

                {/* Mobile CTA */}
                 <div className="flex justify-center items-center mt-8 pt-6 mt-6">
                  <a
                    href="/menu"
                    // onClick={() => setToggleMenu(false)}
                    className="custom-btn btn-5"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    <span>Order Now</span>
                  </a>
                </div>
               
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <p className="text-center text-gray-600 text-sm">
                  📍 Visit us today for an amazing experience!
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>

      <style>{`
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
