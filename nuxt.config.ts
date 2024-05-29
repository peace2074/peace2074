/* eslint-disable node/prefer-global/process */
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'
import { QuasarOptions } from './qusarOptions'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/i18n',
    'nuxt-mongoose',

  ],
  pages: true,
  imports: {
    autoImport: true,
    collectMeta: true,
  },
  i18n: {
    vueI18n: '~/i18n.config',
  },
  build: {
    transpile: ['hellojs'],
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@quasar/extras/material-icons/material-icons.css',
    '@unocss/reset/tailwind.css',
    'quasar/dist/quasar.prod.css',
    'quasar/dist/quasar.rtl.prod.css',
    '~/assets/style/quasar.scss',
  ],

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
    },
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
      emailjsPK: process.env.EMAIL_PUBLIC_KEY,
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID,

    },
    dbUrl: process.env.DATABASE_URL,
    githubClientId: process.env.GITHUB_CLIENT_ID,
    GithubAppID: process.env.GithubAppID,
    GithubClientID: process.env.GithubClientID,
    GithubClientSecret: process.env.GithubClientSecret,
    AuthSecret: process.env.AUTH_SECRET,
  },
  mongoose: {
    uri: process.env.DATABASE_URL,
    options: {},
    modelsDir: 'models',
  },

  quasar: QuasarOptions,
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
      ],
      script: [
        { src: 'https://js.stripe.com/v3/', defer: true },
      ],

    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
