export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sybrlab',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Developpement front-end et Javascript à Nantes.',
      },
      {
        property: 'og:title',
        content: 'SybR Lab',
      },
      {
        property: 'og:image',
        content: '~assets/images/sybrlab-1200.jpg',
      },
      {
        property: 'og:image:type',
        content: 'image/jpg',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '628',
      },
      {
        property: 'twitter:card',
        content: 'summary',
      },
      {
        property: 'twitter:image',
        content: '~assets/images/sybrlab-150.jpg',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon_lab.png',
      },
    ],
    script: [{ src: '/MorphSVGPlugin.min.js', body: true }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/responsive.scss',
    '~/assets/scss/variables.scss',
    '~/assets/scss/main.scss',
    '~/assets/scss/typography.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  },
};
