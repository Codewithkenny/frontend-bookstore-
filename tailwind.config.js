/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], // Removed extra comma here
  theme: {
    extend: {
      colors: {
        'primary': '#FFB200',
        'secondary': '#EB5B00',
        'blackBG': '#F3F3F3',
        'Accent': '#E4003A'
      },
      fontFamily: {
        'primary' : ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
