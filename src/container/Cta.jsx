import { Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import cta_bg from "../assets/hero_1.jpg"

const Cta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={cta_bg}
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Fallback gradient if image doesn't load */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-100 to-red-100"></div> */}
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      {/* Glass morphism content container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="backdrop-blur-md bg-white/60 border border-white/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl">
          {/* Star decoration with animation */}
          <div className={`flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-pulse"></div>
            <Star className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-orange-600 animate-bounce" />
            <div className="w-8 sm:w-10 md:w-12 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full animate-pulse"></div>
          </div>
          
          {/* Main heading with staggered animation */}
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block animate-fade-in-up">"A Healthy Way</span>
            <span className="inline-block animate-fade-in-up delay-200"> • Fresh Jucie's </span>
            <span className="inline-block animate-fade-in-up delay-400"> • 100% Natural & Pure"</span>
          </h3>
          
          {/* Description with animation */}
          <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block animate-fade-in-up delay-1000">Rainbow Juice & Snacks Center</span>
            <span className="inline-block animate-fade-in-up delay-1100"> - Your Health Partner</span>
            <span className="inline-block animate-fade-in-up delay-1200"> • Quality Guaranteed</span>
            <span className="inline-block animate-fade-in-up delay-1300"> • Made with Love Daily</span>
          </p>
          
          {/* Feature indicators with staggered animation */}
          
          <div className="flex justify-center items-center h-full mt-6">
              <a
                href="/contact"
                // onClick={() => setToggleMenu(false)}
                className="custom-btn btn-5"
              >
                {/* <Play className="w-4 h-4 mr-2" /> */}
                <span>Contact Us</span>
              </a>
            </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }

        .animate-fade-in-up.delay-1000 {
          animation-delay: 1s;
        }

        .animate-fade-in-up.delay-1100 {
          animation-delay: 1.1s;
        }

        .animate-fade-in-up.delay-1200 {
          animation-delay: 1.2s;
        }

        .animate-fade-in-up.delay-1300 {
          animation-delay: 1.3s;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
      `}</style>
    </div>
  )
}

export default Cta