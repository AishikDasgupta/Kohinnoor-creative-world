"use client";

import React, { useState } from "react";
import Image from "next/image";
import visionImage from "public/Our vision .webp";

const OurVision: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="vision"> {/* Added section with id */}
      {/* Main Wrapper */}
      <div className="flex justify-center items-center sm:h-auto h-[20vh] px-4 mt-4">
        <div
          className="cursor-pointer w-full sm:w-64 sm:flex sm:flex-col items-center transition-transform duration-300 hover:scale-105"
          onClick={() => setShowPopup(true)}
        >
          {/* Mobile layout: pill-style */}
          <div className="flex sm:hidden items-center w-full">
            {/* Text Block */}
            <div className="bg-[#FFE221] flex-grow px-6 py-4 shadow-md text-purple-800 font-bold text-center rounded-l-md">
              <div className="text-lg font-sans font-bold">OUR VISION</div>
              <div className="text-xl mt-1 animate-bounce">⬇</div>
            </div>

            {/* Image Circle */}
            <div className="w-28 h-28 rounded-full bg-[#FFE221] p-2 -ml-9 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={visionImage}
                  alt="Our Vision"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Laptop/Desktop layout: vertical block */}
          <div className="hidden sm:flex flex-col items-center bg-[#FFE221] rounded-xl shadow-md p-4 space-y-4 sm:px-14 hover:bg-yellow-300 transition duration-300">
            {/* Image on top */}
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={visionImage}
                alt="Our Vision"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Text below */}
            <div className="text-center text-purple-800 font-bold">
              <div className="text-xl font-sans">OUR VISION</div>
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
          Our Vision
        </h2>
        <p className="text-sm text-gray-700 text-center">
          To build a thriving and inclusive community by fostering creativity, collaboration, and growth through meaningful experiences and impactful initiatives.
        </p>
        <button
          className="mt-5 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 w-full"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default OurVision;
