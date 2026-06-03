import { Zap, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-volt-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-navy-950" fill="currentColor" />
              </div>
              <span className="font-display font-800 text-xl">
                Swift<span className="text-volt-400">Net</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm font-body leading-relaxed mb-5">
              Kenya's boldest fibre internet provider. Built for speed, built for reliability, built for you.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-volt-400 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Products",
              links: ["Home Fibre", "Business Fibre", "Enterprise", "Wireless"],
            },
            {
              title: "Company",
              links: ["About Us", "Blog", "Careers", "Press"],
            },
            {
              title: "Support",
              links: ["Help Centre", "Coverage Map", "Outage Status", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-700 text-white text-sm mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-slate-500 text-sm font-body hover:text-volt-400 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-body">
            © {new Date().getFullYear()} SwiftNet Kenya Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Acceptable Use"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-slate-600 text-xs font-body hover:text-slate-400 transition-colors"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}