/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ashGray: "#333",
      },
      fontFamily: {
        ArialSansSerif: "Arial, sans-serif",
      },
      boxShadow: {
        shadow1: "10px 10px 10px 0px lightgray",
      },
    },
  },
  plugins: [],
};
