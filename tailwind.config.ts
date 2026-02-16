import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aru: {
          orange: "#ff8c00",
          cyan: "#00ced1",
          "orange-dark": "#e67d00",
          "cyan-dark": "#00b4b7",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "system-ui"],
      },
      animation: {
        "fade-in": "fadeIn 0.35s ease-out forwards",
        "slide-up": "slideUp 0.35s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(255,140,0,0.08) 0%, rgba(0,206,209,0.08) 50%, transparent 100%)",
        "section-gradient":
          "linear-gradient(180deg, transparent 0%, rgba(0,206,209,0.04) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
