import { defineNuxtConfig } from "nuxt/config"

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
    public: {}
  },
  modules: [
    '@sidebase/nuxt-auth',

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
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true
  },
  devServerHandlers: [],
  hooks: {}

})



