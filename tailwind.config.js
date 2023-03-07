/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      fontFamily: {
        'climate': ['"Climate Crisis"', 'cursive'],
      },
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '100%': { backgroundColor: theme('color.blue.700') },
          '0%': { backgroundColor: theme('colors.transparent') },
        },
        // fadeIn: {
        //   '50%': { backgroundColor: theme('colors.transparent') },
        //   '0%': { backgroundColor: theme('') },
        // },
      }),
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
