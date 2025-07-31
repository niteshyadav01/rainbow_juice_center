import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Feature.css"
const features = [
  {
    "title": "Fresh Juices Daily",
    "description": "We serve freshly prepared juices from real fruits every single day.",
    "svg": "<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C9.243 2 7 4.243 7 7c0 .343.034.678.09 1H6a2 2 0 0 0-2 2v1h16v-1a2 2 0 0 0-2-2h-1.09c.056-.322.09-.657.09-1 0-2.757-2.243-5-5-5zM4 12v1a2 2 0 0 0 2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a2 2 0 0 0 2-2v-1H4z\"/></svg>"
  },
  {
    "title": "Friendly Staff",
    "description": "Our team always greets you with a smile and fast service.",
    "svg": "<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\"/></svg>"
  },
  {
    "title": "Popular Hangout",
    "description": "Loved by locals and regulars alike. A place to chill, chat, and enjoy.",
    "svg": "<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C17 14.17 12.33 13 10 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.03 1.97 3.45V19h4v-2.5c0-2.33-4.67-3.5-7-3.5z\"/></svg>"
  },
  {
    "title": "Customer Care",
    "description": "We listen, we serve, and we improve. Your feedback means everything.",
    "svg": "<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 2a2 2 0 0 1 4 0v5h2V3a2 2 0 0 1 4 0v10h2V7a2 2 0 0 1 4 0v10a6 6 0 0 1-12 0v-2H6V2z\"/></svg>"
  },
  {
    "title": "Loved by All",
    "description": "Thousands of thumbs up from happy customers every month.",
    "svg": "<svg fill=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 21h4V9H2v12zm19-11h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14 3 7.59 9.41C7.22 9.78 7 10.3 7 10.83V19c0 1.1.9 2 2 2h8c.82 0 1.54-.5 1.84-1.22l3.02-7.05A1.49 1.49 0 0 0 21 10z\"/></svg>"
  }
]


const Feature = () => {
  return (
<section
  id="features"
  className="py-16 px-4 bg-gradient-to-br from-[#e4dcd3] to-[#f0bc74]"
>
    <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
  
          <h2 className="text-3xl headtext__cormorant md:text-4xl font-bold text-black ">
            Why Choose <span className="text-[#FFA500]">Rainbow?</span>
          </h2>
          <p className="mt-3 p__opensans text-gray-600 text-lg">
            Here's what makes us your favorite hangout spot in town!
          </p>
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "30px",
            arrows: false,
            autoplay: true,
            interval: 3000,
            pagination: false,
            breakpoints: {
              992: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          className="mt-12"
        >
          {features.map((feature, index) => (
           <SplideSlide
  key={index}
  className="feature-card group bg-white rounded-md shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#FFA500] cursor-pointer"
>
  <div
    className="mb-4 feature-icon transition-all duration-300 text-[#ffa850] group-hover:text-white"
    dangerouslySetInnerHTML={{ __html: feature.svg }}
    style={{ width: "40px", height: "40px" }}
  />
  <h3 className="text-lg p__opensans font-semibold text-[#ffa850] group-hover:text-white transition-all duration-300">
    {feature.title}
  </h3>
  <p className="text-gray-600 p__opensans mt-2 group-hover:text-white transition-all duration-300">
    {feature.description}
  </p>
</SplideSlide>

          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Feature;
