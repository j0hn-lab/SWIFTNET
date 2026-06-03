import {
  Zap,
  Shield,
  Headphones,
  Recycle,
  Wifi,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Pure Fibre Optic",
    desc: "100% fibre to the home — no copper, no degradation over distance. The speed you pay for is the speed you get.",
    accent: "#a3ff47",
  },
  {
    icon: Shield,
    title: "99.9% Uptime SLA",
    desc: "Our network is engineered with redundancy at every node. When we say uptime, we back it with a written service agreement.",
    accent: "#f59e0b",
  },
  {
    icon: Headphones,
    title: "Local 24/7 Support",
    desc: "A real Kenyan team, available around the clock. No bots, no overseas call centres — just people who know the network.",
    accent: "#60a5fa",
  },
  {
    icon: Wifi,
    title: "Wi-Fi 6 Ready",
    desc: "Every plan ships with a free Wi-Fi 6 router — handle 50+ devices without breaking a sweat. Perfect for modern homes.",
    accent: "#a3ff47",
  },
  {
    icon: TrendingUp,
    title: "Night Boost Mode",
    desc: "Off-peak hours automatically unlock enhanced speeds for downloads, updates, and late-night gaming sessions.",
    accent: "#f59e0b",
  },
  {
    icon: Recycle,
    title: "Green Network",
    desc: "We plant 10 trees for every kilometre of fibre laid, and run Kenya's first ISP e-waste recycling programme.",
    accent: "#4ade80",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-400/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
              Why SwiftNet
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white mb-6 leading-tight">
              Built Different.
              <br />
              <span className="text-gradient">Proven Reliable.</span>
            </h2>
            <p className="text-slate-400 font-body text-lg leading-relaxed mb-8">
              We didn't enter Kenya's market to play it safe. SwiftNet was engineered from the ground up to out-perform every legacy ISP on speed, support, and value.
            </p>

            {/* Big stat */}
            <div className="flex gap-8">
              {[
                { value: "15K+", label: "Happy customers" },
                { value: "8", label: "Nairobi zones" },
                { value: "<20ms", label: "Average latency" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-800 text-gradient">
                    {s.value}
                  </p>
                  <p className="text-slate-500 text-sm font-body">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc, accent }) => (
              <div
                key={title}
                className="glass rounded-xl p-5 group hover:border-volt-400/20 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${accent}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="font-display font-700 text-white text-sm mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 text-xs font-body leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}