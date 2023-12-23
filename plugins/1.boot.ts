// import iconSet from 'quasar/icon-set/fontawesome-v6.mjs'
import { Quasar } from 'quasar'
import { init } from '@emailjs/browser'
import { defineNuxtPlugin } from 'nuxt/app'
import { conf } from '../utils/conf'
import { core } from '../utils/core'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import globalMixin from '../mixins'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  nuxtApp.vueApp.mixin(globalMixin)
  //   Quasar.iconSet.set(iconSet)
  Quasar.lang.set(Quasar.lang.he)
  init(runtimeConfig.public.emailjsPK)

  return {
    provide: { _Conf: conf, _Core: core },
  }
})
