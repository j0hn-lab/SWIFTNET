// src/components/AboutUs.tsx
import { Zap, Users, MapPin, Award, TrendingUp, Heart } from "lucide-react";

const milestones = [
  { year: "2020", event: "SwiftNet founded in Westlands, Nairobi" },
  { year: "2021", event: "First 1,000 customers connected across Kilimani & Lavington" },
  { year: "2022", event: "Expanded to 5 zones, launched Business Fibre" },
  { year: "2023", event: "Reached 10,000 active subscribers, introduced 1Gbps plans" },
  { year: "2024", event: "Launched Night Boost & Wi-Fi 6 routers on all plans" },
  { year: "2025", event: "15,000+ customers — expanding to 16 zones" },
];

const team = [
  {
    name: "David Kariuki",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote: "We built SwiftNet because Nairobi deserved better.",
  },
  {
    name: "Amina Hassan",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "Our network is engineered for tomorrow, not yesterday.",
  },
  {
    name: "James Mwangi",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote: "Speed means nothing without reliability behind it.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Speed First",
    desc: "We never throttle. The speed you pay for is the speed you get — every hour of every day.",
    color: "#a3ff47",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    desc: "Our support team is Kenyan, local, and available 24/7. Real people who understand your needs.",
    color: "#f87171",
  },
  {
    icon: Award,
    title: "Transparency",
    desc: "No hidden fees, no surprise charges. Our pricing is straightforward and our SLAs are written in plain English.",
    color: "#f59e0b",
  },
  {
    icon: TrendingUp,
    title: "Always Improving",
    desc: "We invest continuously in our network infrastructure to stay ahead of your growing needs.",
    color: "#60a5fa",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-navy-950 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
            Our Story
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white mb-6">
            Built in Nairobi.
            <br />
            <span className="text-gradient">Built for Nairobi.</span>
          </h2>
          <p className="text-slate-400 font-body max-w-2xl mx-auto text-lg leading-relaxed">
            SwiftNet was born from frustration — tired of slow, unreliable, overpriced internet that didn't serve Kenyans the way they deserved. We set out to build a different kind of ISP: fast, honest, and community-focused.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { icon: Users, value: "15,000+", label: "Happy Customers", color: "#a3ff47" },
            { icon: MapPin, value: "8 Zones", label: "Live Coverage", color: "#60a5fa" },
            { icon: Zap, value: "99.9%", label: "Network Uptime", color: "#f59e0b" },
            { icon: Award, value: "5 Years", label: "Serving Nairobi", color: "#c084fc" },
          ].map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="glass rounded-2xl p-6 text-center group hover:border-volt-400/20 transition-all">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <p className="font-display text-3xl font-800 text-white mb-1">{value}</p>
              <p className="text-slate-500 text-sm font-body">{label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-700 text-white text-center mb-10">
            What We Stand For
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass rounded-xl p-6 hover:border-volt-400/20 transition-all group">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h4 className="font-display font-700 text-white text-sm mb-2">{title}</h4>
                <p className="text-slate-500 text-xs font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="font-display text-2xl font-700 text-white text-center mb-10">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-volt-400/20 hidden md:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass rounded-xl p-4 inline-block hover:border-volt-400/20 transition-all">
                      <span className="text-volt-400 font-display font-700 text-sm">{m.year}</span>
                      <p className="text-slate-300 text-sm font-body mt-1">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-volt-400/10 border border-volt-400/30 items-center justify-center flex-shrink-0 z-10">
                    <div className="w-3 h-3 bg-volt-400 rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="font-display text-2xl font-700 text-white text-center mb-10">
            Meet the Leadership
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-2xl p-6 text-center hover:border-volt-400/20 transition-all group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border-2 border-volt-400/20 group-hover:border-volt-400/40 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-700 text-white text-sm mb-1">{member.name}</h4>
                <p className="text-volt-400 text-xs font-body mb-3">{member.role}</p>
                <p className="text-slate-500 text-xs font-body italic leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}