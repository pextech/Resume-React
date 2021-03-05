module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['nunito', 'sans-serif'],
      display: ['montserrat', 'sans-serif'],
      body: ['nunito', 'sans-serif'],
    },
    screens: {
      xs: { min: '200px', max: '475px' },
      xsm: { min: '320px', max: '700px' },
      xmd: { min: '720', max: '1200px' },
    },
    extend: {
      colors: {
        primary: {
          100: '#C0CE18',
          200: '#1C2834',
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
