import en from "./locales/enUs";
import ar from "./locales/arIl";
import he from "./locales/heIl";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  modules: ["nuxt-quasar-ui", "@vueuse/nuxt", "@pinia/nuxt", "@nuxtjs/i18n"],
  i18n: {
    legacy: false,
    locale: "en",
    globalInjection: true,
    messages: {
      en: en,
      ar: ar,
      he: he,
    },
  },
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
