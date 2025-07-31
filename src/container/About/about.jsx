import React from "react";

export default function AboutSection() {
    return (
        <section className="bg-[white] py-16 px-4 md:px-20">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side (Text) */}
                <div className="text-center md:text-left">

                    <div className="text-center my-10">
                        <h2 className="text-4xl font-semibold text-gray-800 font-serif mb-2">
                            Discover Our Story
                        </h2>

                        <div className="flex items-center justify-center gap-4">
                            <div className="border-t border-gray-400 w-24" />
                            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 443.693 443.693"><path d="M326.85 96.927c0-25.505-20.749-46.256-46.254-46.256-22.07 0-40.568 15.543-45.152 36.255h-59.972L135.84 5.621a10 10 0 0 0-13.371-4.607c-4.964 2.42-7.027 8.406-4.607 13.371l35.36 72.542h-25.198a9.999 9.999 0 0 0-8.062 15.918c16.631 22.655 15.013 42.409 5.834 73.151-8.842 29.616-14.489 54.499-.451 82.368 12.495 27.684 38.644 46.531 68.355 50.027.092 38.064.092 76.754.001 115.303h-38.942c-5.522 0-10 4.479-10 10 0 5.523 4.478 10 10 10h97.93c5.522 0 10-4.477 10-10 0-5.521-4.478-10-10-10h-38.987c.091-38.547.091-77.234-.001-115.297 29.721-3.48 55.886-22.326 68.39-50.01 14.054-27.877 8.405-52.767-.439-82.392-3.758-12.579-6.245-23.317-6.737-33.169a47 47 0 0 0 5.683.356c25.503-.001 46.252-20.75 46.252-46.255m-46.253-26.256c14.477 0 26.254 11.778 26.254 26.256s-11.777 26.254-26.254 26.254a27 27 0 0 1-3.469-.234c1.988-6.69 5.336-13.266 10.355-20.104a10 10 0 0 0-8.062-15.917h-23.096c3.942-9.53 13.335-16.255 24.272-16.255m-36.274 36.255.02.001.02-.001h17.498c-11.519 24.881-7.122 48.179-.307 71.62-4.779-4.189-11.354-9.145-22.787-9.145-9.247 0-15.313 3.245-19.825 6.702l-33.72-69.177zm-81.352 0 37.955 77.863c-3.035-.6-4.918-2.272-7.994-5.022-4.894-4.374-11.596-10.366-24.163-10.366-11.529 0-18.117 5.039-22.906 9.25 6.832-23.48 11.259-46.81-.276-71.726zM264.146 249.55a10 10 0 0 0-.208.436c-10.621 23.691-34.257 39-60.216 39-25.967 0-49.605-15.316-60.225-39.02a10 10 0 0 0-.207-.434c-7.546-14.883-7.7-28.742-4.395-44.86 9.346-1.355 14.857-6.258 19.037-9.994 3.931-3.513 5.903-5.277 10.836-5.277 4.932 0 6.904 1.764 10.835 5.277 4.894 4.375 11.596 10.366 24.164 10.366 7.433 0 12.804-2.1 16.973-4.717l.04-.025c2.862-1.802 5.162-3.845 7.153-5.624 3.93-3.513 5.902-5.276 10.833-5.276 4.934 0 6.907 1.764 10.838 5.277 4.166 3.723 9.656 8.604 18.943 9.979 3.311 16.131 3.157 30-4.401 44.892" /></svg>
                            <div className="border-t border-gray-400 w-24" />
                        </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Welcome to Rainbow Juice & Snack Centre – your destination for refreshing juices, delightful snacks, and great vibes. We are passionate about serving freshly made fruit juices, milkshakes, and traditional Indian snacks that taste like home.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        With a focus on quality and hygiene, every item is prepared using the finest ingredients. Whether you're craving a tangy chaat or a fruity delight, we’ve got you covered!
                    </p>
                    <div className="flex justify-center items-center h-full">
                        <a
                            href="/menu"
                            // onClick={() => setToggleMenu(false)}
                            className="custom-btn btn-5"
                        >
                            {/* <Play className="w-4 h-4 mr-2" /> */}
                            <span>Explore Menu</span>
                        </a>
                        
                    </div>

                </div>


                {/* Image Grid Section */}
                <div className="relative grid grid-cols-2 gap-2 md:gap-4 w-full max-w-sm md:max-w-xl mx-auto">
                    {/* Drink Box 1 */}
                    <div className="bg-white p-[6px] border-[6px] border-yellow-900 rounded-md shadow-lg">
                        <div className="bg-[#7b0022] p-4 border-[6px] border-yellow-900 rounded-md shadow-lg p-[30px] md:p-[50px]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                                alt="Drink 1"
                                className="w-20 h-20 md:w-32 md:h-32 mx-auto object-contain"
                            />
                        </div>
                    </div>
                    {/* Drink Box 2 */}
                    <div className="bg-white p-[6px] border-[6px] border-yellow-900 rounded-md shadow-lg">
                        <div className="bg-[#e63946] p-4 border-[6px] border-red-500 rounded-md shadow-lg p-[30px] md:p-[50px]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                                alt="Drink 2"
                                className="w-20 h-20 md:w-32 md:h-32 mx-auto object-contain"
                            />
                        </div>
                    </div>
                    {/* Drink Box 3 */}
                    <div className="bg-white p-[6px] border-[6px] border-yellow-900 rounded-md shadow-lg">
                        <div className="bg-[#ff3c38] p-4 border-[6px] border-orange-500 rounded-md shadow-lg p-[30px] md:p-[50px]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
                                alt="Drink 3"
                                className="w-20 h-20 md:w-32 md:h-32 mx-auto object-contain"
                            />
                        </div>
                    </div>
                    {/* Drink Box 4 */}
                    <div className="bg-white p-[6px] border-[6px] border-yellow-900 rounded-md shadow-lg">
                        <div className="bg-[#b71c1c] p-4 border-[6px] border-red-500 rounded-md shadow-lg p-[30px] md:p-[50px]">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/848/848043.png"
                                alt="Drink 4"
                                className="w-20 h-20 md:w-32 md:h-32 mx-auto object-contain"
                            />
                        </div>
                    </div>
                    {/* Center Badge */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 md:px-6 md:py-4 border-4 border-[#f8f3f0] shadow-lg text-center rounded-[40px] z-10 pointer-events-none select-none">
                        <p className="text-base md:text-2xl font-semibold text-gray-800 font-serif">
                            Tastes So<br />Good!
                        </p>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
}

// import React from "react";

// export default function TastesGrid() {
//   return (
//     <section className="bg-[#faf6f2] py-16 px-4 flex justify-center">
     
//     </section>
//   );
// }
