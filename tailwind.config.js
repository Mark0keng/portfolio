/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#30e3ca',
        dark: '#141E27'
      },
      screens: {
        '2xl': '1320px' 
      }
    },
  },
  plugins: [],
}
