/** @type {import('tailwindcss').Config} */

import { colors } from 'tailwindcss/defaultTheme'
console.log(colors)
import daisyui from 'daisyui'
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        'desktop': '1440px',
      },
      backgroundImage: {
        'pattern-mobile-light': "url('/src/assets/images/pattern-background-mobile-light.svg')",
      },
      colors: {
        // 'light-grey': colors.gray[100],
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    prefix: 'daisy-',
  }
}

