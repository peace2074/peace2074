import { conf } from "~/utils/conf";
import { core } from "~/utils/core";

export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: { _Conf: conf, _Core: core },
  };
});
