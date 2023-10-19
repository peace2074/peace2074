import { defineNuxtConfig } from "nuxt/config";
import { appDescription } from "./constant/index";

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
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
  modules: ["@nuxtjs/i18n", "@nuxt/content"],
  auth: {
    origin: process.env.ORIGIN,
    enableGlobalAppMiddleware: true,
  },
  build: {
    transpile: ["vuetify"],
  },
  // auth: {
  //   isEnabled: true,
  //   origin: process.env.ORIGIN || "http://localhost:3000",
  //   basePath: "/api/auth",
  //   enableSessionRefreshPeriodically: false,
  //   enableSessionRefreshOnWindowFocus: true,
  //   globalMiddlewareOptions: {
  //     // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
  //     allow404WithoutAuth: true,
  //     // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path. Note: You also need to set the global `addDefaultCallbackUrl` setting to `false` if you want to fully disable this for the global middleware.
  //     addDefaultCallbackUrl: true,
  //   },

  //   enableGlobalAppMiddleware: false,
  // },
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
  },
  nitro: {
    serveStatic: true,
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
        },
      ],
    },
  },
});
