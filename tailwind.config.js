/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    backgroundImage: {
      bgImg: 'url("https://tihalt.com/wp-content/uploads/2018/03/hero-bg-1.jpg")'
    }
  },
  plugins: [],
}