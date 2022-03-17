module.exports = {
  // important: true,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'back-gray': '#F5F8FA',
        'font-brown': '#2E2C2C',
        'light-pink': '#F88C90',
        'midnight': '#190E66',
        'num-gray': '#C5CFDD',
        'green-complete': '#8AE9C5',
        'green-pin': '#8BECC8',
        'cyan': '#C1DBFF',
        'black': '#000000',
        'lg-btn': '#CED4DA',
        'progress-btn': '#8CBAF8',
        'lg-dropdown': '#41414129',
        'selected-dropdown': '#C1DBFF',
        'dark-selected-dropdown': '#696772',
        'dark-header': '#1F1D2C',
        'dark-back': '#2F2D3B',
        'dark-open-btn': '#7B95FF',
        'dark-num-btn': '#A5C3ED',
        'dark-num': '#0A336B',
        'dark-compete': '#9EC8B8',
        'guideline': '#EBB32E',
      },
      fontFamily: {
        en: ['"Poppins"', 'sans-serif'],
        he: ['"Rubik"', '"Poppins"', 'sans-serif']
      },
    }
  },
  variants: {
    extend: {}
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tailwindcss-rtl'),
    require('tw-elements/dist/plugin'),
  ]
};