/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      disabled: '#C4C4C4',
      placeholder: '#9C9C9C',
      primary: {
        grey: {
          900: '#FFFFFF',
          800: '#F1F1F1',
          700: '#D9D9D9',
          600: '#ABABAB',
          500: '#828282',
          400: '#4A4A4A',
          300: '#253244',
          200: '#1E1E1E',
          100: '#000000',
        },
        red: {
          300: '#F85977',
        },
        purple:{
          500: '#5946D2'
        }
      },
      background:{
        dark: {
          paper:'#201F24'
        },
        light: {
          paper:'#FFFFFF'
        }
      },
      divider:{
        dark:'rgba(230, 225, 229, 0.12)',
        light: 'rgba(28, 27, 31, 0.12)'
      },
      feedback: {
        warning: {
          100: '#FFF2D1',
        },
        success: {
          200: '#3A9900',
          100: '#D3F4D3',
        },
      },

    },
  },
  plugins: [],
};
