import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#e4dcc8] text-gray-700 font-sans text-center">
    {/* Decorative top border */}
    {/* <div className="h-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500" /> */}
    <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand - First Section */}
        <div className='text-center order-1 md:order-1'> 
          <h3 className="text-2xl font-bold mb-3 ">
            <span className="bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Rainbow
            </span>
            <span className="text-gray-700 ml-1">Juice</span>
          </h3>
          {/* <div className="w-14 h-1 bg-gradient-to-r from-red-500 to-blue-500 mb-4 justify-center align-center"  /> */}
          <p className="text-gray-600 text-base leading-relaxed text-center">
            Your daily dose of freshness and flavor, right here in Dombivli.<br />
            We bring you the finest natural juices and healthy snacks since 1996.
          </p>
        </div>

        {/* Quick Links */}
        <div className="order-2 md:order-2\">
          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="block text-gray-700 font-medium hover:text-orange-600 transition-all duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#menu" className="block text-gray-700 font-medium hover:text-orange-600 transition-all duration-200">
                Full Menu
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-gray-700 font-medium hover:text-orange-600 transition-all duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="order-3 md:order-3">
          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800 mr-8">Contact</h4>
          <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0 te"  />
                <span className="text-gray-600 text-left ">
                  Shop No. 5, Sunshine Plaza,<br />
                  Near Dombivli Station, Dombivli (East),<br />
                  Maharashtra, 421201
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>
                  <span className="font-semibold text-gray-700">Hours:</span> 9:00 AM - 11:00 PM
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>
                  <span className="font-semibold text-gray-700">WhatsApp:</span> +91 12345 67890
                </span>
              </div>
            </div>
        </div>

        {/* Social */}
        <div className="">
          <h4 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-800 text-center">Follow Us</h4>
          <div className="flex space-x-4 mb-4 justify-center">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg hover:scale-110 transition-all duration-200 group">
              <Instagram className="text-gray-600 group-hover:text-orange-600" size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg hover:scale-110 transition-all duration-200 group">
              <Facebook className="text-gray-600 group-hover:text-orange-600" size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-lg hover:scale-110 transition-all duration-200 group">
              <Twitter className="text-gray-600 group-hover:text-orange-600" size={20} />
            </a>
          </div>
          <p className="text-gray-600 text-xs text-center">
            Stay connected for updates, offers, and healthy living tips.
          </p>
        </div>
        </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t-2 border-black pt-6 text-center text-sm text-black">
        <p>&copy; 2024 Rainbow Juice & Snacks Center. All Rights Reserved.</p>
        <p className="text-gray-500 text-xs mt-2">Made with <span className="text-pink-500">❤️</span> for healthy living</p>
      </div>
    </div>
  </footer>
);

export default Footer;
