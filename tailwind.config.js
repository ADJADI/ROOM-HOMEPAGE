/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        DarkGray: "hsl(0, 0%, 63%)",
        VeryDarkGray: "hsl(0, 0%, 27%)",
      },
      gridTemplateColumns: {
        quatro: "32% 32% 10% 26%",
      },
      gridTemplateRows: {
        duo: "65% 35%",
      },
    },
  },
  plugins: [],
};
