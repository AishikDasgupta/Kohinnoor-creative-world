"use client";

import React, { useState } from "react";
import Image from "next/image";
import storyImage from "public/Our story .webp";

const OurStory: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="story">
      {/* Main Wrapper */}
      <div className="flex justify-center items-center sm:h-auto h-[20vh] px-4 mt-4">
        <div
          className="cursor-pointer w-full sm:w-64 sm:flex sm:flex-col items-center transition-transform duration-300 hover:scale-105"
          onClick={() => setShowPopup(true)}
        >
          {/* Mobile Layout: Image Left, Text Right */}
          <div className="flex sm:hidden items-center w-full">
            {/* Image Circle Left */}
            <div className="w-28 h-28 rounded-full bg-[#FFE221] p-2 -mr-9 flex items-center justify-center z-10">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={storyImage}
                  alt="Our Story"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="bg-[#FFE221] flex-grow px-6 py-4 shadow-md text-purple-800 font-bold text-center rounded-r-md transition duration-300 hover:bg-yellow-300">
              <div className="text-lg font-sans font-bold">OUR STORY</div>
              <div className="text-xl mt-1 animate-bounce">⬇</div>
            </div>
          </div>

          {/* Laptop/Desktop Layout: Vertical Grid */}
          <div className="hidden sm:flex flex-col items-center bg-[#FFE221] rounded-xl shadow-md p-4 space-y-4 sm:px-14 sm:mb-4 hover:bg-yellow-300 transition duration-300">
            {/* Image on top */}
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={storyImage}
                alt="Our Story"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Text below */}
            <div className="text-center text-purple-800 font-bold">
              <div className="text-xl font-sans">OUR STORY</div>
              <div className="text-2xl mt-1 animate-bounce">⬇</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-yellow-300 rounded-t-2xl p-6 z-50 transition-all duration-500 ease-in-out ${
          showPopup ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <h2 className="text-lg font-bold mb-4 text-center text-purple-800">
          Our Story
        </h2>
        <p className="text-sm text-gray-700 text-center">
          Born from a shared passion and a vision to create something meaningful, our journey began with a spark and evolved into a movement. Through ups and downs, we stayed united, driven by purpose and heart.
        </p>
        <button
          className="mt-5 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 w-full transition duration-300"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default OurStory;
