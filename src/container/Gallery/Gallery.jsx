import React, { useState, useEffect } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import { BlurFade } from "../../components/UIComponent/blur-fade.tsx";

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="min-h-content relative overflow-hidden">
      {/* Beautiful Orange Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-amber-300/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-orange-400/20 rounded-full blur-lg"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgba(251,146,60,0.3)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-center min-h-content py-16 px-8 xl:px-24">
        <div className="flex-1 flex justify-center items-center flex-col min-w-full xl:pr-12 xl:min-w-0 xl:max-w-lg">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}>
          <h2 className={`text-4xl font-semibold text-gray-800 font-serif mb-2 gallery-title transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}>
           Follow us on Instagram
          </h2>
          <div className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}>
            <div className="border-t border-gray-400 w-24" />
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 443.693 443.693" className="text-orange-500">
              <path fill="currentColor" d="M326.85 96.927c0-25.505-20.749-46.256-46.254-46.256-22.07 0-40.568 15.543-45.152 36.255h-59.972L135.84 5.621a10 10 0 0 0-13.371-4.607c-4.964 2.42-7.027 8.406-4.607 13.371l35.36 72.542h-25.198a9.999 9.999 0 0 0-8.062 15.918c16.631 22.655 15.013 42.409 5.834 73.151-8.842 29.616-14.489 54.499-.451 82.368 12.495 27.684 38.644 46.531 68.355 50.027.092 38.064.092 76.754.001 115.303h-38.942c-5.522 0-10 4.479-10 10 0 5.523 4.478 10 10 10h97.93c5.522 0 10-4.477 10-10 0-5.521-4.478-10-10-10h-38.987c.091-38.547.091-77.234-.001-115.297 29.721-3.48 55.886-22.326 68.39-50.01 14.054-27.877 8.405-52.767-.439-82.392-3.758-12.579-6.245-23.317-6.737-33.169a47 47 0 0 0 5.683.356c25.503-.001 46.252-20.75 46.252-46.255m-46.253-26.256c14.477 0 26.254 11.778 26.254 26.256s-11.777 26.254-26.254 26.254a27 27 0 0 1-3.469-.234c1.988-6.69 5.336-13.266 10.355-20.104a10 10 0 0 0-8.062-15.917h-23.096c3.942-9.53 13.335-16.255 24.272-16.255m-36.274 36.255.02.001.02-.001h17.498c-11.519 24.881-7.122 48.179-.307 71.62-4.779-4.189-11.354-9.145-22.787-9.145-9.247 0-15.313 3.245-19.825 6.702l-33.72-69.177zm-81.352 0 37.955 77.863c-3.035-.6-4.918-2.272-7.994-5.022-4.894-4.374-11.596-10.366-24.163-10.366-11.529 0-18.117 5.039-22.906 9.25 6.832-23.48 11.259-46.81-.276-71.726zM264.146 249.55a10 10 0 0 0-.208.436c-10.621 23.691-34.257 39-60.216 39-25.967 0-49.605-15.316-60.225-39.02a10 10 0 0 0-.207-.434c-7.546-14.883-7.7-28.742-4.395-44.86 9.346-1.355 14.857-6.258 19.037-9.994 3.931-3.513 5.903-5.277 10.836-5.277 4.932 0 6.904 1.764 10.835 5.277 4.894 4.375 11.596 10.366 24.164 10.366 7.433 0 12.804-2.1 16.973-4.717l.04-.025c2.862-1.802 5.162-3.845 7.153-5.624 3.93-3.513 5.902-5.276 10.833-5.276 4.934 0 6.907 1.764 10.838 5.277 4.166 3.723 9.656 8.604 18.943 9.979 3.311 16.131 3.157 30-4.401 44.892" />
            </svg>
            <div className="border-t border-gray-400 w-24" />
          </div>
        </div>
          <p className={`text-lg text-gray-700 text-center mb-8 leading-relaxed max-w-md transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}>
            Get a taste of freshness and colors! Check out our latest juices,
            snacks, and behind-the-scenes fun at Rainbow Juice & Snacks Center.
          </p>
          <a
            href="https://www.instagram.com/rainbow_juice_centre/"
            target="_blank"
            rel="noopener noreferrer"
            className= "custom-btn btn-5"
          >
            <span className="relative z-10 flex items-center gap-2">
              {/* <BsInstagram className="text-xl" /> */}
              Visit Instagram
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <div className={`flex-1 flex flex-row max-w-full xl:max-w-2xl relative mt-12 xl:mt-0 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}>
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-orange-100/50 via-transparent to-orange-100/50 rounded-2xl"></div>
    
          <div
            className="flex flex-row w-max overflow-x-auto scrollbar-hide scroll-smooth px-4"
            ref={scrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              images.insta_01,
              images.insta_02,
              images.insta_03,
              images.insta_04,
              images.insta_05,
              images.insta_06,
              images.insta_07,
              images.insta_08,
              images.insta_09,
              images.insta_10,
            ].map((image, index) => (
              <a 
                href="https://www.instagram.com/rainbow_juice_centre/" 
                target="_blank" 
                rel="noopener noreferrer" 
                key={`gallery_image-${index + 1}`}
                className={`flex-shrink-0 mr-6 last:mr-0 transition-all duration-700 delay-${1200 + (index * 100)} ${isVisible ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-95'}`}
              > 
                <BlurFade inView delay={0.25 + (index * 0.1)} offset={24} className="group relative w-64 h-80 xl:w-72 xl:h-96 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Instagram Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                      <BsInstagram className="text-3xl text-orange-600" />
                    </div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-full"></div>
                </BlurFade>
              </a>
            ))}
          </div>
     
          <button
            onClick={() => scroll("left")}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 group bg-white/95 backdrop-blur-sm text-orange-600 p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-orange-200/50 delay-2200 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}
          >
            <BsArrowLeftShort className="text-3xl" />
          </button>

          {/* Navigation Arrows - Right */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 group bg-white/95 backdrop-blur-sm text-orange-600 p-4 rounded-full shadow-xl hover:shadow-2xl hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-110 border border-orange-200/50 delay-2300 ${isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}
          >
            <BsArrowRightShort className="text-3xl" />
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Gallery;