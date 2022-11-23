/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Source Sans Pro', 'sans-serif'],
        mono: ['monospace']
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
