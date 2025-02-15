"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Flower2, Menu, X } from "lucide-react"
import { useState } from "react"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#footer", label: "Contact" },
  ]

  return (
    <nav className="relative bg-white border-b-2 border-[#ff1c64]/20">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <Link href="/" className="text-xl md:text-2xl font-bold flex items-center gap-2 text-[#ff1c64]">
          <Flower2 className="h-6 w-6 md:h-8 md:w-8" />
          <span>Kala Haryana</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:text-[#ff1c64] font-medium">
              {item.label}
            </Link>
          ))}
          <Button className="bg-[#ff1c64] text-white hover:bg-[#ff1c64]/90">
            Book Tickets
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#ff1c64]" />
          ) : (
            <Menu className="h-6 w-6 text-[#ff1c64]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 overflow-hidden">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-sm hover:text-[#ff1c64] font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="bg-[#ff1c64] text-white hover:bg-[#ff1c64]/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Tickets
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}