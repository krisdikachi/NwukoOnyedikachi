/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["/index.html,input.css,script.js"],
  theme: {
    spacing: {
      97: '200px'},


    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'dark':'#144272',
      'navy-200':'#0a2647a2',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      aerial:['Arial', 'Helvetica', 'sans-serif'],
      
      
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
