"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "Hakkimda" },
  { href: "#achievements", label: "Basarilar" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "Iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="gradient-text">oguzhan</span>
            <span className="text-zinc-500">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-zinc-400"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 mt-4" : "max-h-0"
          }`}
        >
          <div className="card p-3">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
