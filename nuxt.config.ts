import { defineNuxtConfig } from "nuxt/config"
import { appDescription } from './constant/index'

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false
  },
  runtimeConfig: {
    GithubAppID: process.env.GithubAppID,
    GithubClientID: process.env.GithubClientID,
    GithubClientSecret: process.env.GithubClientSecret,
    AuthSecret: process.env.AUTH_SECRET,
    public: {
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/i18n',
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
  nitro: {
    serveStatic: true,
  },
  devServerHandlers: [],
  hooks: {},
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
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`,
          async: true,
        },
      ],

    },
  }
})

