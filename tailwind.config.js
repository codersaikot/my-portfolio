// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        accent:  "#6c63ff",
        accent2: "#a78bfa",
        green:   "#4ade80",
        cyan:    "#22d3ee"
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["Fira Code", "monospace"]
      }
    }
  },
  plugins: []
};
