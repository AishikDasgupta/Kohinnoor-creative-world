"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Kala Haryana</h3>
            <p className="text-gray-400 text-sm md:text-base">An initiative to promote Haryanvi art and culture</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm md:text-base">About Us</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white text-sm md:text-base">Events</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white text-sm md:text-base">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm md:text-base">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 text-sm md:text-base">
              Panchkula, Haryana<br />
              Phone: +91 98765-43210<br />
              Email: info@kalaharyana.com
            </p>
          </div>
          <div>
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
          <p>© 2025 Kala Haryana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}