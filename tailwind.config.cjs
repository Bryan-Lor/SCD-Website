/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        heroDark: "linear-gradient(286.72deg, #000000 14.6%, #1C1C1C 66.64%)",
        hero: "linear-gradient(115.56deg, #E0DEDC 34.19%, #A4A2A0 89.34%)",
        yellowGrad:
          "linear-gradient(90deg, #FFB11B 0%, #FDC741 51.56%, #FFD84F 100%)",
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      body: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [],
};

module.exports = config;
