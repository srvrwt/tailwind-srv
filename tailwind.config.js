/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        dmsansr: ["DMSans-Regular", "sans-serif"],
      },
      colors: {
        darkBlue: "#0C072E",
      },
    },
  },
  plugins: [],
};
