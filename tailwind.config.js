/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      xl:'1280px',
      lg: '1076px',
      md: '815px',
      sm: '400px'
    },
    fontFamily: {
      'body': 'Gilroy'},
      boxShadow:{
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    extend: {
      
     
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
        'yellow': '#fde047'
      },
    },
  },
  plugins: [],
}

