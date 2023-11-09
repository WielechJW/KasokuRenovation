const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        teal: colors.teal,
        indigo: colors.indigo
      },
      minHeight: {
        '96': '24rem'
      },
      spacing: {
        '50': '12.5rem'
      }
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '1.5rem',
        'lg': '2rem',
        'xl': '2.5rem'
      }
    },
    fontFamily: {
      'dm': ['DM Sans', 'sans-serif'],
      'architect': ['Architect Daughter', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
