/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/templates/**/*.{html, css}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

