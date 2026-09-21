"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn, PHONE_NUMBER, PHONE_HREF, BUSINESS_NAME } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "House Removals", href: "/services/house-removals" },
      { name: "Single Item", href: "/services/single-item" },
      { name: "Long Distance", href: "/services/long-distance" },
      { name: "Furniture Transport", href: "/services/furniture-transport" },
    ],
  },
  { name: "Get a Quote", href: "/quote" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Areas", href: "/areas" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 z-50">
            <span className="text-2xl font-bold text-[#1B8751]">SW16</span>
            <span className="text-2xl font-bold text-[#243b53]">MOVES</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-gray-700 hover:text-[#1B8751] font-medium transition-colors py-2"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden py-2"
                      >
                        {link.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-[#1B8751]/10 hover:text-[#1B8751] transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-[#243b53] font-bold hover:text-[#1B8751] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#1B8751]" />
              {PHONE_NUMBER}
            </a>
            <Link
              href="/quote"
              className="bg-[#1B8751] hover:bg-[#1B8751]/90 text-white px-6 py-2.5 rounded-md font-semibold transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-[#243b53]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto pb-safe"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="text-2xl font-bold text-[#243b53] block"
                    onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-[#1B8751]/20 pl-4">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="text-lg text-gray-600 block"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto mb-10 flex flex-col gap-4">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-[#243b53]/5 text-[#243b53] font-bold py-4 rounded-lg text-lg"
              >
                <Phone className="w-5 h-5 text-[#1B8751]" />
                Call {PHONE_NUMBER}
              </a>
              <Link
                href="/quote"
                className="bg-[#1B8751] text-white font-bold py-4 rounded-lg text-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
