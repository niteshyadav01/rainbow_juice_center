import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import logo from "../../assets/rainbow_logo (1).png";

const Footer = () => (
  <footer className="bg-[#f2f2ed] text-gray-700 font-sans text-center">
    {/* Decorative top border */}
    {/* <div className="h-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500" /> */}
    <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
      {/* <div className="flex flex-col md:flex-row items-start justify-center gap-10"> */}
        {/* Brand - First Section */}
        <div className="flex flex-col  items-center justify-center  text-center order-0 md:order-0">
          <img
            src={logo}
            alt="Rainbow Restaurant"
            className="object-cover rounded-full border-4 border-white shadow-lg transition-all duration-500 h-24 w-24 md:h-30 md:w-30"
          />

          {/* <div className="w-14 h-1 bg-gradient-to-r from-red-500 to-blue-500 mb-4 justify-center align-center"  /> */}
          <p className="text-gray-600 text-base mt-2 leading-relaxed text-center">
            Rainbow Juice & Snacks Center - Your Health Partner
          </p>
        </div>

        {/* Quick Links */}
        <div className="order-1 md:order-1">
          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="relative block text-gray-700 font-medium hover:text-orange-600 transition-all duration-300 group"
              >
                About 
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="relative block text-gray-700 font-medium hover:text-orange-600 transition-all duration-300 group"
              >
                 Menu
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="relative block text-gray-700 font-medium hover:text-orange-600 transition-all duration-300 group"
              >
                Gallery
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="relative block text-gray-700 font-medium hover:text-orange-600 transition-all duration-300 group"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="order-2 md:order-2">
          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800 text-center">
            Follow Us
          </h4>
          <div className="flex space-x-4 mb-4 justify-center">
            <a
              href="https://www.instagram.com/rainbow_juice_centre/"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg hover:scale-110 transition-all duration-200 group"
            >
              <Instagram
                className="text-gray-600 group-hover:text-orange-600"
                size={20}
              />
            </a>
            <a
              href="https://www.instagram.com/rainbow_juice_centre/"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg hover:scale-110 transition-all duration-200 group"
            >
              <Facebook
                className="text-gray-600 group-hover:text-orange-600"
                size={20}
              />
            </a>
            <a
              href="https://www.instagram.com/rainbow_juice_centre/"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg hover:scale-110 transition-all duration-200 group"
            >
              <Twitter
                className="text-gray-600 group-hover:text-orange-600"
                size={20}
              />
            </a>
          </div>
          <p className="text-gray-600 text-xs text-center">
            Stay connected for updates, offers, and healthy living tips.
          </p>
        </div>

        <div className="order-3 md:order-3">
          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800 mr-8">
            Our Locations
          </h4>
          <div className="space-y-4 text-sm">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-left  ">
                  <div className="font-semibold text-gray-700 mb-1">Chandivali Branch</div>
                  <a 
                    href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241277.33603778467!2d72.8971544!3d19.1094819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80a92c16e01%3A0xc3e4b1d4389af003!2sRainbow%20Juice%20Center!5e0!3m2!1sen!2sin!4v1753958933802!5m2!1sen!2sin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block text-gray-600 hover:text-orange-600 transition-all duration-300 group"
                  >
                    Cayenne, Chandivali Farm Rd, Nahar Amrit Shakti, Chandivali, Powai, Mumbai, Maharashtra 400072
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-left">
                  <div className="font-semibold text-gray-700 mb-1">Powai Branch</div>
                  <a 
                    href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241032.40192127132!2d72.55543599453125!3d19.276656399999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c70011429d41%3A0x9b25d71bf6d7c242!2sRainbow%20Juice%20and%20Snacks!5e0!3m2!1sen!2sin!4v1753959030308!5m2!1sen!2sin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block text-gray-600 hover:text-orange-600 transition-all duration-300 group"
                  >
                    Shop No. 24, Galleria Shopping Mall, Hiranandani Gardens, Panchkutir Ganesh Nagar, Powai, Mumbai, Maharashtra 400076
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

              {/* Footer Bottom */}
        <div className="mt-12 border-t-2 border-black pt-6 text-center text-sm text-black">
          <p>&copy; {new Date().getFullYear()} Rainbow Juice & Snacks Center. All Rights Reserved.</p>
          <p className="text-gray-500 text-xs mt-2">
          Design and Developed by <a href="https://pixelperfecttech.in" target="_blank" rel="noopener noreferrer" className="text-blue-500">Pixel Perfect Tech</a>
          </p>
        </div>
    </div>
  </footer>
);

export default Footer;
