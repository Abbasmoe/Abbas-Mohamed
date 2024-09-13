// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable if needed set to ture -> { enabled: ture }
  // https://nuxt.com/modules/devtools
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Abbas Mohamed',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Abbas Mohamed - Deine Webseite ist im Internetz!',
        },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#6970a5' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' },
      ],
    }
  },

  compatibilityDate: '2024-04-03',

  modules: [
    // https://eslint.nuxt.com/packages/module#quick-setup
    '@nuxt/eslint',
    // https://github.com/nuxt/fonts?tab=readme-ov-file
    '@nuxt/fonts',
    // https://tailwindcss.nuxtjs.org/getting-started/installation
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://content.nuxt.com/get-started/installation
    '@nuxt/content',
  ],

  // https://tailwindcss.nuxt.dev/getting-started/options#csspath
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },

  // https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
    dataValue: 'theme', // activate data-theme in <html> tag
    preference: 'dark', // default value of $colorMode.preference
  },
})
