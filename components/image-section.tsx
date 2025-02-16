"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ImageSectionProps {
  heading: string;
  subheading?: string;
  content: string;
  imageUrl: string;
  id: string;
}

export function ImageSection({
  heading,
  subheading,
  content,
  imageUrl,
  id,
}: ImageSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div
      id={id}
      ref={ref}
      className="bg-black text-white py-16 px-4 md:px-6 flex flex-col items-center text-center"
    >
      {/* Heading Section */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {heading}
      </motion.h2>

      {subheading && subheading.trim() !== "" && (
        <motion.p
          className="text-red-500 uppercase text-sm md:text-base tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {subheading}
        </motion.p>
      )}

      {/* Content Section */}
      <motion.p
        className="text-gray-300 text-base md:text-lg max-w-2xl mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {content}
      </motion.p>

      {/* Image Section */}
      <motion.div
        className="w-full max-w-4xl mt-12 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div
          className="w-full aspect-[16/5] bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </motion.div>
    </div>
  );
}
