import { arIL, enUS, heIL } from './locales'

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
      code: 'ar-IL',
      name: 'Arabic',
    },
    {
      code: 'en-US',
      name: 'Engilish',
    },
    {
      code: 'he-IL',
      name: 'Hebrew',
    },
  ],
  messages: {
    arabic: arIL,
    english: enUS,
    hebrew: heIL,
  },
}))
