/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e3df8f',
          DEFAULT: '#bdbb7a',
          dark: '#8a8858',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 70% 30%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 