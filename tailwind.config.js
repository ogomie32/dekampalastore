/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kampala: {
          primary: '#2F7B3B',
          'primary-light': '#DFF3E2',
          blue: '#1778F2',
          gray: '#504D4D',
        }
      }
    },
  },
  plugins: [],
}