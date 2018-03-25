module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'vue-single-property-webpage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A webpage to list a property for sale or for rent' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  router: {
    middleware: 'i18n'
  },
  // plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/i18n.js',
    { src: '~plugins/ga.js', ssr: false }
  ],
  css: [
    '~/assets/style/app.styl',
    // CSS file in the project
    '@/assets/css/extras.css',
    '@/assets/css/banner.css',
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/font-awesome',
  ]
}