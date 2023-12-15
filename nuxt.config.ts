import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  modules: [
    "nuxt-quasar-ui",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: "./i18n.config.ts",
    legacy: true,
    locale: "he-IL",
    globalInjection: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
  pwa: {
    /* PWA options */
  },
  alias: {
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "@store": fileURLToPath(new URL("./store/", import.meta.url)),
    "@pages": fileURLToPath(new URL("./pages/", import.meta.url)),
    "@cmps": fileURLToPath(new URL("./composables/", import.meta.url)),
  },
  css: [
    "@quasar/extras/material-icons/material-icons.css",
    "quasar/dist/quasar.prod.css",
    "~/assets/style/quasar.scss",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
    dbUrl: process.env.DATABASE_URL,
    githubClientId: process.env.GITHUB_CLIENT_ID,
  },
  mongoose: {
    uri: process.env.DATABASE_URL,
    options: {},
    modelsDir: "models",
  },

  quasar: {
    // @ts-ignore
    extras: [
      // 'ionicons-v4',
      // 'mdi-v4',
      "fontawesome-v5",
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons", // optional, you are not bound to it
    ],
    framework: {
      iconSet: "material-icons", // Quasar icon set
      lang: "en-us",
      all: "auto",
      config: {
        screen: {
          bodyClasses: true,
        },
      },
      components: [],
      directives: [],
      plugins: ["QIcon", "QScrollArea"],
    },
    build: {
      rtl: true,
    },
    builder: {
      appId: "Peaace_Shopping",
    },
    nodeIntegration: true,
  },

  app: {
    head: {
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
  },
});
