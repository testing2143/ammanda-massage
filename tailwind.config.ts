import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#F4FAF4",
          100: "#E6F2E6",
          200: "#C6DEC6",
          300: "#A8CCA8",
          400: "#8FBC8F",
          500: "#709D70",
          600: "#567C56",
          700: "#406140",
          800: "#314931",
          900: "#223422",
          DEFAULT: "#8FBC8F"
        },
        cream: "#F5F0E8",
        sand: "#E8DDCC",
        gold: "#C9A96E",
        bark: "#6A5442",
        ink: "#2D2D2D",
        mist: "#FAF8F4"
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(93, 77, 61, 0.38)",
        glow: "0 28px 90px -38px rgba(201, 169, 110, 0.5)"
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
