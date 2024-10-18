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
      },
      keyframes: {
        animateModal: {
          '0%': { top: '-200px', opacity: '0' },
          '100%': { top: '0', opacity: '1' },
        },
      },
      animation: {
        'modal-in': 'animateModal 0.5s forwards',
      },
    },
  },
  plugins: [],
}

