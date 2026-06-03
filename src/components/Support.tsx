"use client";
// src/components/Support.tsx
import { useState } from "react";
import {
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Wifi,
  Router,
  CreditCard,
  Settings,
  AlertCircle,
} from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    icon: Settings,
    color: "#a3ff47",
    questions: [
      {
        q: "How long does installation take?",
        a: "Installation typically takes 2–4 hours. Our certified technicians handle everything from fibre cable laying to router setup and speed testing. You don't lift a finger.",
      },
      {
        q: "What do I need to prepare before the technician arrives?",
        a: "Just ensure someone is home and that there's easy access to the exterior wall where we'll run the cable. We'll bring all equipment including the router.",
      },
      {
        q: "Is there a contract or lock-in period?",
        a: "No lock-in contracts. You pay month-to-month and can cancel anytime with 30 days' notice. We believe in earning your loyalty every month.",
      },
    ],
  },
  {
    category: "Speed & Performance",
    icon: Wifi,
    color: "#60a5fa",
    questions: [
      {
        q: "Why is my speed lower than my plan?",
        a: "Speeds can vary based on Wi-Fi signal quality, device capabilities, or network congestion. For best results, test speeds via a wired LAN connection. If you're consistently below 80% of your plan speed, contact us.",
      },
      {
        q: "What is Night Boost Mode?",
        a: "Night Boost automatically unlocks enhanced download speeds between 11pm–6am. It's perfect for large downloads, system updates, and late-night gaming or streaming.",
      },
      {
        q: "How many devices can I connect at once?",
        a: "Our Wi-Fi 6 router supports 50+ simultaneous devices. For large homes or offices, we recommend our Simba or Dhoruba plans for the best multi-device experience.",
      },
    ],
  },
  {
    category: "Billing & Payments",
    icon: CreditCard,
    color: "#f59e0b",
    questions: [
      {
        q: "How do I pay my monthly bill?",
        a: "We accept M-Pesa (Paybill: 123456), card payments, and bank transfers. You'll receive an invoice by SMS and email 5 days before your due date.",
      },
      {
        q: "What happens if I miss a payment?",
        a: "We'll send a reminder after 3 days. After 7 days, speeds may be reduced. After 14 days, service is suspended. Contact us if you're facing difficulties — we're happy to arrange a payment plan.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes! Plan changes take effect on your next billing cycle. There are no penalties for changing plans.",
      },
    ],
  },
  {
    category: "Technical Issues",
    icon: AlertCircle,
    color: "#f87171",
    questions: [
      {
        q: "My internet is down — what should I do?",
        a: "First, restart your router (unplug for 30 seconds). If still down, check our outage status page. If no reported outage, call our 24/7 support line on 0700 000 000.",
      },
      {
        q: "How do I reset my router?",
        a: "Hold the reset button on the back of the router for 10 seconds until the lights flash. Note: this will clear your custom Wi-Fi name and password. Our support team can help you set it up again.",
      },
      {
        q: "What does the flashing red light on my router mean?",
        a: "A flashing red light usually means a fibre signal loss. This could be a cable issue or network outage. Call our technical team on 0700 000 000 and we'll dispatch a technician if needed.",
      },
    ],
  },
];

const troubleshootingSteps = [
  { step: "1", title: "Restart your router", desc: "Unplug for 30 seconds, then plug back in. Wait 2 minutes." },
  { step: "2", title: "Check the fibre cable", desc: "Ensure the green fibre cable at the back of the router is firmly connected." },
  { step: "3", title: "Test on multiple devices", desc: "If only one device is affected, the issue may be device-specific." },
  { step: "4", title: "Run a speed test", desc: "Visit fast.com or speedtest.net and compare with your plan speed." },
  { step: "5", title: "Contact support", desc: "If issues persist, call 0700 000 000. We're available 24/7." },
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section id="support" className="py-24 bg-navy-900 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
            Help Centre
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white mb-4">
            We've Got You Covered
          </h2>
          <p className="text-slate-400 font-body max-w-xl mx-auto text-lg">
            Find answers fast, or reach our local team any time — day or night.
          </p>
        </div>

        {/* Contact channels */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: Phone,
              title: "Call Us",
              detail: "0700 000 000",
              sub: "Available 24/7",
              href: "tel:+254700000000",
              color: "#a3ff47",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              detail: "+254 700 000 000",
              sub: "Typical reply: under 5 min",
              href: "https://wa.me/254700000000",
              color: "#25D366",
            },
            {
              icon: Mail,
              title: "Email",
              detail: "support@swiftnet.co.ke",
              sub: "Reply within 2 hours",
              href: "mailto:support@swiftnet.co.ke",
              color: "#60a5fa",
            },
          ].map(({ icon: Icon, title, detail, sub, href, color }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-volt-400/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div>
                <p className="font-display font-700 text-white text-sm">{title}</p>
                <p className="font-body text-sm text-slate-300">{detail}</p>
                <p className="font-body text-xs text-slate-500">{sub}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Quick troubleshooter */}
        <div className="glass rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Router className="w-6 h-6 text-volt-400" />
            <h3 className="font-display font-700 text-white text-xl">Quick Troubleshooter</h3>
          </div>
          <div className="grid sm:grid-cols-5 gap-4">
            {troubleshootingSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-volt-400/10 border border-volt-400/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display font-700 text-volt-400 text-sm">{s.step}</span>
                </div>
                <p className="font-display font-700 text-white text-xs mb-1">{s.title}</p>
                <p className="text-slate-500 text-xs font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <h3 className="font-display text-2xl font-700 text-white text-center mb-10">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          {faqs.map(({ category, icon: Icon, color, questions }) => (
            <div key={category} className="glass rounded-2xl overflow-hidden">
              <div
                className="flex items-center gap-3 px-6 py-4 border-b border-white/5"
                style={{ background: `${color}08` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
                <h4 className="font-display font-700 text-white text-sm">{category}</h4>
              </div>
              <div>
                {questions.map(({ q, a }) => {
                  const key = `${category}-${q}`;
                  const isOpen = openFaq === key;
                  return (
                    <div key={q} className="border-b border-white/5 last:border-0">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : key)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/2 transition-colors"
                      >
                        <span className="font-body text-sm text-slate-200 pr-4">{q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-volt-400" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-400 text-sm font-body leading-relaxed">{a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 font-body mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-volt-400 text-navy-950 font-display font-700 text-sm rounded-xl hover:bg-volt-500 transition-all hover:scale-105"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}