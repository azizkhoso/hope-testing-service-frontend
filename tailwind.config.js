module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        xs: '0px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1500px',
        '2xl': '2100px',
      },
      colors: {
        primary: '#3c7daa',
        secondary: '#95251e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
