import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#020814",
          900: "#040f1e",
          800: "#071428",
          700: "#0a1d3a",
          600: "#0e2750",
        },
        volt: {
          400: "#a3ff47",
          500: "#7ddf00",
          600: "#5cb800",
        },
        amber: {
          isp: "#f59e0b",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(163,255,71,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(163,255,71,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(163,255,71,0.15) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;