import { defineNuxtConfig } from 'nuxt/config'
import { QuasarOptions } from './qusarOptions'
import path from 'path'


export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    asyncContext: true,
    headNext: true

  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'manifest', content: './manifest.json' }
      ],
    }
  },
  nitro: {
    externals: {
      inline: ['date-fns']
    }
  },
  alias: {
    "@": './',
    "@store": './store',
    "@pages": './pages',
    "@components": './composables',
  },
  css: [
    '@quasar/extras/material-icons/material-icons.css',
    'quasar/dist/quasar.prod.css',
    '~/assets/styles/quasar.scss',
  ],
  buildModules: ["@nuxtjs/pwa"],
  imports: {
    autoImport: true,
  },
  ssr: false,
  runtimeConfig: {
    // Auth
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    // Cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    // EmailJS
    emailPrivateKey: process.env.EMAIL_PRIVATE_KEY,
    // Root User
    rootEmail: process.env.ROOT_USER,
    public: {
      // EmailJS
      EMAIL_SERVICE: process.env.EMAIL_PUBLIC_KEY,
      EMAIL_TEMPLATE: process.env.EMAIL_TEMPLATE,
      EMAIL_USER: process.env.EMAIL_USER,
      // JSON place Holder
      apiBase: process.env.API_URL,
    }
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',

  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },

  // @ts-ignore
  quasar: QuasarOptions,
  vite: {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, '')}/`,
        '@store': `${path.resolve(__dirname, '/store')}/`,
        '@components': `${path.resolve(__dirname, '/components')}/`,
        '@composables': `${path.resolve(__dirname, '/composables')}/`,
        '@pages': `${path.resolve(__dirname, '/pages')}/`,
        '@t': `${path.resolve(__dirname, '/type')}/`,
      },
    },
  },
  pwa: {
    // @ts-ignore
    meta: {
      name: "Peace2074",
      author: "waelio 2023",
      description: "pprofissional brand peace2074 by waelio",
    },
    manifest: {
      "name": "Peace2074 Home",
      "short_name": "Peace2074",
      "theme_color": "#1976d2",
      "background_color": "#fafafa",
      "display": "standalone",
      "icons": [
        {
          "src": "/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-48x48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    }
  }


})