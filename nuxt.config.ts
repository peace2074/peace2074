import { defineNuxtConfig } from "nuxt/config";
import { QuasarOptions } from './qusarOptions'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui'
  ],
    // @ts-ignore

  quasar: QuasarOptions,

})
