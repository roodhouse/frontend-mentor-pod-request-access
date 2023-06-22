/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      darkBlue: '#121725',
      medBlue: '#2C344B',
      green: '#54E6AF',
      lightGreen: '#B3FFE2',
      lightPurple: '#C2CBE5',
      medPurple: '#5A668A',
      warning: '#FB3E3E'
    }
  },
  plugins: [],
}