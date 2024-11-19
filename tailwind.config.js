/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'
import daisyui from 'daisyui'
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'app-tablet': '768px',
        'app-desktop': '1440px',
      },
      backgroundImage: {
        'app-pattern-mobile-light': "url('/src/assets/images/pattern-background-mobile-light.svg')",
      },
      colors: {
        'app-light-grey': colors.gray[100],
        'app-purple': colors.purple[500],
      },
      fontFamily: {
        'app-rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    prefix: 'daisy-',
  }
}

