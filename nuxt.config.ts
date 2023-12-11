// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui", "@vueuse/nuxt", "@pinia/nuxt"],
  quasar: {
    // @ts-ignore
    build: {
      rtl: true,
    },
  },
});
