"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import slide1 from "public/slideshow_1.jpg";
import slide2 from "public/slideshow_2.jpg";
import slide3 from "public/slideshow_3.jpg";

export function GridLayout() {
  const slides = [
    {
      image: slide1,
      title: "THEATRE",
      description:
        "Swang, Nautanki, and Rasleela are popular forms of Haryanvi theatre. These performances entertain the audience about social issues and cultural values.",
    },
    {
      image: slide2,
      title: "FOLK DANCE",
      description:
        "Folk dances like Ghoomar and Dhamal celebrate Haryana's culture through energetic movements and vibrant costumes.",
    },
    {
      image: slide3,
      title: "CULTURAL FESTS",
      description:
        "Annual fests bring together diverse art forms and communities to preserve and celebrate regional traditions.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <motion.section
      id="grid-layout"
      className="bg-[#FFE221] px-0 py-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => setInitialAnimationDone(true)}
    >
      {/* Slideshow */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover px-2 py-2 md:px-8 md:py-4"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text */}
      <div className="pt-4 text-center px-4 md:px-8">
        <h4 className="text-2xl font-bold text-[#7B1C90] mb-2 text-left sm:text-center font-sans">
          {currentSlide.title}
        </h4>
        <p className="text-sm font-bold text-[#7B1C90] max-w-3xl mx-auto pb-4 sm:text-lg font-sans text-left">
          {currentSlide.description}
        </p>
      </div>
    </motion.section>
  );
}
