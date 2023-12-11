import { conf } from "~/utils/conf";
import { core } from "~/utils/core";
import iconSet from "quasar/icon-set/fontawesome-v6";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import { Quasar } from "quasar";

export default defineNuxtPlugin((_nuxtApp) => {
  Quasar.iconSet.set(iconSet);
  return {
    provide: { _Conf: conf, _Core: core },
  };
});
