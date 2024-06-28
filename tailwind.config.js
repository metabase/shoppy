/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-family-sans)", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        "lighter-grey": "var(--color-lighter-grey)",
        "light-grey": "var(--color-light-grey)",
        "dark-grey": "var(--color-dark-grey)",
        "dark-orange": "var(--color-dark-orange)",
        "darker-orange": "var(--color-darker-orange)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
}
