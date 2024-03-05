/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontsize:{
      xs:['12px', '16px'],
      sm:['14px', '20px'],
      base:['16px', '19.5px'],
      lg:['18px', '21.94px'],
      xl:['20px', '24.38px'],
      '2xl':['18px', '21.94px'],
      '3xl':['28px', '50px'],
      '4xl':['48px', '58px'],
      '8xl':['96px', '106px'],
    },
    extend: {
      fontFamily: {
        Palanquin: ['Palanquin', 'sans-serif'],
        Montserrah: ['Montserrah', 'sans-serif'],
      },
      colors: {
        'primary': '#ECEEFF',
        'color-red': '#FF6452',
        'slate-gray': '#6D6D6D',
        'pale-blue': '#F5F6FF',
        'white-400': ' rgba(225,225,225, 0.80)',
      },
      boxShadow:{

      }
    },
  },
  plugins: [],
}

