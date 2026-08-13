import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08080A",
          900: "#0C0C0F",
          800: "#141417",
          700: "#1D1D21",
          600: "#28282E",
          500: "#3A3A42",
        },
        paper: {
          100: "#F7F7F8",
          300: "#D8D8DC",
          500: "#9A9AA2",
        },
        crimson: {
          DEFAULT: "#E2242C",
          600: "#C11D24",
          400: "#F04A50",
          glow: "#FF4B52",
        },
      },
      fontFamily: {
        bn: ["var(--font-hind)", "Hind Siliguri", "sans-serif"],
        bnBody: ["var(--font-noto)", "Noto Sans Bengali", "sans-serif"],
        en: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
        glow: "0 0 60px -10px rgba(226,36,44,0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
