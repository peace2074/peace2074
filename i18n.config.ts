import { ar, he, en } from "~/locales";
enum LANGS {
  en = 'en',
  ar = 'ar',
  he = 'he'
}
export default defineI18nConfig(() => ({
  legacy: false,
  locale: LANGS.en,
  messages: {
    en,ar,he
    
  }
}))