/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        poke: {
          black: '#0d0d0d',
          blue: '#3490dc',
          brown: '#8b4513',
          gray: '#6c757d',
          green: '#38c172',
          pink: '#e83e8c',
          purple: '#6f42c1',
          red: '#e3342f',
          white: '#f8f9fa',
          yellow: '#ffed4a',
        }
      }
    },
  },
  plugins: [],
};
