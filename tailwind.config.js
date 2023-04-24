/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: "#49c5b6",
      black: "#000",
      fadedBlack: "#1D1D1D",
      white: "hsl(75, 13%, 94%)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      heading: "2.5rem",
      icons: "2rem",
      regular: "1.2rem",
    },
  },
  plugins: [],
};
