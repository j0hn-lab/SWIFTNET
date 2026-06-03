"use client";
// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Packages", href: "#packages" },
    { label: "Features", href: "#features" },
    { label: "Coverage", href: "#coverage" },
    { label: "Blog", href: "#blog" },
    { label: "About", href: "#about" },
    { label: "Support", href: "#support" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-volt-400 rounded-lg flex items-center justify-center animate-pulse-volt">
            <Zap className="w-5 h-5 text-navy-950" fill="currentColor" />
          </div>
          <span className="font-display font-800 text-xl tracking-tight">
            Swift<span className="text-volt-400">Net</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-sm text-slate-400 hover:text-volt-400 transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+254700000000"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            0700 000 000
          </a>
          <a
            href="#connect"
            className="px-5 py-2 bg-volt-400 text-navy-950 font-display font-700 text-sm rounded-lg hover:bg-volt-500 transition-all duration-200 hover:scale-105"
          >
            Get Connected
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-volt-400 py-2 border-b border-white/5 last:border-0 font-body"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            className="mt-2 px-5 py-3 bg-volt-400 text-navy-950 font-display font-700 text-center rounded-lg"
            onClick={() => setOpen(false)}
          >
            Get Connected
          </a>
        </div>
      )}
    </nav>
  );
}