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
        'app-purple': '#A729F5',
        'app-dark-navy': '#313E51',
        'app-navy':'#3B4D66',
        'app-grey-navy': '#626C7F',
        'app-light-bluish':'#ABC1E1',
        'app-light-grey':'#F4F6FA',
        'app-pure-white':'#FFFFFF',
        'app-green': '#26D782',
        'app-red': '#EE5454',
      },
      fontFamily: {
        'app-rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'app-display': ['clamp(5.5rem, 2.16rem + 14.249vw, 9rem)', { 'font-weight': 500, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-heading-l-bold': ['clamp(2.5rem, 1.069rem + 6.107vw, 4rem)', { 'font-weight': 500, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-heading-l-regular': ['clamp(2.5rem, 1.069rem + 6.107vw, 4rem)', { 'font-weight': 300, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-heading-m': ['clamp(1.25rem, 0.296rem + 4.071vw, 2.25rem)', { 'font-weight': 500, 'line-height': '120%', 'letter-spacing': '0' }],
        'app-heading-s': ['clamp(1.125rem, 0.529rem + 2.545vw, 1.75rem)', { 'font-weight': 500, 'line-height': '100%', 'letter-spacing': '0' }],
        'app-body-m': ['clamp(1.125rem, 0.767rem + 1.527vw, 1.5rem)', { 'font-weight': 400, 'line-height': '150%', 'letter-spacing': '0' }],
        'app-body-s': ['clamp(0.875rem, 0.517rem + 1.527vw, 1.25rem)', { 'font-style': 'italic', 'line-height': '150%', 'letter-spacing': '0' }],
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    prefix: 'daisy-',
  }
}

