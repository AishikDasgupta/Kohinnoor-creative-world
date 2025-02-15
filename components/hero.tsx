"use client"

import { Button } from "@/components/ui/button"
import { FaDrum, FaStar, FaMusic, FaFilm, FaGuitar, FaPaintBrush, FaTablets } from 'react-icons/fa'
import { GiKite, GiDramaMasks, GiPuppet, GiIndianPalace, GiFeather, GiTurban } from 'react-icons/gi'
import { MdTheaterComedy } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { BsCameraReelsFill } from 'react-icons/bs'
import { BiMusic } from 'react-icons/bi'

const handleContactUsClick = () => {
  window.location.href = "https://www.publicgoods.com/pages/contact";
};

export function Hero() {
  return (
    <div className="relative min-h-[90vh]">
      {/* Solid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#803093]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 md:pt-32 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#FAD10A] to-[#ebc419]">
            Celebrating Haryanvi Art & Culture
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
            Our Rich Heritage, Arts, and Traditions - A Unique Cultural Experience
            <span className="inline-block animate-bounce delay-300 ml-2">✨</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 sm:align-center">
            <Button 
              className="bg-white text-[#ff1c1c] hover:bg-gray-100 text-lg px-8 py-6 w-full sm:w-auto group transition-transform hover:scale-105"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Programs
              <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">🎪</span>
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/20 text-lg px-8 py-6 w-full sm:w-auto group transition-transform hover:scale-105"
              onClick={handleContactUsClick}
            >
              Join Us
              <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">🎭</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <GiKite className="text-white/50 text-4xl absolute top-10 left-[10%] animate-bounce" />
        <FaDrum className="text-white/50 text-4xl absolute top-20 right-[15%] animate-bounce delay-100" />
        <GiDramaMasks className="text-white/50 text-4xl absolute top-32 left-[25%] animate-pulse delay-200" />
        <FaFilm className="text-white/50 text-3xl absolute top-16 right-[35%] animate-bounce delay-300" />
        <GiPuppet className="text-white/50 text-4xl absolute bottom-32 left-[40%] animate-pulse delay-150" />
        <FaGuitar className="text-white/50 text-3xl absolute bottom-24 right-[40%] animate-bounce delay-200" />
        <GiIndianPalace className="text-white/50 text-4xl absolute top-[50%] left-[15%] animate-pulse delay-250" />
        <MdTheaterComedy className="text-white/50 text-3xl absolute top-28 left-[45%] animate-bounce delay-150" />
        <FaStar className="text-white/50 text-3xl absolute bottom-20 left-[20%] animate-pulse" />
        <FaMusic className="text-white/50 text-3xl absolute bottom-10 right-[25%] animate-pulse delay-150" />
        <GiFeather className="text-white/50 text-4xl absolute top-24 right-[50%] animate-bounce delay-200" />
        <BiMusic className="text-white/50 text-4xl absolute bottom-28 right-[18%] animate-pulse delay-300" />
        <GiTurban className="text-white/50 text-4xl absolute bottom-36 right-[32%] animate-bounce delay-225" />
        <SiYoutubeshorts className="text-white/50 text-3xl absolute top-36 right-[22%] animate-pulse delay-275" />
        <BsCameraReelsFill className="text-white/50 text-3xl absolute bottom-12 left-[32%] animate-bounce delay-325" />
      </div>
    </div>
  )
}