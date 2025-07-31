import React from "react";
import { images } from "../../constants";

// Photo data array
const photos = [
    { id: 1, src: images.gallery_04, alt: "Colorful smoothie bowl" },
    { id: 2, src: images.gallery_03, alt: "Freshly prepared sandwich" },
    { id: 3, src: images.gallery_02, alt: "Customer enjoying juice" },
    { id: 4, src: images.gallery_01, alt: "Rainbow juice in a mason jar" },
    { id: 8, src: images.gallery_01, alt: "Rainbow juice in a mason jar" },
    { id: 5, src: images.gallery_04, alt: "Colorful smoothie bowl" },
    { id: 6, src: images.gallery_03, alt: "Freshly prepared sandwich" },
    { id: 7, src: images.gallery_02, alt: "Customer enjoying juice" },
    { id: 5, src: images.gallery_04, alt: "Colorful smoothie bowl" },

];


const Photogallery = () => {
    return (
        <section
            className="py-16 px-4 bg-gradient-to-br from-[#e4dcd3] to-[#f0bc74]"
            id="gallery"
        >
            <div className="container mx-auto">
                <div className="text-center mb-12 animate-fadeInDown">
                    <p className="text-sm tracking-widest text-[#DB790A] uppercase font-semibold">
                        Our Moments
                    </p>
                    <h2 className="text-4xl md:text-5xl font-CormorantUpright font-bold text-[#222] mt-3">
                        Rainbow <span className="text-[#DB790A]">In Frames</span>
                    </h2>

                </div>

                 
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {photos.slice(0, 8).map((photo) => (
                        <div key={photo.id} className="animate-fadeInUp">
                            <figure className="hover:shine transition-transform duration-300 hover:scale-105 shadow-lg rounded-xl overflow-hidden">
                                <img
                                    className="max-w-full rounded-sm object-cover"
                                    src={photo.src}
                                    alt={photo.alt}
                                />
                            </figure>
                        </div>
                    ))}

                    <div className="flex flex-col items-center mt-8">


                    </div>


                </div>
                <a href="/gallery" className="flex items-center justify-center mt-8">
                    <button type="button" className="custom__button bg-gradient-to-r from-[#FFD580] to-[#DB790A] font-bold text-white rounded-full shadow-lg hover:from-[#DB790A] hover:to-[#FFD580] hover:scale-105 transition-all duration-300 relative overflow-hidden animate-fadeInUp">
                        <span className="relative z-10">See the Rainbow Moments</span>
                        <span className="absolute left-0 top-0 w-full h-full bg-white opacity-10 animate-pulse"></span>
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Photogallery;
