/** @type {import('tailwindcss').Config} */
export default {
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
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
}
