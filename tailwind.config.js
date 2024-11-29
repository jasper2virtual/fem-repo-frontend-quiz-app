/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

const appColors = {
  'purple': '#A729F5',
  'dark-navy': '#313E51',
  'navy': '#3B4D66',
  'grey-navy': '#626C7F',
  'light-bluish': '#ABC1E1',
  'light-grey': '#F4F6FA',
  'pure-white': '#FFFFFF',
  'green': '#26D782',
  'red': '#EE5454',
}

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist:[
    'bg-app-pattern-mobile-light',
    'bg-app-pattern-tablet-light',
    'bg-app-pattern-desktop-light',
    'bg-app-pattern-mobile-dark',
    'bg-app-pattern-tablet-dark',
    'bg-app-pattern-desktop-dark',
  ],
  theme: {
    extend: {
      screens: {
        'app-tablet': '768px',
        'app-desktop': '1440px',
      },
      backgroundImage: {
        'app-pattern-mobile-light': "url('/src/assets/images/pattern-background-mobile-light.svg')",
        'app-pattern-tablet-light': "url('/src/assets/images/pattern-background-tablet-light.svg')",
        'app-pattern-desktop-light': "url('/src/assets/images/pattern-background-desktop-light.svg')",
        'app-pattern-mobile-dark': "url('/src/assets/images/pattern-background-mobile-dark.svg')",
        'app-pattern-tablet-dark': "url('/src/assets/images/pattern-background-tablet-dark.svg')",
        'app-pattern-desktop-dark': "url('/src/assets/images/pattern-background-desktop-dark.svg')",
      },
      fontFamily: {
        'app-rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'app-display': ['clamp(5.5rem, 2.16rem + 14.249vw, 9rem)', { 'fontWeight': 500, 'lineHeight': '100%', 'letterSpacing': '0' }],
        'app-heading-l-bold': ['clamp(2.5rem, 1.069rem + 6.107vw, 4rem)', { 'fontWeight': 500, 'lineHeight': '100%', 'letterSpacing': '0' }],
        'app-heading-l-regular': ['clamp(2.5rem, 1.069rem + 6.107vw, 4rem)', { 'fontWeight': 300, 'lineHeight': '100%', 'letterSpacing': '0' }],
        'app-heading-m': ['clamp(1.25rem, 0.296rem + 4.071vw, 2.25rem)', { 'fontWeight': 500, 'lineHeight': '120%', 'letterSpacing': '0' }],
        'app-heading-s': ['clamp(1.125rem, 0.529rem + 2.545vw, 1.75rem)', { 'fontWeight': 500, 'lineHeight': '100%', 'letterSpacing': '0' }],
        'app-body-m': ['clamp(1.125rem, 0.767rem + 1.527vw, 1.5rem)', { 'fontWeight': 400, 'lineHeight': '150%', 'letterSpacing': '0' }],
        'app-body-s': ['clamp(0.875rem, 0.517rem + 1.527vw, 1.25rem)', { 'fontWeight': 400, 'lineHeight': '150%', 'letterSpacing': '0' }],
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    prefix: 'daisy-',
    darkTheme: 'app-dark',
    themes: [
      {
        'app-light': {
          'primary': appColors['purple'],
          'primary-content': appColors['pure-white'],
          'base-100': appColors['pure-white'],
          'base-200': appColors['light-grey'],
          'base-content': appColors['dark-navy'],
          'neutral-content': appColors['grey-navy'],
          'neutral': appColors['light-bluish'],
          'success': appColors['green'],
        },
        'app-dark': {
          'base-100': appColors['dark-navy'],
          'base-content': appColors['pure-white'],
          'neutral-content': appColors['light-bluish'],
          'neutral': appColors['grey-navy'],
        }
      },
    ],
  }
}

