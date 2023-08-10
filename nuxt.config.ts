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
      ],
      link: [
        { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' }
      ]
    }
  },
  modules: [
    'nuxt-quasar-ui'
  ],
  // @ts-ignore
  quasar: QuasarOptions,

})
