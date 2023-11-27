import { defineNuxtConfig } from "nuxt/config";
import { appDescription } from "./constant/index";
import { pwa } from "./config/pwa";

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  pages: true,
  imports: {
    autoImport: true,
    collectMeta: true,
  },
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/ui",
    "@vite-pwa/nuxt",
    "@nuxtjs/supabase",
    "nuxt-mongoose",
  ],
  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
    "./": "~",
  },
  runtimeConfig: {
    GithubAppID: process.env.GithubAppID,
    GithubClientID: process.env.GithubClientID,
    GithubClientSecret: process.env.GithubClientSecret,
    AuthSecret: process.env.AUTH_SECRET,
    public: {
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  mongoose: {
    uri: process.env.DATABASE_URL,
    options: {},
    modelsDir: "models",
  },
  pwa: pwa,
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
  nitro: {
    serveStatic: true,
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      ignore: ["/blog"],
    },
  },
  content: {},
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: appDescription },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
      script: [
        {
          type: "text/javascript",
          src: `https://www.googletagmanager.com/gtag/js?id='G-XN9FGVQBKX'`,
          async: true,
          defer: true,
        },
        {
          type: "text/javascript",
          src: "https://js.stripe.com/v3/",
          defer: true,
          async: true,
        },
      ],
    },
  },
});
