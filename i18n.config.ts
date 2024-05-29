import  messages from './locales'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'he-IL',
  globalInjection: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
  },
  locales: [
    {
      code: 'ar',
      name: 'Arabic',
    },
    {
      code: 'en',
      name: 'Engilish',
    },
    {
      code: 'he',
      name: 'Hebrew',
    },
  ],
  messages, // import { messages } from './locales'
}))
