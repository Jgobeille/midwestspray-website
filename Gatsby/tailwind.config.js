// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./gatsby-ssr.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // A nice default centered .container with a little padding
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      aspectRatio: {
        none: 0,
        square: [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '21/9': [21, 9],
      },
    },
    // You'll probably use a font family for titles, and another for body text
    fontFamily: {
      display: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],

      //   body: ['Georgia', 'serif'],
    },
    // Add `top-100` and similar classes for absolute-positioned elements
    inset: {
      '0': 0,
      auto: 'auto',
      '50': '50%',
      '100': '100%',
    },
    extend: {
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(20rem) rotate(385deg)' },
        },
        spin1: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin2: {
          '0%': { transform: 'rotate(30deg)' },
          '100%': { transform: 'rotate(390deg)' },
        },
        spin3: {
          '0%': { transform: 'rotate(60deg)' },
          '100%': { transform: 'rotate(420deg)' },
        },
        float: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-20px)' },
          '100%': { transform: 'translatey(0px)' },
        },
        'float-with-shadow': {
          '0%': {
            boxShadow: '0 0px 15px 0px rgba(0, 0, 0, 1.0)',
            transform: 'translatey(0px)',
          },
          '50%': {
            boxShadow: '0 50px 20px 0px rgba(0, 0, 0, 0.6)',
            transform: 'translatey(-20px)',
          },
          '100%': {
            boxShadow: '0 5px 15px 0px rgba(0, 0, 0, 1)',
            transform: 'translatey(0px)',
          },
        },
        scroll: {
          '100%': { transform: 'translateX(-69%)' },
        },
      },
      animation: {
        roll: 'roll 3s ease-in-out infinite',
        spin1: 'spin1 6s linear infinite',
        spin2: 'spin2 6s linear infinite',
        spin3: 'spin3 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-with-shadow': 'float-with-shadow 6s ease-in-out infinite',
        scroll: 'scroll 20s linear infinite',
      },

      margin: {
        '-50': '-50vw',
      },
      width: {
        '3800': '3800px',
      },
      backgroundImage: (theme) => ({
        test:
          "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/collage.jpg')",
      }),

      fontFamily: {
        main: ['pattaya', 'sans-serif'],
        secondary: ['prompt', 'sans-serif'],
        alt: ['Oswald', 'sans-serif'],
      },
      // Prettier box shadows: https://box-shadows.co/
      boxShadow: {
        'bs-1': '0px 1px 0px rgba(17,17,26,0.1)',
        'bs-2':
          '0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1);',
        'bs-3': '0px 0px 16px rgba(17,17,26,0.1)',
        'bs-4':
          '0px 4px 16px rgba(17,17,26,0.05), 0px 8px 32px rgba(17,17,26,0.05)',
        'bs-5':
          '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 32px rgba(17,17,26,0.05)',
        'bs-6':
          '0px 1px 0px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 48px rgba(17,17,26,0.1)',
        'bs-7':
          '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)',
        'bs-8':
          '0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1), 0px 24px 80px rgba(17,17,26,0.1)',
      },
      // You'll probably have a primary and secondary color
      colors: {
        primary: '#aa2415ff',
        secondary: '#F5B6AF',
        'celadon-blue': {
          light: '#2D9BCA',
          default: '#247BA0',
          dark: '#1B5B76',
        },
        black: '#110807ff',
        'ghost-white': '#f4f4f9ff',
        'turquoise-blue': {
          DEFAULT: '#45f0df',
          100: '#dafcf9',
          200: '#b5f9f2',
          300: '#8ff6ec',
          400: '#6af3e5',
          500: '#45f0df',
          600: '#37c0b2',
          700: '#299086',
          800: '#1c6059',
          900: '#0e302d',
        },
        'minion-yellow': {
          DEFAULT: '#fae24c',
          100: '#fef9db',
          200: '#fdf3b7',
          300: '#fcee94',
          400: '#fbe870',
          500: '#fae24c',
          600: '#c8b53d',
          700: '#96882e',
          800: '#645a1e',
          900: '#322d0f',
        },

        // Overwrite default grays with a neutral shade (defaults are blue-ish)
        gray: {
          DEFAULT: '#C5C5C5',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#F8F8F8',
          '400': '#DFDFDF',
          '500': '#C5C5C5',
          '600': '#ACACAC',
          '700': '#929292',
          '800': '#797979',
          '900': '#5F5F5F',
        },
        brown: {
          light: '#A48774',
          default: '#6C4E32',
        },

        beige: '#F3E8D9',
        orange: {
          light: '#F89721',
          default: '#E56B07',
          dark: '#B66008',
        },
      },
      // We all need that container that is almost-but-not-quite full height
      height: {
        'almost-screen': '80vh',
      },
      minHeight: {
        'almost-screen': '80vh',
      },
      // Utilities to lock an image or video to a fixed aspect ratio
      // (https://github.com/tailwindcss/designing-with-tailwindcss/tree/master/02-designing-an-image-card/06-locking-images-to-a-fixed-aspect-ratio)
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '9/16': '56.25%',
        '10/16': '62.5%',
      },
      // https://twitter.com/mjsarfatti/status/1263432797039067136
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.25,0.02,0,1)',
      },
    },
  },
  variants: {
    // In case you need to reset the margin on the last element "mr-2 last:mr-0"
    margin: ['responsive', 'last'],
    aspectRatio: ['responsive'],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
