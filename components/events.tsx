"use client";

import React, { useState } from "react";
import Image from "next/image";
import picture from "public/Upcoming event.webp";

const UpcomingEvent: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="events">
      {" "}
      {/* Added section with id */}
      {/* Main Wrapper */}
      <div className="flex justify-center items-center sm:h-auto h-[20vh] px-4">
        {/* Clickable container */}
        <div
          className="cursor-pointer w-full sm:w-64 sm:flex sm:flex-col items-center transition-transform duration-300 hover:scale-105"
          onClick={() => setShowPopup(true)}
        >
          {/* Mobile layout: pill-style */}
          <div className="flex sm:hidden items-center w-full">
            {/* Rectangle */}
            <div className="bg-[#FFE221] flex-grow px-6 py-4 shadow-md text-purple-800 font-bold text-center rounded-l-md">
              <div className="text-[15px] font-sans font-bold">
                UPCOMING EVENTS
              </div>
              <div className="text-xl mt-1 animate-bounce">⬇</div>
            </div>

            {/* Circle image */}
            <div className="w-28 h-28 rounded-full bg-[#FFE221] p-2 -ml-9 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src={picture}
                  alt="Event"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Desktop layout: image on top, text below */}
          <div className="hidden sm:flex flex-col items-center bg-[#FFE221] rounded-xl shadow-md p-4 space-y-4 sm:mt-4 hover:bg-yellow-300 transition duration-300">
            {/* Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <Image
                src={picture}
                alt="Event"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Text and Arrow */}
            <div className="text-center text-purple-800 font-bold">
              <div className="text-xl font-sans">UPCOMING EVENT</div>
              <div className="text-2xl mt-1 animate-bounce">⬇</div>
            </div>
          </div>
        </div>
      </div>
      {/* Popup */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-yellow-200 rounded-t-2xl p-6 z-50 transition-all duration-500 ease-in-out max-h-[80vh] overflow-y-auto ${
          showPopup ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="text-left text-sm text-gray-800 space-y-4">
          <h2 className="text-xl font-bold text-purple-800 text-center">
            Haryana’s Best Nritya Kalakaar – Unleash Your Dance Talent!
          </h2>

          <p>
            <strong>Haryana’s Best Nritya Kalakaar</strong> is the ultimate
            dance competition designed to discover and celebrate the most
            talented young dancers from across Haryana. Organized by{" "}
            <strong>Kohinnoor Creative World</strong>, this prestigious event
            provides a grand stage for dancers aged 8 years and above to
            showcase their skills and gain recognition.
          </p>

          <h3 className="font-semibold text-purple-700">Competition Format</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>First Round (Auditions)</strong> – Held offline in all 22
              districts of Haryana, judged by dance experts.
            </li>
            <li>
              <strong>Semi-Finals</strong> – Selected participants will compete
              in front of renowned judges. 12 finalists will be chosen.
            </li>
            <li>
              <strong>Grand Finale</strong> – The final 12 will battle for the
              title, judged by top industry professionals and celebrities!
            </li>
          </ul>

          <h3 className="font-semibold text-purple-700">
            Exciting Prize Rewards!
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>1st Prize: ₹51,000 + Trophy & Certificate</li>
            <li>2nd Prize: ₹31,000 + Trophy & Certificate</li>
            <li>3rd Prize: ₹11,000 + Trophy & Certificate</li>
          </ul>
          <p>
            All finalists will receive certificates, media coverage, and
            exclusive career opportunities to grow in dance!
          </p>

          <h3 className="font-semibold text-purple-700">Why Participate?</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Statewide Recognition</strong> – Become one of Haryana’s
              top dance stars.
            </li>
            <li>
              <strong>Professional Exposure</strong> – Perform in front of
              renowned judges and industry experts.
            </li>
            <li>
              <strong>Exciting Prizes & Media Coverage</strong> – Get the
              spotlight you deserve!
            </li>
            <li>
              <strong>A Step Towards a Bright Future in Dance</strong> – Open
              doors to bigger opportunities.
            </li>
          </ul>

          <h3 className="font-semibold text-purple-700">
            Registration Details
          </h3>
          <p>
            <strong>Registration Fee:</strong> ₹700
          </p>
          <p>
            <strong>How to Register:</strong> Visit our website, fill out the
            registration form, and complete the payment process.
          </p>
          <p>
            <strong>Offline Auditions:</strong> Stay tuned for district-wise
            audition dates near you!
          </p>

          <p className="text-center font-semibold text-purple-900 mt-4">
            🎉 This is your moment to shine! Register now and be a part of
            Haryana’s biggest dance competition! 🎉
          </p>
        </div>

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

export default UpcomingEvent;
