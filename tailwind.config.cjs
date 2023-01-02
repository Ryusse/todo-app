/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
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
      },
      dark: {
        background: {
          paper: '#49454F',
          container: '#201F24',
        },
        divider: {
          main: 'rgba(230, 225, 229, 0.38)',
          light: 'rgba(230, 225, 229, 0.12)'
        },
        text: {
          primary: '#E6E1E5',
          secondary: 'rgba(230, 225, 229, 0.6)'
        },
        disabled: {
          background: '#79747E',
          text: '#b2b1b4'
        },
        primary: {
          main: '#9373FF',
          light: 'rgba(200, 191, 255, 0.08)',
        },
        secondary: {
          main: '#D9415E'
        }
      },
      light: {
        background: {
          paper: '#FAF9FB',
          container: '#FFFFFF',
        },
        text: {
          primary: '#1C1B1F',
          secondary: 'rgba(28, 27, 31, 0.6)'
        },
        disabled: {
          background: 'rgba(28, 27, 31, 0.12)',
          text: 'rgba(28, 27, 31, 0.38)'
        },
        divider: {
          main: 'rgba(28, 27, 31, 0.38)',
          light: 'rgba(28, 27, 31, 0.12)'
        },
        primary: {
          main: '#5946D2',
          light: 'rgba(89, 70, 210, 0.08)',
        },
        secondary: {
          main: '#F85977'
        }
      },
      feedback: {
        warning: {
          100: '#FFF2D1',
        },
        error: {
          300: 'rgba(248, 89, 119, 1)'
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
