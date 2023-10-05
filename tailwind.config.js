/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    ".node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'spaceGrotesk': ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        'lightGrayishViolet': 'hsl(270, 3%, 87%)',
        'darkGrayishViolet': 'hsl(279, 6%, 55%)',
        'verydarkGrayishViolet': 'hsl(278, 68%, 11%)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

