module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'WeeBrix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Beautiful multilingual property listing websites' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons', defer: true }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js' }
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
    // '@/assets/css/halfshade.scss',
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      // presets: ['es2015', 'stage-0']
      presets: [['vue-app', {
        targets: {
          browsers: ["last 4 versions"]
        }
      }]]
      // presets: [
      //   ['vue-app', {
      //     useBuiltIns: true,
      //     targets: { ie: 9, uglify: true }
      //   }]
      // ]
    },
    vendor: [
      '~/plugins/vuetify.js', 'babel-polyfill'
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