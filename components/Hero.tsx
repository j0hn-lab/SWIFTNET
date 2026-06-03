"use client";
// src/components/Hero.tsx
import { ArrowRight, Wifi, Shield, Clock, Zap, MonitorPlay, Users } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1920&q=80",
    alt: "Person working from home with laptop",
  },
  {
    url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80",
    alt: "Gaming setup with fast internet",
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    alt: "Family enjoying internet connection",
  },
  {
    url: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1920&q=80",
    alt: "Video streaming in high quality",
  },
  {
    url: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80",
    alt: "Business meeting over video call",
  },
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
    alt: "Smart home connected devices",
  },
  {
    url: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1920&q=80",
    alt: "4K streaming experience",
  },
];

// Matches reference image: icon + label cards
const emphasisBadges = [
  {
    icon: Zap,
    label: "Free Installation",
    color: "#a3ff47",
    bg: "rgba(163,255,71,0.08)",
  },
  {
    icon: Wifi,
    label: "24/7 Support",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
  },
  {
    icon: MonitorPlay,
    label: "8K Streaming Ready",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    icon: Shield,
    label: "Fast Speeds",
    color: "#a3ff47",
    bg: "rgba(163,255,71,0.08)",
  },
  {
    icon: MonitorPlay,
    label: "Streaming & Gaming",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.08)",
  },
  {
    icon: Users,
    label: "Affordable Plans",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
  },
];

const speedLines = [
  { top: "22%", delay: "0s", width: "280px", duration: "3s" },
  { top: "45%", delay: "0.8s", width: "180px", duration: "3.7s" },
  { top: "68%", delay: "1.6s", width: "320px", duration: "4.4s" },
  { top: "33%", delay: "2.4s", width: "220px", duration: "5.1s" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 1500);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background slideshow */}
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-950/80" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Hero glow */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Speed lines */}
      {speedLines.map((line, i) => (
        <div
          key={i}
          className="speed-line"
          style={{
            top: line.top,
            animationDuration: line.duration,
            animationDelay: line.delay,
            width: line.width,
          }}
        />
      ))}

      {/* Big speed ring */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-volt-400/10 animate-float hidden lg:block">
        <div className="absolute inset-8 rounded-full border border-volt-400/8" />
        <div className="absolute inset-20 rounded-full border border-volt-400/6" />
        <div className="absolute inset-32 rounded-full bg-volt-400/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 glass-volt px-4 py-2 rounded-full mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <span className="w-2 h-2 bg-volt-400 rounded-full animate-pulse" />
            <span className="text-volt-400 text-xs font-display font-600 tracking-widest uppercase">
              Now live in Nairobi
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Internet That
            <br />
            <span className="text-gradient">Never Blinks.</span>
          </h1>

          <p
            className="font-body text-slate-300 text-lg sm:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            SwiftNet delivers 100Mbps to 1Gbps pure fibre to homes and businesses
            across Nairobi. Free installation, free router — zero compromises.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            <a
              href="#connect"
              className="inline-flex items-center gap-2 px-7 py-4 bg-volt-400 text-navy-950 font-display font-700 text-base rounded-xl hover:bg-volt-500 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,255,71,0.4)]"
            >
              Check My Area
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-7 py-4 glass text-white font-display font-600 text-base rounded-xl hover:border-volt-400/30 transition-all duration-200"
            >
              View Packages
            </a>
          </div>

          {/* Emphasis badges — matches reference image layout */}
          <div
            className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            {emphasisBadges.map(({ icon: Icon, label, color, bg }) => (
              <div
                key={label}
                className="rounded-xl p-3 flex flex-col items-center gap-2 hover:scale-105 transition-all cursor-default border border-white/5"
                style={{ background: bg }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}18` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <span className="text-xs font-body text-slate-300 text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Trust stats */}
          <div
            className="flex flex-wrap gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            {[
              { icon: Wifi, label: "Up to 1 Gbps", sub: "Pure fibre speed" },
              { icon: Shield, label: "99.9% Uptime", sub: "SLA guaranteed" },
              { icon: Clock, label: "24/7 Support", sub: "Local team" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 glass-volt rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-volt-400" />
                </div>
                <div>
                  <p className="font-display font-700 text-white text-sm">{label}</p>
                  <p className="text-slate-500 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute bottom-8 left-4 sm:left-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-6 h-2 bg-volt-400" : "w-2 h-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}