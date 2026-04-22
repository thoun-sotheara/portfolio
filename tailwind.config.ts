import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace"],
      },
      colors: {
        // Core palette
        void: "#050505",
        surface: {
          DEFAULT: "#111111",
          raised: "#161616",
          overlay: "#1c1c1c",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.06)",
          subtle: "rgba(255,255,255,0.04)",
          strong: "rgba(255,255,255,0.12)",
        },
        // Brand accent — electric indigo/violet
        accent: {
          DEFAULT: "#7c6ee0",
          muted: "rgba(124,110,224,0.15)",
          glow: "rgba(124,110,224,0.35)",
        },
        // Text hierarchy
        ink: {
          primary: "rgba(255,255,255,0.92)",
          secondary: "rgba(255,255,255,0.55)",
          tertiary: "rgba(255,255,255,0.28)",
          accent: "#7c6ee0",
        },
      },
      letterSpacing: {
        display: "0.08em",
        headline: "0.04em",
        label: "0.12em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "drift-slow": "drift 20s ease-in-out infinite",
        "drift-reverse": "driftReverse 25s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "grain": "grain 8s steps(10) infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1.05)" },
          "33%": { transform: "translate(-3%, -4%) scale(1.08)" },
          "66%": { transform: "translate(4%, -2%) scale(1.06)" },
        },
        driftReverse: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1.1)" },
          "33%": { transform: "translate(5%, 3%) scale(1.07)" },
          "66%": { transform: "translate(-3%, 5%) scale(1.12)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 1%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(4%, -2%)" },
          "50%": { transform: "translate(-3%, 2%)" },
          "60%": { transform: "translate(2%, -4%)" },
          "70%": { transform: "translate(-4%, 1%)" },
          "80%": { transform: "translate(1%, 3%)" },
          "90%": { transform: "translate(3%, -1%)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "circ-out": "cubic-bezier(0, 0.55, 0.45, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
