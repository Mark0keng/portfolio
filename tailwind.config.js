/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#30e3ca',
        dark: '#40514e'
      },
      screens: {
        '2xl': '1320px' 
      }
    },
  },
  plugins: [],
}
