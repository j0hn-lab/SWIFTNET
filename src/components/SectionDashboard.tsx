"use client";
// src/components/SectionDashboard.tsx
import { useEffect, useState } from "react";
import { Home, Package, Zap, MapPin, BookOpen, Info, LifeBuoy, Mail } from "lucide-react";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "packages", label: "Packages", icon: Package },
  { id: "features", label: "Features", icon: Zap },
  { id: "coverage", label: "Coverage", icon: MapPin },
  { id: "blog", label: "Blog", icon: BookOpen },
  { id: "about", label: "About", icon: Info },
  { id: "support", label: "Support", icon: LifeBuoy },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function SectionDashboard() {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      setVisible(scrollY < lastScroll || scrollY < 100);
      setLastScroll(scrollY);

      // Detect active section
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1.5 transition-all duration-300 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
      }`}
    >
      <div className="glass rounded-2xl p-2 flex flex-col gap-1">
        {sections.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            title={label}
            className={`group relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
              active === id
                ? "bg-volt-400 text-navy-950"
                : "text-slate-500 hover:text-volt-400 hover:bg-white/5"
            }`}
          >
            <Icon className="w-4 h-4" />
            {/* Tooltip */}
            <span className="absolute right-full mr-2 px-2 py-1 bg-navy-900 text-white text-xs font-body rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
              {label}
            </span>
            {active === id && (
              <span className="absolute -left-1 w-1 h-4 bg-volt-400 rounded-full" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}