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
        'app-green': colors.green[500],
        'app-red': colors.red[500],
      },
      fontFamily: {
        'app-rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'app-display': ['calc(144rem/16)', { 'font-weight': 500, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-heading-l-bold': ['calc(64rem/16)', { 'font-weight': 500, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-heading-l-regular': ['calc(64rem/16)', { 'font-weight': 300, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-heading-m': ['calc(36rem/16)', { 'font-weight': 500, 'line-height': '120%', 'letter-spacing': '0' }],
        'app-heading-s': ['calc(28rem/16)', { 'font-weight': 500, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-body-m': ['calc(24rem/16)', { 'font-weight': 400, 'line-height': '150%', 'letter-spacing': '0' }],
        'app-body-s': ['calc(20rem/16)', { 'font-style': 'italic', 'line-height': '150%', 'letter-spacing': '0' }],
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    prefix: 'daisy-',
  }
}

