"use client";
import { MapPin, CheckCircle, Clock, Search } from "lucide-react";
import { useState } from "react";

const live = [
  { name: "Kilimani", x: 48, y: 52 },
  { name: "Kileleshwa", x: 43, y: 48 },
  { name: "Lavington", x: 38, y: 50 },
  { name: "Westlands", x: 42, y: 38 },
  { name: "Parklands", x: 46, y: 33 },
  { name: "Langata", x: 38, y: 65 },
  { name: "South B & C", x: 55, y: 60 },
  { name: "Upperhill", x: 52, y: 52 },
];

const coming = [
  { name: "Kasarani", x: 58, y: 25 },
  { name: "Ruaka", x: 32, y: 22 },
  { name: "Rongai", x: 42, y: 80 },
  { name: "Kitengela", x: 65, y: 82 },
  { name: "Thika Road", x: 55, y: 18 },
  { name: "Syokimau", x: 68, y: 68 },
  { name: "Kikuyu", x: 25, y: 55 },
  { name: "Ngong", x: 28, y: 72 },
];

export default function Coverage() {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [notified, setNotified] = useState(false);

  const allAreas = [
    ...live.map((a) => ({ ...a, status: "live" })),
    ...coming.map((a) => ({ ...a, status: "coming" })),
  ];

  const filtered = search.trim()
    ? allAreas.filter((a) =>
        a.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const searchResult = filtered[0];

  return (
    <section id="coverage" className="py-24 bg-navy-950 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
            Coverage
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white mb-4">
            Where We Are
          </h2>
          <p className="text-slate-400 font-body max-w-xl mx-auto text-lg">
            Currently live across Nairobi's key zones — expanding every week.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your area (e.g. Kilimani)..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-volt-400/50 font-body"
            />
          </div>
          {search && (
            <div className="mt-3">
              {searchResult ? (
                <div
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 ${
                    searchResult.status === "live"
                      ? "glass-volt"
                      : "glass"
                  }`}
                >
                  {searchResult.status === "live" ? (
                    <CheckCircle className="w-5 h-5 text-volt-400" />
                  ) : (
                    <Clock className="w-5 h-5 text-amber-400" />
                  )}
                  <div>
                    <p className="font-display font-700 text-white text-sm">
                      {searchResult.name}
                    </p>
                    <p className="text-xs font-body text-slate-400">
                      {searchResult.status === "live"
                        ? "✅ SwiftNet is live in your area!"
                        : "🚧 Coming soon — register to be notified"}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-slate-500 text-sm text-center font-body">
                  No area found. Try a different name or{" "}
                  <a href="#contact" className="text-volt-400 hover:underline">
                    contact us
                  </a>
                  .
                </p>
              )}
            </div>
          )}
        </div>

        {/* Map + lists */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Interactive SVG map */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-4 relative overflow-hidden">
              <p className="text-slate-500 text-xs font-body mb-3 text-center">
                Nairobi Coverage Map (Interactive)
              </p>
              <div className="relative w-full" style={{ paddingBottom: "70%" }}>
                <svg
                  viewBox="0 0 100 80"
                  className="absolute inset-0 w-full h-full"
                  style={{ background: "rgba(163,255,71,0.02)" }}
                >
                  {/* Simple Nairobi outline shape */}
                  <path
                    d="M20,15 Q50,5 80,12 Q90,30 88,55 Q80,75 60,78 Q40,80 20,72 Q8,60 10,38 Z"
                    fill="none"
                    stroke="rgba(163,255,71,0.15)"
                    strokeWidth="0.5"
                  />
                  {/* Grid lines */}
                  {[20, 35, 50, 65, 80].map((x) => (
                    <line key={`v${x}`} x1={x} y1="5" x2={x} y2="78" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                  ))}
                  {[15, 30, 45, 60, 75].map((y) => (
                    <line key={`h${y}`} x1="15" y1={y} x2="90" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
                  ))}

                  {/* Nairobi CBD label */}
                  <circle cx="52" cy="48" r="2" fill="rgba(163,255,71,0.3)" />
                  <text x="55" y="47" fontSize="2.5" fill="rgba(163,255,71,0.6)" fontFamily="sans-serif">CBD</text>

                  {/* Live zones */}
                  {live.map((area) => (
                    <g key={area.name}>
                      {/* Pulse ring */}
                      <circle
                        cx={area.x}
                        cy={area.y}
                        r="3"
                        fill="rgba(163,255,71,0.1)"
                        stroke="rgba(163,255,71,0.3)"
                        strokeWidth="0.5"
                        className={hovered === area.name ? "" : ""}
                      />
                      <circle
                        cx={area.x}
                        cy={area.y}
                        r="1.5"
                        fill="#a3ff47"
                        opacity="0.9"
                        onMouseEnter={() => setHovered(area.name)}
                        onMouseLeave={() => setHovered(null)}
                        style={{ cursor: "pointer" }}
                      />
                      {hovered === area.name && (
                        <g>
                          <rect
                            x={area.x - 8}
                            y={area.y - 8}
                            width="16"
                            height="5"
                            rx="1"
                            fill="#020814"
                            stroke="rgba(163,255,71,0.4)"
                            strokeWidth="0.3"
                          />
                          <text
                            x={area.x}
                            y={area.y - 4.5}
                            textAnchor="middle"
                            fontSize="2"
                            fill="#a3ff47"
                            fontFamily="sans-serif"
                          >
                            {area.name}
                          </text>
                        </g>
                      )}
                    </g>
                  ))}

                  {/* Coming soon zones */}
                  {coming.map((area) => (
                    <g key={area.name}>
                      <circle
                        cx={area.x}
                        cy={area.y}
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.5"
                        onMouseEnter={() => setHovered(area.name)}
                        onMouseLeave={() => setHovered(null)}
                        style={{ cursor: "pointer" }}
                      />
                      {hovered === area.name && (
                        <g>
                          <rect
                            x={area.x - 9}
                            y={area.y - 8}
                            width="18"
                            height="5"
                            rx="1"
                            fill="#020814"
                            stroke="rgba(245,158,11,0.4)"
                            strokeWidth="0.3"
                          />
                          <text
                            x={area.x}
                            y={area.y - 4.5}
                            textAnchor="middle"
                            fontSize="2"
                            fill="#f59e0b"
                            fontFamily="sans-serif"
                          >
                            {area.name} (soon)
                          </text>
                        </g>
                      )}
                    </g>
                  ))}
                </svg>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center gap-6 mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-volt-400" />
                  <span className="text-xs text-slate-400 font-body">Live Now</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400 opacity-60" />
                  <span className="text-xs text-slate-400 font-body">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lists */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live zones */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-volt-400" />
                <h3 className="font-display font-700 text-white text-lg">Live Now</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {live.map((area) => (
                  <div key={area.name} className="glass-volt rounded-xl px-3 py-2 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-volt-400 flex-shrink-0" />
                    <span className="font-body text-xs text-slate-200">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming soon */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber-400" />
                <h3 className="font-display font-700 text-white text-lg">Coming Soon</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {coming.map((area) => (
                  <div key={area.name} className="glass rounded-xl px-3 py-2 flex items-center gap-2 opacity-70">
                    <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span className="font-body text-xs text-slate-400">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notify me */}
            <div className="glass rounded-xl p-5">
              <p className="font-display font-700 text-white mb-1 text-sm">Not in your area yet?</p>
              <p className="text-slate-400 text-xs font-body mb-3">
                Register your interest — we'll notify you when we go live near you.
              </p>
              {notified ? (
                <p className="text-volt-400 text-sm font-display font-700 text-center py-2">
                  ✓ You're on the list!
                </p>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07XX XXX XXX"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-volt-400/50 font-body"
                  />
                  <button
                    onClick={() => phone && setNotified(true)}
                    className="px-4 py-2 bg-volt-400 text-navy-950 font-display font-700 text-xs rounded-lg hover:bg-volt-500 transition-all whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}