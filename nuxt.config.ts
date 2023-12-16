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
    manifest: {
      name: "Peace Market",
      short_name: "Peace2074",
      theme_color: "#1976d2",
      background_color: "#fafafa",
      display: "standalone",
      scope: "./",
      start_url: "./",
      icons: [
        {
          src: "/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "/icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
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
