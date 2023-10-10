
import { createVuetify } from "vuetify";
import enUs from '~/locales/en-Us'
import heIl from '~/locales/he-Il'
import arIl from '~/locales/ar-Il'
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import '@/scss/style.scss';
import {
  PurpleTheme,
} from "@/theme/LightTheme";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    locale: {
      locale: 'en',
      fallback: 'he',
      messages: { en: enUs, ar: arIl, he: heIl },
      rtl: {
        arIl: true,
        heIl: true,
        enUs: false
      }
    },
    theme: {
      defaultTheme: "PurpleTheme",
      themes: {
        PurpleTheme,
      },
    },

  });
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(PerfectScrollbar);
  nuxtApp.vueApp.use(VueApexCharts);
  nuxtApp.vueApp.use(VueTablerIcons);
});

