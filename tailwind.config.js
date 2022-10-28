/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Overpass', 'sans-serif'],
        mono: ['Overpass Mono', 'monospace']
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
