import React from "react";
import { images } from "../../constants";

// Photo data array
const photos = [
    { id: 1, src: images.gallery_04, alt: "Colorful smoothie bowl" },
    { id: 2, src: images.gallery_03, alt: "Freshly prepared sandwich" },
    { id: 3, src: images.gallery_02, alt: "Customer enjoying juice" },
    { id: 4, src: images.gallery_01, alt: "Rainbow juice in a mason jar" },
    { id: 8, src: images.gallery_01, alt: "Rainbow juice in a mason jar" },
    { id: 7, src: images.gallery_02, alt: "Customer enjoying juice" },
    { id: 6, src: images.gallery_03, alt: "Freshly prepared sandwich" },
    { id: 5, src: images.gallery_04, alt: "Colorful smoothie bowl" },
    { id: 5, src: images.gallery_04, alt: "Colorful smoothie bowl" },
     { id: 4, src: images.gallery_01, alt: "Rainbow juice in a mason jar" },
    { id: 8, src: images.gallery_01, alt: "Rainbow juice in a mason jar" },
    { id: 7, src: images.gallery_02, alt: "Customer enjoying juice" },

];


const GalleryPage = () => {
    return (
        <section
            className="py-16 px-4 bg-gradient-to-br from-[#e4dcd3] to-[#f0bc74] pt-44"
            id="gallery"
        >
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <p className="text-sm tracking-widest text-[#DB790A] uppercase font-semibold">
                        Our Moments
                    </p>
                    <h2 className="text-4xl md:text-5xl font-CormorantUpright font-bold text-[#222] mt-3">
                        Rainbow <span className="text-[#DB790A]">In Frames</span>
                    </h2>

                </div>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {photos.map((photo) => (
                        <div key={photo.id}>
                            <figure className="hover:shine">
                                <img
                                    className="max-w-full rounded-sm shadow-md object-cover"
                                    src={photo.src}
                                    alt={photo.alt}
                                />
                            </figure>
                        </div>
                    ))}

                    <div className="flex flex-col items-center mt-8">
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GalleryPage;
