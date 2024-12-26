/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      work: ["Work Sans", "serif"],
      serif: ["Source Serif 4", "serif"],
    },
    fontSize: {
      "heading-xl": ["2.2rem", { lineHeight: "3.2rem", fontWeight: "600" }],
      "heading-l": ["1.5rem", { lineHeight: "1.75rem", fontWeight: "600" }],
      "font-m": ["1.2rem", { lineHeight: "2rem" }],
      "font-normal": ["1rem", { lineHeight: "1.5", fontWeight: "500" }],
      "font-s": ["0.88rem", { lineHeight: "1.2rem", fontWeight: "500" }],
      "normal-weight": [{ fontWeight: "400" }],
    },
    colors: {
      primary: "#181A2A",
      grey: "#3B3C4A",
      "mid-grey": "#97989F",
      "light-grey": "#696A75",
      "extra-light-grey": "#F4F4F5",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
