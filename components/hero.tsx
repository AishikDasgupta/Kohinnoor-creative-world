"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion"; // Ensure this path is correct for your project
import Image from "next/image";
import hero_img from "public/hero_img.jpg";

const handleContactUsClick = () => {
  window.location.href = "https://kcwform.lovable.app/";
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[50vh] sm:h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero_img}
          alt="Background"
          layout="fill"
          objectFit="cover" // ensures that the image covers the container nicely
          quality={80}
          priority
        />
        {/* Yellow Overlay */}
        <div className="absolute inset-0 bg-[#FFE221] opacity-40" />
      </div>

      {/* Content */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto flex flex-col justify-center items-center px-4"
      >
        <motion.h1
          variants={fadeIn("up", 0.4)}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#7B1C90] to-[#7B1C90] mt-4 sm:mt-12 font-sans"
        >
          Haryana&apos;s <br /> Best Nritya Kalakaar
        </motion.h1>

        <motion.div
          variants={fadeIn("up", 0.8)}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center w-full mt-9"
        >
          <Button
            className="bg-[#7B1C90] hover:bg-[#7B1C90] text-white text-lg px-4 py-3 sm:px-8 sm:py-4 max-w-xs sm:max-w-none group transition-transform hover:scale-105 rounded-3xl font-serif"
            onClick={handleContactUsClick}
          >
            REGISTRATION FORM
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
