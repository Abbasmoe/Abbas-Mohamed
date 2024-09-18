import {
  iconsPlugin,
  dynamicIconsPlugin,
  getIconCollections,
} from '@egoist/tailwindcss-icons'
import tailwindTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import { light, dark } from 'daisyui/src/theming/themes'
import type { Config } from 'tailwindcss'

const colorPalette = {
  primary: '#6970a5',
  'primary-content': '#fff',
  secondary: '#c7b2c2',
  accent: '#b2959e',
  info: '#7dd3fc',
  success: '#4ade80',
  warning: '#facc15',
  error: '#f43f5e',
}

export default {
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Montserrat'],
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
    minHeight: {
      // @ts-ignore
      screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
    },
  },

  plugins: [
    tailwindTypography,
    iconsPlugin({ collections: getIconCollections(['mdi']) }),
    dynamicIconsPlugin(),
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...light,
          ...colorPalette,
          'secondary-content': '#0e0c0e',
        },
      },
      {
        dark: {
          ...dark,
          ...colorPalette,
        },
      },
    ],
    logs: false,
  },
} satisfies Config
