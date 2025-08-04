import AboutSection from '../container/About/about';
import React from 'react';
import { motion } from 'framer-motion';
import Bgimg from '../assets/about_banner.jpg';



const About = () => {
  return (
     <div className="min-h-screen  pt-2 md:pt-0 relative bg-white">
            {/* Header with background image and overlay */}
            <section className="  relative h-[30vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden mb-8 sm:mb-12 pt-14 md:pt-0 ">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${Bgimg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
                {/* Breadcrumbs - Fixed positioning for better visibility */}
                <nav
                    className="absolute top-16 sm:top-12 md:top-16 lg:top-20 left-1/2 -translate-x-1/2 z-20"
                    aria-label="Breadcrumb"
                >
                    <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base">
                        <li>
                            <a
                                href="/"
                                className="text-white/80 hover:text-amber-300 transition-colors"
                            >
                                Home
                            </a>
                        </li>
                        <li className="text-white/60">/</li>
                        <li className="text-amber-200 font-semibold">About</li>
                    </ol>
                </nav>
                <motion.div
                    className="relative z-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-xl sm:text-2xl md:text-6xl lg:text-5xl xl:text-6xl font-light text-white mb-2 sm:mb-3 md:mb-4 font-serif leading-tight drop-shadow-lg"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        About Rainbow Juice
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100 font-light drop-shadow mt-1 sm:mt-2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                       Freshness in Every Sip & Bite — Discover Our Story!
                    </motion.p>
                </motion.div>
            </section>

            <AboutSection />
        </div>
  
    
  );
};

export default About;

