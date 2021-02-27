module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['montserrat', 'sans-serif'],
      display: ['montserrat', 'sans-serif'],
      body: ['montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#C0CE18',
          200: '#37393F',
        },
        secondary: {
          100: '#333',
          200: '#000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
