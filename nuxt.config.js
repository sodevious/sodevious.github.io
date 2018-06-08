module.exports = {
  head: {
    title: 'Nicole Dominguez &mdash; @sodevious &mdash; Freelance Product Designer & Web Developer',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@sodevious' },
      { name: 'google-site-verification', content: 'af0x8lMFq5Izj7MNfhrGXiObtaPCSo4QrON2DW8BjIM' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#654F78' },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    'normalize.css',
    '@/assets/app.scss'
  ],

   plugins: [
    { src: '~plugins/webFontLoader.js', ssr: false }
  ]
}
