/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      colors: {
        primary: "#FF8000",
        "lighter-grey": "#F8F7F7",
        "light-grey": "#ADABA9",
        "dark-grey": "#4C4A48",
        "dark-orange": "#944A00",
        "darker-orange": "#572B00",
        "dark-background": "#212121",
      },
    },
  },
  plugins: [],
}
