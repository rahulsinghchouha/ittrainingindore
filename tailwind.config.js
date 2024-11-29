/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      translate: {
        '3d-x': '-1923.42px',
      },
      boxShadow:{
        imgShadow:'0px 10px 20px rgba(0,0,0,0.2) ',
      }
    },
  },
  plugins: [],
}

