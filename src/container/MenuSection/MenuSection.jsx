import React, { useState } from 'react';
import { 
  Coffee, 
  Cookie, 
  Sandwich, 
  Package, 
  Star, 
  MoreHorizontal,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import juice from '../../assets/mango.JPG';
import sandwich from '../../assets/sandwich.jpg';
import pavbhaji from '../../assets/pavbhaji.jpg';
import burger from '../../assets/burger.jpg';
import shakes from '../../assets/shake.jpeg';
import maggie from '../../assets/maggie.jpg';
import { BlurFade } from '../../components/UIComponent/blur-fade.tsx';

export default function MenuSection() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const menuCategories = [
    {
      id: 'maggie',
      name: 'Maggie',
      image: maggie,
      bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      id: 'shakes',
      name: 'Shakes',
      image: shakes,
      bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 'snacks',
      name: 'Snacks',
      image: sandwich,
      bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
      iconColor: 'text-gray-600',
      borderColor: 'border-gray-200'
    },
    {
      id: 'pav-bhaji',
      name: 'Pav Bhaji',
      image: pavbhaji,
      bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
      iconColor: 'text-gray-600',
      borderColor: 'border-gray-200'
    },
    {
      id: 'burger',
      name: 'Burger',
      image: burger,
      bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
      iconColor: 'text-gray-600',
      borderColor: 'border-gray-200'
    },
    {
      id: 'more',
      name: 'More',
      image: juice,
      bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
      iconColor: 'text-gray-600',
      borderColor: 'border-gray-200'
    }
  ];

  return (
    <section className="mx-auto px-4 py-16 lg:py-24 relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
         <div className="text-center mb-12">
              <h2 className="md:text-4xl text-3xl font-semibold text-gray-800 font-serif mb-2 gallery-title">
                  Explore Our Flavors
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="border-t border-gray-400 w-24" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  width="40"
                  viewBox="0 0 443.693 443.693"
                  className="text-orange-500"
                >
                  <path
                    fill="currentColor"
                    d="M326.85 96.927c0-25.505-20.749-46.256-46.254-46.256-22.07 0-40.568 15.543-45.152 36.255h-59.972L135.84 5.621a10 10 0 0 0-13.371-4.607c-4.964 2.42-7.027 8.406-4.607 13.371l35.36 72.542h-25.198a9.999 9.999 0 0 0-8.062 15.918c16.631 22.655 15.013 42.409 5.834 73.151-8.842 29.616-14.489 54.499-.451 82.368 12.495 27.684 38.644 46.531 68.355 50.027.092 38.064.092 76.754.001 115.303h-38.942c-5.522 0-10 4.479-10 10 0 5.523 4.478 10 10 10h97.93c5.522 0 10-4.477 10-10 0-5.521-4.478-10-10-10h-38.987c.091-38.547.091-77.234-.001-115.297 29.721-3.48 55.886-22.326 68.39-50.01 14.054-27.877 8.405-52.767-.439-82.392-3.758-12.579-6.245-23.317-6.737-33.169a47 47 0 0 0 5.683.356c25.503-.001 46.252-20.75 46.252-46.255m-46.253-26.256c14.477 0 26.254 11.778 26.254 26.256s-11.777 26.254-26.254 26.254a27 27 0 0 1-3.469-.234c1.988-6.69 5.336-13.266 10.355-20.104a10 10 0 0 0-8.062-15.917h-23.096c3.942-9.53 13.335-16.255 24.272-16.255m-36.274 36.255.02.001.02-.001h17.498c-11.519 24.881-7.122 48.179-.307 71.62-4.779-4.189-11.354-9.145-22.787-9.145-9.247 0-15.313 3.245-19.825 6.702l-33.72-69.177zm-81.352 0 37.955 77.863c-3.035-.6-4.918-2.272-7.994-5.022-4.894-4.374-11.596-10.366-24.163-10.366-11.529 0-18.117 5.039-22.906 9.25 6.832-23.48 11.259-46.81-.276-71.726zM264.146 249.55a10 10 0 0 0-.208.436c-10.621 23.691-34.257 39-60.216 39-25.967 0-49.605-15.316-60.225-39.02a10 10 0 0 0-.207-.434c-7.546-14.883-7.7-28.742-4.395-44.86 9.346-1.355 14.857-6.258 19.037-9.994 3.931-3.513 5.903-5.277 10.836-5.277 4.932 0 6.904 1.764 10.835 5.277 4.894 4.375 11.596 10.366 24.164 10.366 7.433 0 12.804-2.1 16.973-4.717l.04-.025c2.862-1.802 5.162-3.845 7.153-5.624 3.93-3.513 5.902-5.276 10.833-5.276 4.934 0 6.907 1.764 10.838 5.277 4.166 3.723 9.656 8.604 18.943 9.979 3.311 16.131 3.157 30-4.401 44.892"
                  />
                </svg>

                <div className="border-t border-gray-400 w-24" />
              </div>
            </div>
        <div className="text-center mb-16">
          <p className="text-gray-600 leading-relaxed mb-4 ">
            A sneak peek of our most popular categories.
          </p>
        </div>

        {/* Menu Categories Grid */}
        <div className="grid grid-cols-6 gap-4 sm:gap-6 md:gap-8 mb-12  mx-auto">
          {menuCategories.map((category, index) => (
            <BlurFade inView delay={0.25 * index} offset={24}
              key={category.id}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative cursor-pointer transition-all duration-500 ease-out"
            >
              {/* Card */}
              <div className={`
                ${hoveredCategory === category.id 
                  ? 'bg-gradient-to-br from-red-200 via-orange-200 via-yellow-200 via-green-200 via-blue-200 via-indigo-200 to-purple-200 animate-pulse' 
                  : category.bgColor
                } 
                ${category.borderColor}
                border-2 rounded-2xl text-center transition-all duration-500
                shadow-sm hover:shadow-lg group-hover:border-opacity-80
                aspect-square flex flex-col items-center justify-center
                relative overflow-hidden w-full h-32 sm:h-40 md:h-56 lg:h-64
                group-hover:scale-105 group-hover:-translate-y-2
              `}>
                
                {/* Rainbow Border Effect on Hover */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-all duration-500
                  ${hoveredCategory === category.id 
                    ? 'bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 p-0.5' 
                    : 'p-0'
                  }
                `}>
                  <div className={`
                    w-full h-full rounded-sm
                    ${hoveredCategory === category.id 
                      ? 'bg-white' 
                      : 'bg-transparent'
                    }
                    flex items-center justify-center 
                  `}>
                    {/* Image Container */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className={`
                          w-full h-full object-cover transition-all duration-500
                          group-hover:scale-110 group-hover:rotate-1
                          ${hoveredCategory === category.id 
                            ? 'filter brightness-110 contrast-110' 
                            : ''
                          }
                        `}
                      />
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Rainbow Glow Effect */}
                {hoveredCategory === category.id && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400/20 via-orange-400/20 via-yellow-400/20 via-green-400/20 via-blue-400/20 via-indigo-400/20 to-purple-400/20 animate-pulse"></div>
                )}
              </div>

              {/* Category Name */}
              <div className="mt-3 sm:mt-4 text-center">
                <h3 className={`
                  font-semibold text-sm sm:text-base md:text-lg transition-all duration-500
                  ${hoveredCategory === category.id 
                    ? 'text-transparent bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text font-bold' 
                    : 'text-gray-700'
                  }
                `}>
                  {category.name}
                </h3>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* View Full Menu Button */}
        
        <div className="flex justify-center items-center h-full mt-8">
          <a
            href="/menu"
            // onClick={() => setToggleMenu(false)}
            className="custom-btn btn-5"
          >
            {/* <Play className="w-4 h-4 mr-2" /> */}
            <span>Explore Menu</span>
          </a>
        </div>

        {/* Custom CSS for rainbow animation */}
        <style jsx>{`
          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .rainbow-animate {
            background-size: 200% 200%;
            animation: rainbow 2s ease infinite;
          }
        `}</style>
      </div>
    </section>
  );
}