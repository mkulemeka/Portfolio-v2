/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: "#49c5b6",
      black: "#000",
      red: "#FA370C",
      grey: "#B0B0B0",
      fadedBlack: "#212224",
      fadedMoreBlack: "#343639",
      white: "hsl(75, 13%, 94%)",
      whitey: "#FFFFFF",
      componentWhitey: "#FCFBFC",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      heading: "4rem",
      subHeading: "2.75rem",
      icons: "2rem",
      regular: "1.15rem",
    },
    fontWeight: {
      regular: 400,
      bold: 500,
      exbold: 600,
    },
  },
  plugins: [],
};
