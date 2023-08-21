import { defineNuxtConfig } from "nuxt/config";
import { QuasarOptions } from './qusarOptions'

export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,
  target: 'static',
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' }
      ]
    }
  },
  modules: [
    'nuxt-quasar-ui',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    // "nuxt-lodash",
    // '@nuxtjs/axios',
  ],
  // @ts-ignore
  quasar: QuasarOptions,
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  // privateRuntimeConfig: {
  //   nuxtswagger: [
  //     // { pluginName: 'foo', src: 'https://api.server.foo/swagger.json' },
  //   ]
  // },
  // publicRuntimeConfig: {
  //   // nuxtswagger: {
  //     // pluginName: 'waelio',
  //     // AxiosRequestConfig?
  //     // axiosConfig: {
  //     //   baseURL: process.env.API_WAELIO,
  //     //   sudoURL: process.env.API_SUDOKU,
  //     //   gnameURL: process.env.API_GNAMES
  //     // }
  //   // }
  // }

})
