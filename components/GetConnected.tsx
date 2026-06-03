"use client";
import { ChangeEvent, useState } from "react";
import { supabase } from "../lib/supabase";
import { CheckCircle, Loader2 } from "lucide-react";

const areas = [
  "Kilimani", "Kileleshwa", "Lavington", "Westlands",
  "Parklands", "Langata", "South B & C", "Upperhill", "Other",
];

const pkgs = [
  "Kasi — 100Mbps @ KES 2,499",
  "Nguvu — 250Mbps @ KES 4,999",
  "Simba — 500Mbps @ KES 7,499",
  "Dhoruba — 1Gbps @ KES 11,999",
];

export default function GetConnected() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    area: "",
    package: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handle = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async () => {
    if (!form.full_name || !form.phone || !form.area || !form.package) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      if (!supabase) {
        throw new Error("Supabase is not configured.");
      }
      const { error: sbErr } = await supabase.from("leads").insert([form]);
      if (sbErr) throw sbErr;
      setDone(true);
    } catch {
      setError("Something went wrong. Please call us directly on 0700 000 000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="connect" className="py-24 bg-navy-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt-400/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-volt-400 font-display text-xs font-600 tracking-widest uppercase mb-3">
            Get Started
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-800 tracking-tight text-white mb-4">
            Get Connected Today
          </h2>
          <p className="text-slate-400 font-body max-w-lg mx-auto text-lg">
            Fill in your details and our team will call you within 2 hours to confirm your connection date.
          </p>
        </div>

        {done ? (
          <div className="glass-volt rounded-2xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-volt-400 mx-auto mb-4" />
            <h3 className="font-display text-2xl font-700 text-white mb-2">
              You're on the list!
            </h3>
            <p className="text-slate-400 font-body">
              Our team will call you within 2 hours. Get ready for blazing-fast internet!
            </p>
          </div>
        ) : (
          <div className="glass rounded-2xl p-8 sm:p-10">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: "full_name", label: "Full Name *", type: "text", placeholder: "Jane Wanjiku" },
                { name: "phone", label: "Phone Number *", type: "tel", placeholder: "0712 345 678" },
                { name: "email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
              ].map((f) => (
                <div key={f.name} className={f.name === "full_name" ? "sm:col-span-1" : ""}>
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
                  Your Area *
                </label>
                <select
                  name="area"
                  value={form.area}
                  onChange={handle}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-volt-400/50 font-body transition-colors"
                >
                  <option value="">Select area</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-400 text-xs font-display font-600 uppercase tracking-wider mb-2">
                  Preferred Package *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkgs.map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-3 glass rounded-xl px-4 py-3 cursor-pointer transition-all border ${
                        form.package === p
                          ? "border-volt-400/50 bg-volt-400/5"
                          : "border-transparent hover:border-white/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={p}
                        checked={form.package === p}
                        onChange={handle}
                        className="accent-volt-400"
                      />
                      <span className="text-sm font-body text-slate-300">
                        {p}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {error && (
              <p className="mt-4 text-red-400 text-sm font-body text-center">
                {error}
              </p>
            )}

            <button
              onClick={submit}
              disabled={loading}
              className="mt-8 w-full py-4 bg-volt-400 text-navy-950 font-display font-700 text-base rounded-xl hover:bg-volt-500 transition-all duration-200 hover:shadow-[0_0_30px_rgba(163,255,71,0.35)] disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Request Connection →"
              )}
            </button>

            <p className="text-slate-600 text-xs text-center mt-4 font-body">
              We'll call you within 2 hours. Or reach us directly:{" "}
              <a href="tel:+254700000000" className="text-volt-400 hover:underline">
                0700 000 000
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}