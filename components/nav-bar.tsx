"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "public/KohinnoorCreativeWorld.png";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#mission", label: "Mission" },
    { href: "#vision", label: "Vision" },
  ];

  const handleContactUsClick = () => {
    window.location.href = "https://www.publicgoods.com/pages/contact";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#803093]/20">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Kohinnoor creative world"
            width={124}
            height={64}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-[#803093] "
            >
              {item.label}
            </Link>
          ))}
          <Button
            className="bg-[#803093] text-white hover:text-[#803093] hover:bg-[#FAD10A]/90"
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#803093]" />
          ) : (
            <Menu className="h-6 w-6 text-[#803093]" />
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
                className="text-sm hover:text-[#803093] font-medium py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-[#803093] text-white hover:bg-[#803093]/90 w-full"
              onClick={handleContactUsClick}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
