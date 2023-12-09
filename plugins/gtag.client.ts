// @ts-nocheck
import VueGtag from "vue-gtag-next";
export default defineNuxtPlugin(({ vueApp }) => {
  const { gtagId } = useRuntimeConfig().public;
  const config = useRuntimeConfig();
  if (config.public.production_mode) {
    vueApp.use(VueGtag, {
      property: {
        id: config.public.google_analytics_id,
      },
    });
  }
  if (process.client) {
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window["dataLayer"] = window.dataLayer || [];
    gtag("js", new Date());
    gtag("config", gtagId);
  }

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true,
      },
    ],
  });
});
