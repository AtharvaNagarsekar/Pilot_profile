"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Flight Log", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            {/* Wing icon */}
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <path
                d="M2 20 L16 8 L30 20 L24 20 L16 12 L8 20 Z"
                fill="url(#wing-grad)"
                className="group-hover:opacity-100 transition-opacity"
              />
              <defs>
                <linearGradient id="wing-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-md group-hover:bg-amber-400/50 transition-all" />
          </div>
          <div>
            <span
              className="text-white font-semibold tracking-widest text-sm uppercase"
              style={{ fontFamily: "var(--font-bebas)", fontSize: "1.1rem", letterSpacing: "0.12em" }}
            >
              Atharva
            </span>
            <div className="text-amber-400 text-[10px] font-semibold tracking-[0.25em] uppercase -mt-1 hidden md:block">
              Nagarsekar
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/50 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-sky-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="mailto:nagarsekaratharva@gmail.com"
            className="px-5 py-2 rounded-full border border-amber-400/40 text-amber-400 text-xs font-semibold tracking-widest uppercase hover:bg-amber-400/10 hover:border-amber-400/70 transition-all duration-200"
          >
            Hail Frequency
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-base font-medium tracking-widest uppercase py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:nagarsekaratharva@gmail.com"
            className="mt-2 px-5 py-3 rounded-full border border-amber-400/40 text-amber-400 text-sm font-semibold tracking-widest uppercase text-center"
          >
            Hail Frequency
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};
