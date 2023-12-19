import { enUS, arIL, heIL } from "./locales";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "he-IL",
  globalInjection: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: "i18n_redirected",
    redirectOn: "root",
  },
  locales: [
    {
      code: "en-US",
      name: "English",
      messages: enUS,
    },
    {
      code: "ar-IL",
      name: "Arabic",
      messages: arIL,
    },
    {
      code: "he-IL",
      name: "Hebrew",
      messages: heIL,
    },
  ],
  messages: {
    en: enUS,
    ar: arIL,
    he: heIL,
  },
}));
