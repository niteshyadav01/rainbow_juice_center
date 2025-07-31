

import React, { useState } from 'react';
// import jackpot_galleria from '../../../assets/jackpot_galleria.png';
import { MapPin, Phone, Map } from 'lucide-react';
import { motion } from 'framer-motion';
// import men from "../../../assets/gallery/men/mens.png"
import chandivali_branch from '../../assets/rainbow_shop_img.jpg';
import powai_branch from '../../assets/shop_img2.jpg';
const storeDetails = {
  colaba: {
    name: "Chandivali",
    area: "South Mumbai",
    vibe: "Refreshing flavors & friendly vibes",
    description: "A vibrant spot serving freshly made juices, snacks, and quick bites perfect for a healthful refreshment or tasty treat any time of day.",
    address: "Cayenne, Chandivali Farm Rd, Nahar Amrit Shakti, Chandivali, Powai, Mumbai, Maharashtra 400072",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241277.33603778467!2d72.8971544!3d19.1094819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80a92c16e01%3A0xc3e4b1d4389af003!2sRainbow%20Juice%20Center!5e0!3m2!1sen!2sin!4v1753958933802!5m2!1sen!2sin",
    image: chandivali_branch,
  },
  galleria: {
    name: "Powai",
    area: "Central Mumbai",
    vibe: "Healthy treats, happy moments",
    description: "From chilled juices to crispy snacks, we blend freshness with flavor in every serving at Rainbow Juice & Snack Centre.",
    address: "Shop No. 24, Galleria Shopping Mall, Hiranandani Gardens, Panchkutir Ganesh Nagar, Powai, Mumbai, Maharashtra 400076",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241032.40192127132!2d72.55543599453125!3d19.276656399999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c70011429d41%3A0x9b25d71bf6d7c242!2sRainbow%20Juice%20and%20Snacks!5e0!3m2!1sen!2sin!4v1753959030308!5m2!1sen!2sin",
    image: powai_branch,
  }
};

const Stores = () => {
  const [selected, setSelected] = useState("colaba");
  const store = storeDetails[selected];
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Animation parameters for TEXT
  const textMotion = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  // Animation parameters for cards - fade in from bottom
  const cardMotion = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  // Animation for floating up
  const floatMotion = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };
  return (
    <section id="contact" className="md:py-10 py-4 bg-gradient-to-b from-white via-amber-50 to-white">
      <motion.div

        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerMotion}
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}


          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6"
            variants={textMotion}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-gray-800 font-serif mb-2 gallery-title">
                Visit Our Locations
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="border-t border-gray-400 w-24" />
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 443.693 443.693" className="text-orange-500">
                  <path fill="currentColor" d="M326.85 96.927c0-25.505-20.749-46.256-46.254-46.256-22.07 0-40.568 15.543-45.152 36.255h-59.972L135.84 5.621a10 10 0 0 0-13.371-4.607c-4.964 2.42-7.027 8.406-4.607 13.371l35.36 72.542h-25.198a9.999 9.999 0 0 0-8.062 15.918c16.631 22.655 15.013 42.409 5.834 73.151-8.842 29.616-14.489 54.499-.451 82.368 12.495 27.684 38.644 46.531 68.355 50.027.092 38.064.092 76.754.001 115.303h-38.942c-5.522 0-10 4.479-10 10 0 5.523 4.478 10 10 10h97.93c5.522 0 10-4.477 10-10 0-5.521-4.478-10-10-10h-38.987c.091-38.547.091-77.234-.001-115.297 29.721-3.48 55.886-22.326 68.39-50.01 14.054-27.877 8.405-52.767-.439-82.392-3.758-12.579-6.245-23.317-6.737-33.169a47 47 0 0 0 5.683.356c25.503-.001 46.252-20.75 46.252-46.255m-46.253-26.256c14.477 0 26.254 11.778 26.254 26.256s-11.777 26.254-26.254 26.254a27 27 0 0 1-3.469-.234c1.988-6.69 5.336-13.266 10.355-20.104a10 10 0 0 0-8.062-15.917h-23.096c3.942-9.53 13.335-16.255 24.272-16.255m-36.274 36.255.02.001.02-.001h17.498c-11.519 24.881-7.122 48.179-.307 71.62-4.779-4.189-11.354-9.145-22.787-9.145-9.247 0-15.313 3.245-19.825 6.702l-33.72-69.177zm-81.352 0 37.955 77.863c-3.035-.6-4.918-2.272-7.994-5.022-4.894-4.374-11.596-10.366-24.163-10.366-11.529 0-18.117 5.039-22.906 9.25 6.832-23.48 11.259-46.81-.276-71.726zM264.146 249.55a10 10 0 0 0-.208.436c-10.621 23.691-34.257 39-60.216 39-25.967 0-49.605-15.316-60.225-39.02a10 10 0 0 0-.207-.434c-7.546-14.883-7.7-28.742-4.395-44.86 9.346-1.355 14.857-6.258 19.037-9.994 3.931-3.513 5.903-5.277 10.836-5.277 4.932 0 6.904 1.764 10.835 5.277 4.894 4.375 11.596 10.366 24.164 10.366 7.433 0 12.804-2.1 16.973-4.717l.04-.025c2.862-1.802 5.162-3.845 7.153-5.624 3.93-3.513 5.902-5.276 10.833-5.276 4.934 0 6.907 1.764 10.838 5.277 4.166 3.723 9.656 8.604 18.943 9.979 3.311 16.131 3.157 30-4.401 44.892" />
                </svg>
                <div className="border-t border-gray-400 w-24" />
              </div>
            </div> </motion.h2>

          {/* Subtext */}

        </div>
      </motion.div>


      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-6 my-12">
        {Object.keys(storeDetails).map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-6 py-2 rounded-full text-lg  font-medium transition-all duration-300 transform hover:scale-105 shadow-sm ${selected === key
              ? "bg-yellow-600 text-white shadow-md"
              : "bg-yellow-100 text-amber-800 hover:bg-yellow-200"
              }`}
          >
            {storeDetails[key].name}
          </button>

        ))}
      </div>

      {/* Store Details */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Card – Image + Info */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-100">
          <img src={store.image} alt={store.name} className="h-64 w-full object-cover object-center" />
          <div className="p-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">{store.name}</h4>
            <p className="text-yellow-700 font-medium italic mb-3">{store.vibe}</p>
            <p className="text-gray-600 mb-4">{store.description}</p>

            <div className="flex items-center space-x-3 mb-2">
              <MapPin className="w-5 h-5 text-yellow-600" />
              <span className="text-gray-700">{store.address}</span>
            </div>

          </div>
        </div>

        {/* Right Card – Map */}
        <div className="bg-white rounded-2xl shadow-xl border border-yellow-100 overflow-hidden">

          <iframe
            src={store.mapEmbed}
            className="w-full h-[460px] border-0"
            allowFullScreen=""
            loading="lazy"
            title={`${store.name} Location`}
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-6 bg-yellow-50 flex items-center gap-2 font-medium text-yellow-800">
            <Map className="w-5 h-5" /> Location on Google Maps
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stores;