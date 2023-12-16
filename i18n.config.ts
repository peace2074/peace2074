import { en, ar, he } from "./locales";
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
    },
    {
      code: "ar-IL",
      name: "Arabic",
    },
    {
      code: "he-IL",
      name: "Hebrew",
    },
  ],
  messages: {
    en,
    ar,
    he,
  },
}));
