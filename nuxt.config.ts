import { isProduction } from 'std-env'
import { pwa } from './config/pwa'
import { appDescription } from './constant/index'
import { QuasarOptions } from './qusarOptions'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@vueuse/sound/nuxt',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  appConfig: {
    public: {
      gtagId: process.env.google_analytics_id,
      google_analytics_id: process.env.google_analytics_id,
      production_mode: isProduction,
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@quasar/extras/material-icons/material-icons.css',
    'quasar/dist/quasar.prod.css',
    '~/assets/style/quasar.css',
  ],
  quasar: QuasarOptions,
  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      script: [
        {
          // eslint-disable-next-line n/prefer-global/process
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.google_analytics_id}`,
          async: true,
        },
      ],

    },
  },
  pwa,

  devtools: {
    enabled: true,
  },
})
