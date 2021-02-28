export default {
  target: 'static',

  head: {
    title: 'Coffeeroasters',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/global.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [],

  build: {},
}
