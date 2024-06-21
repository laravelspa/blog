// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // ogImage: { enabled: false },
  // router: {
  //   base: '/blog/',
  // },
  // runtimeConfig: {
  //   public: {
  //     baseURL: '/blog',
  //   },
  // },
  app: {
    baseURL: '/blog/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Mahmoud\'s Blog',
      titleTemplate: '%s - Mahmoud\'s Blog',
      meta: [{ name: 'description', content: 'Mahmoud\'s awesome blog' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: 'https://laravelspa.github.io',
    identity: {
      type: 'Person',
    },
    twitter: '@DevMahmoudAdel',
  },

  typescript: {
    strict: true,
  },

  nitro: {
    // static: true,
    // baseURL: '/blog/',
    prerender: {
      crawlLinks: false,
      failOnError: false,
      routes: ['/'],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    '@nuxtjs/tailwindcss',
    '@stefanobartoletti/nuxt-social-share',
  ],

  content: {
    highlight: {
      theme: 'dracula',
      langs: ['html', 'css', 'js', 'ts', 'vue', 'php', 'md', 'json', 'bash'],
    },
  },
})
