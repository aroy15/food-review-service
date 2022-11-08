/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {    
      colors:{
        secondary:'#B01813',
        primary:'#94B800',
        darks:'#1F1F1F'
      }
    },
  },
  plugins: [],
}
