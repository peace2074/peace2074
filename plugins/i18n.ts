import { createI18n } from 'vue-i18n'
import enUs from '~/locales/en-Us'
import heIl from '~/locales/he-Il'
import arIl from '~/locales/ar-Il'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages: {
            en: enUs,
            he: heIl,
            ar: arIl,
        },
    })

    vueApp.use(i18n)
})