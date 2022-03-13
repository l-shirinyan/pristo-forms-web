module.exports = {
  // important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        en: ['"Poppins"', 'sans-serif'],
        he: ['"Rubik"', '"Poppins"', 'sans-serif']
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-rtl'),
  ]
};