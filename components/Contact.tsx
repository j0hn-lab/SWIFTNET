// src/components/Contact.tsx
"use client";
import { useState, ChangeEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.phone || !form.message) {
      setError("Please fill in your name, phone, and message.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate submission (replace with real API call or Supabase insert)
    await new Promise((r) => setTimeout(r, 1200));
    setDone(true);
    setLoading(false);
  };

  const contacts = [
    {
      icon: Phone,
      title: "Call Us",
      lines: ["0700 000 000", "0711 000 000"],
      sub: "Available 24/7",
      color: "#a3ff47",
      href: "tel:+254700000000",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: ["+254 700 000 000"],
      sub: "Reply in under 5 min",
      color: "#25D366",
      href: "https://wa.me/254700000000",
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["info@swiftnet.co.ke", "support@swiftnet.co.ke"],
      sub: "Response within 2 hours",
      color: "#60a5fa",
      href: "mailto:info@swiftnet.co.ke",
    },
    {
      icon: MapPin,
      title: "Office",
      lines: ["Westlands Business Park", "Nairobi, Kenya"],
      sub: "Mon–Fri, 8am–6pm",
      color: "#f59e0b",
      href: "https://maps.google.com",
    },
  ];

  const subjects = [
    "New Connection Inquiry",
    "Technical Support",
    "Billing & Payments",
    "Coverage Question",
    "Business / Enterprise",
    "Other",
  ];

  return (
    <section id="contact" className="py-24 bg-navy-950 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
            Contact Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 font-body max-w-xl mx-auto text-lg">
            Questions about coverage, packages, or anything else? Our local team is here to help.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {contacts.map(({ icon: Icon, title, lines, sub, color, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex flex-col items-center text-center hover:border-volt-400/20 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${color}15` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <p className="font-display font-700 text-white text-sm mb-1">{title}</p>
              {lines.map((l) => (
                <p key={l} className="text-slate-300 text-xs font-body">{l}</p>
              ))}
              <p className="text-slate-500 text-xs font-body mt-1">{sub}</p>
            </a>
          ))}
        </div>

        {/* Form + info */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            {done ? (
              <div className="glass-volt rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="w-16 h-16 text-volt-400 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-700 text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 font-body">
                  Thanks for reaching out. We'll get back to you within 2 hours.
                </p>
              </div>
            ) : (
              <div className="glass rounded-2xl p-8">
                <h3 className="font-display font-700 text-white text-xl mb-6">Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {[
                    { name: "name", label: "Full Name *", type: "text", placeholder: "Jane Wanjiku" },
                    { name: "phone", label: "Phone Number *", type: "tel", placeholder: "0712 345 678" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-slate-400 text-xs font-display font-600 uppercase tracking-wider mb-2">
                        {f.label}
                      </label>
                      <input
                        name={f.name}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={(form as any)[f.name]}
                        onChange={handle}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-volt-400/50 font-body transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-slate-400 text-xs font-display font-600 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handle}
                      className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-volt-400/50 font-body transition-colors"
                    >
                      <option value="">Select subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-slate-400 text-xs font-display font-600 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-volt-400/50 font-body transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="mb-4 text-red-400 text-sm font-body">{error}</p>
                )}
                <button
                  onClick={submit}
                  disabled={loading}
                  className="w-full py-4 bg-volt-400 text-navy-950 font-display font-700 text-base rounded-xl hover:bg-volt-500 transition-all hover:shadow-[0_0_30px_rgba(163,255,71,0.35)] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Business hours + map placeholder */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-volt-400" />
                <h3 className="font-display font-700 text-white text-lg">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                  { day: "Sunday", hours: "Emergency support only" },
                  { day: "Technical Support", hours: "24/7 — Always available" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-slate-400 text-sm font-body">{day}</span>
                    <span className="text-slate-200 text-sm font-display font-600">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-volt-400" />
                <h3 className="font-display font-700 text-white text-lg">Our Office</h3>
              </div>
              <div
                className="w-full rounded-xl overflow-hidden mb-4 flex items-center justify-center"
                style={{ height: 160, background: "rgba(163,255,71,0.04)", border: "1px solid rgba(163,255,71,0.1)" }}
              >
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-volt-400 mx-auto mb-2" />
                  <p className="text-slate-400 text-xs font-body">Westlands Business Park</p>
                  <p className="text-slate-500 text-xs font-body">Nairobi, Kenya</p>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 rounded-xl text-sm font-display font-600 text-volt-400 border border-volt-400/20 hover:bg-volt-400/5 transition-all"
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="glass-volt rounded-2xl p-5">
              <p className="font-display font-700 text-white mb-1 text-sm">Prefer WhatsApp?</p>
              <p className="text-slate-400 text-xs font-body mb-3">
                Chat with our team instantly — fastest response guaranteed.
              </p>
              <a
                href="https://wa.me/254700000000?text=Hello!%20I%20have%20a%20question%20about%20SwiftNet."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-[#25D366] text-white font-display font-700 text-sm rounded-xl hover:bg-[#20b558] transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}