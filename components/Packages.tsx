"use client";
import { Check, Zap, Star } from "lucide-react";

const packages = [
  {
    id: "kasi",
    name: "Kasi",
    swahili: "Speed",
    speed: "100",
    unit: "Mbps",
    price: "2,499",
    color: "from-slate-700/40 to-slate-800/40",
    accent: "#94a3b8",
    perks: [
      "Unlimited data",
      "Free Wi-Fi 6 router",
      "Free installation",
      "24/7 support",
      "Night Boost mode",
    ],
    popular: false,
  },
  {
    id: "nguvu",
    name: "Nguvu",
    swahili: "Power",
    speed: "250",
    unit: "Mbps",
    price: "4,999",
    color: "from-volt-400/10 to-volt-600/5",
    accent: "#a3ff47",
    perks: [
      "Unlimited data",
      "Free Wi-Fi 6 router",
      "Free installation",
      "Priority support",
      "Night Boost mode",
      "Static IP available",
    ],
    popular: true,
  },
  {
    id: "simba",
    name: "Simba",
    swahili: "Lion",
    speed: "500",
    unit: "Mbps",
    price: "7,499",
    color: "from-amber-500/10 to-orange-600/5",
    accent: "#f59e0b",
    perks: [
      "Unlimited data",
      "Free mesh Wi-Fi system",
      "Free installation",
      "Dedicated support line",
      "Night Boost mode",
      "Static IP included",
    ],
    popular: false,
  },
  {
    id: "dhoruba",
    name: "Dhoruba",
    swahili: "Storm",
    speed: "1",
    unit: "Gbps",
    price: "11,999",
    color: "from-purple-500/10 to-blue-600/5",
    accent: "#a78bfa",
    perks: [
      "Unlimited data",
      "Free enterprise router",
      "Free installation",
      "VIP support team",
      "Night Boost mode",
      "Static IP included",
      "Business SLA",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-navy-950 relative">
      {/* section glow */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
            Our Packages
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white mb-4">
            Speed for Every Need
          </h2>
          <p className="text-slate-400 font-body max-w-xl mx-auto text-lg">
            All plans include free installation, free router, and truly unlimited data. No throttling, no surprises.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl bg-gradient-to-b ${pkg.color} border ${
                pkg.popular
                  ? "border-volt-400/40"
                  : "border-white/8"
              } p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-volt-400 text-navy-950 text-xs font-display font-700 px-3 py-1 rounded-full">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-4">
                <p className="font-display text-lg font-700 text-white">
                  {pkg.name}
                </p>
                <p className="text-xs font-body" style={{ color: pkg.accent }}>
                  {pkg.swahili}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span
                    className="font-display text-5xl font-800"
                    style={{ color: pkg.accent }}
                  >
                    {pkg.speed}
                  </span>
                  <span className="font-display text-xl font-600 text-slate-400 mb-2">
                    {pkg.unit}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-body">
                  Download speed
                </p>
              </div>

              <div className="mb-6">
                <p className="text-slate-400 text-sm font-body mb-1">
                  From
                </p>
                <p className="font-display text-2xl font-700 text-white">
                  KES {pkg.price}
                  <span className="text-slate-500 text-sm font-400 ml-1">
                    /mo
                  </span>
                </p>
              </div>

              <ul className="flex-1 space-y-2.5 mb-8">
                {pkg.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-sm font-body text-slate-300"
                  >
                    <Check
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: pkg.accent }}
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href="#connect"
                className="block w-full text-center py-3 rounded-xl font-display font-700 text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: pkg.popular
                    ? "#a3ff47"
                    : `${pkg.accent}18`,
                  color: pkg.popular ? "#020814" : pkg.accent,
                  border: `1px solid ${pkg.accent}30`,
                }}
              >
                Get {pkg.name}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8 font-body">
          * All prices exclusive of applicable taxes. Promotional rates for new subscribers.
        </p>
      </div>
    </section>
  );
}