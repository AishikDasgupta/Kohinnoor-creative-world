"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/KohinnoorCreativeWorld.png";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#1e1e1e] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Image
              src={logo}
              alt="Kohinnoor creative world"
              width={260}
              height={68}
              className="mb-4"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 text-sm md:text-base">
              2106/7 HANUMAN COLONY,<br></br>
               ROHTAK, HARYANA, 124001 <br></br>
               PHONE: 7082392820<br></br>
               EMAIL ID: kohinnoorcreativeworld@gmail.com
            </p>
          </div>
          <div className="items-end">
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 md:h-6 md:w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>© 2025 Kohinnoor Creative World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
