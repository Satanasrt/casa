/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-primary': '#1a1b26',
        'game-secondary': '#24283b',
        'game-accent': '#7aa2f7'
      }
    },
  },
  plugins: [],
}