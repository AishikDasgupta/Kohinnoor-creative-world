"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface ImageSectionProps {
  heading: string;
  subheading?: string;
  content: string;
  imageUrl: string;
  imageLeft?: boolean;
  imageClassName?: string;
  id: string;
}

export function ImageSection({ heading, subheading, content, imageUrl, imageLeft = true, imageClassName, id }: ImageSectionProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <div id={id}ref={ref} className="mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="rounded-lg flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {imageLeft ? (
          <>
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -20 }
              }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className={`rounded-xl overflow-hidden shadow-xl aspect-square w-full bg-cover bg-center scale-100 transform hover:scale-105 transition-transform duration-300 ${imageClassName}`}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 space-y-4 md:space-y-6 px-4 md:px-0 text-center"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 20 }
              }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[black] mb-2">{heading}</h2>
              <p className="text-[#803093] font-medium text-base md:text-lg">{subheading}</p>
              <p className="text-gray-800 leading-relaxed text-base md:text-lg">{content}</p>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div 
              className="w-full md:w-1/2 space-y-4 md:space-y-6 px-4 md:px-0 text-center"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -20 }
              }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-2 text-center">{heading}</h2>
              <p className="text-[#803093] font-medium text-base md:text-lg text-center">{subheading}</p>
              <p className="text-gray-800 leading-relaxed md:text-lg text-base">{content}</p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 20 }
              }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div 
                className={`rounded-xl overflow-hidden shadow-xl aspect-square w-full bg-cover bg-center scale-100 transform hover:scale-105 transition-transform duration-300 ${imageClassName}`}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}