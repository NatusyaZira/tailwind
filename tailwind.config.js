/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
    darkMode: 'selector',
  theme: {
    debugScreens: {
      position: ['top', 'left'],
      },
    extend: {
      fontFamily: {
        newheadline: ['Oswald']
        },
        colors: {
          mainColor: '#212f49'
          }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ]
}

