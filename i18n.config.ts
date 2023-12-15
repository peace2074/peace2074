import { en, ar, he } from "./locales";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  locales: [
    {
      code: "en",
      name: "English",
    },
    {
      code: "ar",
      name: "Arabic",
    },
    {
      code: "he",
      name: "Hebrew",
    },
  ],
  messages: {
    en,
    ar,
    he,
  },
}));
