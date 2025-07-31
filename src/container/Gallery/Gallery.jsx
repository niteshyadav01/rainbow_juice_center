import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center flex-col app__bg py-16 px-8 xl:px-24 xl:flex-row">
      <div className="app__gallery-content flex-one flex justify-center items-center flex-col min-w-[100%] xl:pr-8 sm:min-w-[500px]">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant text-[#DB790A] text-center">Follow Us On Instagram</h1>
        <p className="p__opensans mt-8 text-center text-white">
          Get a taste of freshness and colors! Check out our latest juices,
          snacks, and behind-the-scenes fun at Rainbow Juice & Snacks Center.
        </p>
        <a
          href="https://www.instagram.com/rainbow_juice_centre/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom__button my-10 xl:mt-8 bg-white text-[#DB790A] font-bold rounded-full hover:bg-[orange] hover:text-white transition-colors duration-300"
        >
          Visit Instagram
        </a>
      </div>

      <div className="app__gallery-images flex-one flex flex-row max-w-[90%] relative xl:max-w-[50%]">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#DB790A]/30 via-transparent to-[#DB790A]/30" />
        <div
          className="app__gallery-images_container flex flex-row w-max overflow-x-scroll scrollbar-hide"
          ref={scrollRef}
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
            <a href="https://www.instagram.com/rainbow_juice_centre/" target="_blank" rel="noopener noreferrer" key={`gallery_image-${index + 1}`}> 
              <div
                className="app__gallery-images_card relative min-w-[240px] h-[320px] mr-8 flex__center sm:min-w-[301px] sm:h-[447px] group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt="gallery_image"
                  className="w-full h-full object-cover opacity-100 duration-500 ease-in-out group-hover:scale-110"
                />
                <BsInstagram className="gallery__image-icon absolute text-primary-white text-size-4xl opacity-0 group-hover:opacity-100 group-hover:scale-110 duration-500 ease-in-out cursor-pointer z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]">
          <BsArrowLeftShort
            className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-[#DB790A] rounded-md hover:text-primary-white"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-[#DB790A] rounded-md hover:text-primary-white"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
