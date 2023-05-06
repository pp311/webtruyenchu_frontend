/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '360px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['Roboto', "sans-serif"],
      rubik: ['Rubik', "sans-serif"],
      montserrat: ['Montserrat', "sans-serif"],
      quicksand: ['Quicksand', "sans-serif"],
      bitter: ['Bitter', "serif"],
      literata: ['Literata', "serif"],
      robotoslab: ['"Roboto Slab"', "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
  daisyui: {
    themes: ["emerald", "halloween"],
  },
}
