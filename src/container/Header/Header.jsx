import React, { useState, useEffect, useCallback, useRef } from "react";
import { Play, Heart, Sparkles, Star, Zap, Shield, Award } from "lucide-react";
import "./Header.css";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  // Hero slides data with unique layouts and natural colors
  const slides = [
    {
      id: 1,
      title: "Fresh Fruit",
      subtitle: "Cups & Juices",
      description: "Discover our vibrant selection of fresh-cut fruit cups and natural juices. From sweet watermelon to tropical pineapple, every cup is packed with freshness and flavor. Available daily at our market stall.",
      mainImage: require("../../assets/hero_1.jpg"),
      secondaryImage: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&crop=center",
      badge: "Market Fresh",
      specialItem: "Mixed Fruit Cup",
      price: "₹1.50",
      bgColor: "from-amber-50 via-orange-50 to-yellow-50",
      layout: "split",
      accent: "amber",
      primaryColor: "amber-600",
      secondaryColor: "orange-500",
      textColor: "amber-800"
    },
    {
      id: 2,
      title: "Chocolate Milkshake",
      subtitle: "& Fresh Mango Juice",
      description: "Indulge in our decadent chocolate milkshake topped with whipped cream and Kit Kat pieces, or refresh with our freshly squeezed mango juice. Both made with premium ingredients for the perfect treat.",
      mainImage: require("../../assets/shakes.png"),
      secondaryImage: require("../../assets/mango.JPG"),
      badge: "Kit Kat Topped",
      specialItem: "Chocolate Milkshake",
      price: "₹180",
      bgColor: "from-[#F5E6D3] via-[#F0E6D2] to-[#E6D5C1]",
      layout: "split",
      accent: "amber",
      primaryColor: "amber-600",
      secondaryColor: "orange-500",
      textColor: "gray-800"
    },
    {
      id: 3,
      title: "Fresh Pasta",
      subtitle: "& Gourmet Burgers",
      description: "Experience our delicious menu featuring rich penne pasta with tomato sauce and crispy fried burgers. From fresh cherry tomatoes to golden buns, every dish is made with premium ingredients and served with care.",
      mainImage: require("../../assets/pasta.jpg"),
      secondaryImage: require("../../assets/burger.jpg"),
      thirdImage: require("../../assets/starter.jpg"),
      badge: "Daily Fresh",
      specialItem: "Penne Pasta",
      price: "₹250",
      bgColor: "from-orange-50 via-red-50 to-yellow-50",
      layout: "mosaic",
      accent: "orange",
      primaryColor: "orange-600",
      secondaryColor: "red-500",
      textColor: "orange-800"
    }
  ];

  // Clear all timers
  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  }, []);

  // Start auto-slide timer
  const startAutoSlide = useCallback(() => {
    clearTimers();
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prevSlide => {
        const nextSlide = (prevSlide + 1) % slides.length;
        return nextSlide;
      });
    }, 6000);
  }, [slides.length, clearTimers]);

  // Auto-slide functionality
  useEffect(() => {
    startAutoSlide();
    return clearTimers;
  }, [startAutoSlide, clearTimers]);

  // Smooth slide change function
  const changeSlide = useCallback((newSlideOrFunction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Clear existing timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    // Transition to new slide
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentSlide(prev => {
        const targetSlide = typeof newSlideOrFunction === 'function' 
          ? newSlideOrFunction(prev) 
          : newSlideOrFunction;
        
        // Ensure we don't set the same slide
        return targetSlide !== prev ? targetSlide : prev;
      });
      
      // End transition
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  }, [isTransitioning]);

  // Manual slide navigation
  const goToSlide = useCallback((index) => {
    if (index !== currentSlide && !isTransitioning) {
      changeSlide(index);
      // Restart auto-slide timer
      startAutoSlide();
    }
  }, [currentSlide, isTransitioning, changeSlide, startAutoSlide]);

  const currentSlideData = slides[currentSlide];

  // Layout Components
  const SplitLayout = ({ slide }) => (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-24 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Left Content */}
      <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-left order-2 lg:order-1 hero-left-content hero-text-left">
        <div className={`inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-md text-amber-800 border border-amber-200 transition-all duration-700 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <Heart className="w-4 lg:w-5 h-4 lg:h-5 mr-2 lg:mr-3 text-amber-600" />
          <span className="text-sm lg:text-base font-semibold">PREMIUM QUALITY • SINCE 1996</span>
        </div>

        <div className={`transition-all duration-700 delay-100 ${
          isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
            <span className="block text-gray-800 mb-2">{slide.title}</span>
            <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              {slide.subtitle}
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0">
            {slide.description}
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start transition-all duration-700 delay-200 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {slide.id === 2 ? (
            <>
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm">
                <Play className="w-4 lg:w-5 h-4 lg:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Order Now
              </button>
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-amber-600 text-white font-semibold rounded-2xl hover:bg-amber-700 transition-all duration-300 flex items-center justify-center group shadow-lg">
                <Sparkles className="w-4 lg:w-5 h-4 lg:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Menu
              </button>
            </>
          ) : (
            <>
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                <Play className="w-4 lg:w-5 h-4 lg:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Order Now
              </button>
              <button className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-amber-300 text-amber-800 font-semibold rounded-xl hover:bg-amber-50 transition-all duration-300 flex items-center justify-center">
                <Sparkles className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                View Menu
              </button>
            </>
          )}
        </div>

        <div className={`grid grid-cols-2 gap-4 lg:gap-8 max-w-sm mx-auto lg:mx-0 transition-all duration-700 delay-300 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center border border-white/50">
            <div className="text-xl lg:text-2xl font-bold text-amber-700">27+</div>
            <div className="text-xs lg:text-sm text-gray-600">Years of Excellence</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center border border-white/50">
            <div className="text-xl lg:text-2xl font-bold text-orange-600">100%</div>
            <div className="text-xs lg:text-sm text-gray-600">Natural Ingredients</div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className={`relative order-1 lg:order-2 transition-all duration-700 ${
        isTransitioning ? 'opacity-0 translate-x-8 scale-95' : 'opacity-100 translate-x-0 scale-100'
      }`}>
        {slide.id === 2 ? (
          <div className="relative max-w-md mx-auto lg:max-w-none space-y-6">
            {/* Main Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-2xl lg:rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white/20 backdrop-blur-md rounded-2xl lg:rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                <img src={slide.mainImage} alt="Chocolate Milkshake" className="w-full h-80 sm:h-96 lg:h-[400px] object-contain transition-all duration-700" />
                <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1 lg:py-2">
                  <div className="flex items-center">
                    <div className="w-2 lg:w-3 h-2 lg:h-3 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs lg:text-sm font-semibold text-gray-800">{slide.badge}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg lg:rounded-xl p-3 lg:p-4">
                  <div className="text-xs lg:text-sm opacity-90">{slide.specialItem}</div>
                  <div className="text-xl lg:text-2xl font-bold">{slide.price}</div>
                </div>
              </div>
            </div>

            {/* Second Image Card */}
            {slide.secondaryImage && (
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-xl lg:rounded-2xl transform -rotate-2 scale-105"></div>
                <div className="relative bg-white/20 backdrop-blur-md rounded-xl lg:rounded-2xl overflow-hidden border border-white/30 shadow-xl">
                  <img src={slide.secondaryImage} alt="Additional Milkshake" className="w-full h-48 sm:h-56 lg:h-[280px] object-contain transition-all duration-700" />
                  <div className="absolute top-3 lg:top-4 right-3 lg:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 lg:px-3 py-1">
                    <span className="text-xs font-semibold text-gray-800">Premium</span>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute -bottom-3 lg:-bottom-4 -right-3 lg:-right-4 w-16 lg:w-24 h-16 lg:h-24 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse opacity-60"></div>
          </div>
        ) : (
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-2xl lg:rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white/30 backdrop-blur-md rounded-2xl lg:rounded-3xl overflow-hidden border border-white/40 shadow-2xl">
              <img src={slide.mainImage} alt="Fresh Juices" className="w-full h-80 sm:h-96 lg:h-[500px] object-cover transition-all duration-700" />
              <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-white/90 backdrop-blur-sm rounded-full px-3 lg:px-4 py-1 lg:py-2">
                <div className="flex items-center">
                  <div className="w-2 lg:w-3 h-2 lg:h-3 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs lg:text-sm font-semibold text-gray-800">{slide.badge}</span>
                </div>
              </div>
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg lg:rounded-xl p-3 lg:p-4">
                <div className="text-xs lg:text-sm opacity-90">{slide.specialItem}</div>
                <div className="text-xl lg:text-2xl font-bold">{slide.price}</div>
              </div>
            </div>
            <div className="absolute -bottom-3 lg:-bottom-4 -right-3 lg:-right-4 w-16 lg:w-24 h-16 lg:h-24 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full animate-pulse opacity-60"></div>
          </div>
        )}
      </div>
    </div>
  );

  const CenteredLayout = ({ slide }) => (
    <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`space-y-6 lg:space-y-8 mb-8 lg:mb-12 transition-all duration-700 ${
        isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
      }`}>
        <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-md text-amber-800 border border-amber-200">
          <Shield className="w-4 lg:w-5 h-4 lg:h-5 mr-2 lg:mr-3 text-amber-700" />
          <span className="text-sm lg:text-base font-semibold">DECADENT • CHOCOLATE TREAT</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold">
          <span className="block text-gray-800 mb-2 lg:mb-4">{slide.title}</span>
          <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            {slide.subtitle}
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
          {slide.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
          <button className="px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
            <Zap className="w-5 lg:w-6 h-5 lg:h-6 mr-2 lg:mr-3 group-hover:rotate-12 transition-transform" />
            Order Now
          </button>
          <button className="px-8 lg:px-10 py-4 lg:py-5 border-2 border-amber-300 text-amber-800 font-semibold rounded-xl lg:rounded-2xl hover:bg-amber-50 transition-all duration-300 flex items-center justify-center">
            <Award className="w-5 lg:w-6 h-5 lg:h-6 mr-2 lg:mr-3" />
            View Menu
          </button>
        </div>
      </div>

      {/* Centered Image with Floating Cards */}
      <div className={`relative transition-all duration-700 delay-200 ${
        isTransitioning ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`}>
        <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-2xl lg:rounded-3xl scale-110"></div>
          <div className="relative bg-white/30 backdrop-blur-md rounded-2xl lg:rounded-3xl overflow-hidden border border-white/40 shadow-2xl">
            <img src={slide.mainImage} alt="Healthy Drinks" className="w-full h-96 sm:h-[500px] lg:h-[600px] object-contain transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
          
          {/* Floating Info Cards */}
          <div className="absolute -left-6 lg:-left-12 top-1/4 bg-white/90 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-lg transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-float">
            <div className="text-xl lg:text-2xl font-bold text-amber-700">{slide.price}</div>
            <div className="text-xs lg:text-sm text-gray-600">{slide.specialItem}</div>
          </div>
          
          <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-amber-600 text-white rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-500 animate-float-delayed">
            <div className="text-base lg:text-lg font-bold">Kit Kat</div>
            <div className="text-xs lg:text-sm opacity-90">{slide.badge}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const MosaicLayout = ({ slide }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 items-start pt-8 md:pt-0">
        {/* Left Column - Text Content */}
        <div 
          className={`order-2 lg:order-1 lg:col-span-1 space-y-4 sm:space-y-6 mb-8 md:mb-0 transition-all duration-700 ${
            isTransitioning ? 'opacity-0 -translate-x-8' : 'opacity-100 translate-x-0'
          }`}
          style={{ marginBottom: window.innerWidth < 1024 ? '3rem' : '0' }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 backdrop-blur-md text-rose-700 border border-rose-200 premium-wellness-btn">
            <Star className="w-4 h-4 mr-2 text-rose-600" />
            <span className="text-sm font-semibold">PREMIUM WELLNESS</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="block text-gray-800 mb-2">{slide.title}</span>
            <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              {slide.subtitle}
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            {slide.description}
          </p>

          <div className="space-y-4">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" />
              Start Your Journey
            </button>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/40">
                <div className="text-xl font-bold text-rose-600">500+</div>
                <div className="text-xs text-gray-600">Daily Servings</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/40">
                <div className="text-xl font-bold text-pink-600">15+</div>
                <div className="text-xs text-gray-600">Flavors Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Columns - Image Mosaic */}
        <div 
          className={`order-1 lg:order-2 lg:col-span-2 transition-all duration-700 delay-200 ${
            isTransitioning ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'
          }`}
          style={{ marginTop: window.innerWidth < 1024 ? '2rem' : '0' }}
        >
          <div className="grid grid-cols-2 gap-6 h-96">
            {/* Large Image */}
            <div className="row-span-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-2xl transform rotate-1"></div>
              <div className="relative h-full bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-xl">
                <img src={slide.mainImage} alt="Wellness Drinks" className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg p-3">
                  <div className="text-sm">{slide.specialItem}</div>
                  <div className="text-xl font-bold">{slide.price}</div>
                </div>
              </div>
            </div>

            {/* Top Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-xl transform -rotate-1"></div>
              <div className="relative h-full bg-white/20 backdrop-blur-md rounded-xl overflow-hidden border border-white/30 shadow-lg">
                <img src={slide.secondaryImage} alt="Fresh Ingredients" className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-gray-800">{slide.badge}</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-rose-400/20 rounded-xl transform rotate-2"></div>
              <div className="relative h-full bg-white/20 backdrop-blur-md rounded-xl overflow-hidden border border-white/30 shadow-lg">
                <img src={slide.thirdImage} alt="Healthy Lifestyle" className="w-full h-full object-cover transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="text-sm font-semibold">Nutritious</div>
                    <div className="text-xs opacity-90">& Delicious</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div 
        className={`relative min-h-screen overflow-hidden md:pt-16 pt-8 bg-gradient-to-br ${currentSlideData.bgColor} transition-all duration-1000 ease-in-out`}
      >
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Dynamic Content Based on Layout */}
        <div className="relative z-10 flex items-center min-h-screen px-4 py-6 md:py-12 hero-content-container responsive-hero">
          {currentSlideData.layout === 'split' && <SplitLayout key={`split-${currentSlide}`} slide={currentSlideData} />}
          {currentSlideData.layout === 'centered' && <CenteredLayout key={`centered-${currentSlide}`} slide={currentSlideData} />}
          {currentSlideData.layout === 'mosaic' && <MosaicLayout key={`mosaic-${currentSlide}-${Date.now()}`} slide={currentSlideData} />}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r from-${currentSlideData.primaryColor} to-${currentSlideData.secondaryColor} scale-125 shadow-lg` 
                    : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                } ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r from-${currentSlideData.primaryColor} to-${currentSlideData.secondaryColor} transition-all duration-1000 ease-in-out ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(6deg); }
          50% { transform: translateY(-15px) rotate(6deg); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite 1s;
        }

        /* Pause animations during transitions */
        .transitioning .animate-float,
        .transitioning .animate-float-delayed,
        .transitioning .animate-pulse {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default HeroSection;