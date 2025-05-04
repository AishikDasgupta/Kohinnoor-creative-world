"use client";

import React, { useState } from "react";
import Image from "next/image";
import aboutImage from "public/sun_img.png";

const AboutUs: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="aboutus">
      {" "}
      {/* Added section with id */}
      {/* Main Wrapper */}
      <div className="flex justify-center items-center sm:h-auto h-[20vh] px-4 mt-1">
        <div
          className="cursor-pointer w-full sm:w-64 sm:flex sm:flex-col items-center transition-transform duration-300 hover:scale-105"
          onClick={() => setShowPopup(true)}
        >
          {/* Mobile layout: pill-style */}
          <div className="flex sm:hidden items-center w-full">
            {/* Image Circle */}
            <div className="w-28 h-28 rounded-full bg-[#FFE221] p-2 -mr-9 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden z-10">
                <Image
                  src={aboutImage}
                  alt="About Us"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Text */}
            <div className="bg-[#FFE221] flex-grow px-6 py-4 shadow-md text-purple-800 font-bold text-center rounded-r-md">
              <div className="text-lg font-sans font-bold">ABOUT US</div>
              <div className="text-xl mt-1 animate-bounce">⬇</div>
            </div>
          </div>

          {/* Desktop layout: image on top, text below */}
          <div className="hidden sm:flex flex-col items-center bg-[#FFE221] rounded-xl shadow-md p-4 space-y-4 sm:px-14 hover:bg-yellow-300 transition duration-300">
            {/* Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={aboutImage}
                alt="About Us"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Text */}
            <div className="text-center text-purple-800 font-bold">
              <div className="text-xl font-sans">ABOUT US</div>
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
          About Us
        </h2>
        <p className="text-sm text-gray-700 text-center">
          Kohinnoor Creative World is an initiative to explore and celebrate the
          creative legacy of Haryana and its rich folk culture. We aim to
          preserve and promote artistic traditions while providing a platform
          for emerging talent. We organize competitive events and workshops
          across various creative fields including Dance, Music, Story telling,
          Fashion design, Visual & Performing arts, offering artists
          opportunities to showcase their skills, learn from experts, and grow
          professionally. Our mission is to blend heritage with modern
          creativity, ensuring that Haryana&apos;s artistic spirit continues to
          thrive on a larger stage.
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

export default AboutUs;
