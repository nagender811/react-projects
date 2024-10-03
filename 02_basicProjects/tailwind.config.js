/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customShadow' : 'rgb(38, 57, 77) 0px 20px 30px -10px'
      }
    },
  },
  plugins: [],
}

