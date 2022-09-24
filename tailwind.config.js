const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   me: {
      //     primary: "#054ada",
      //   },
      // },
      fontFamily: {
        slab: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
