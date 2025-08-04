import React from 'react'
import { motion } from 'framer-motion';
import Bgimg from '../assets/about_banner.jpg';
import Stores from '../container/store/Store';
import { Clock } from 'lucide-react';



const Contact = () => {
    const hours = [
        { day: "Mon – Fri", time: "10:30 AM – 12:00 AM" },
        { day: "Saturday", time: "10:30 AM – 12:00 AM" },
        { day: "Sunday", time: "Open 24 hours" },
    ];
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
                        <li className="text-amber-200 font-semibold">Contact</li>
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
                        Connect with Rainbow Juice
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100 font-light drop-shadow mt-1 sm:mt-2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        We're here to help you with all your stitching needs.
                    </motion.p>
                </motion.div>
            </section>
            
            <Stores />


            <section className='flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 bg-white'>


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-md mx-auto rounded-2xl p-6 border
                 border-white/30 shadow-xl text-gray-800"
                >
                    <h3 className="text-xl font-semibold mb-4 text-center font-medium text-yellow-800">Business Hours</h3>


                    {hours.map(({ day, time }) => (
                        <div key={day} className="flex justify-between py-1 border-b border-white/10 last:border-none">
                            <span className="font-medium flex items-center gap-2">
                                <Clock className="w-4 h-4 text-amber-500" />
                                {day}
                            </span>
                            <span>{time}</span>
                        </div>
                    ))}


                    <p className="text-center text-sm mt-4 italic">
                        * We’re open late on weekends for your midnight cravings!
                    </p>
                </motion.div>
            </section>

        </div>
    )
}

export default Contact
