import { defineStore } from "pinia";
import { projects as importedProjects } from "../static";
import type { IUSER, ProductI } from "../types";

export const rootStore = defineStore({
  id: "rootStore",
  state: () => ({
    id: "com.waelio.app",
    projects: importedProjects,
    userInfo: {} as IUSER,
    currencies: {},
    name: "Peace2074" as string,
    products: [] as ProductI[],
  }),
  actions: {
    setUserInfo(info: IUSER & { currency: string; ip: string }) {
      this.userInfo = info;
    },
    setUserCurrencies(currencies: string[]) {
      this.currencies = currencies;
    },
  },
  getters: {
    name: (state) => state.name,
    Projects: (state) => state.projects,
    user: (state) => state.userInfo,
    // @ts-ignore
    iP: (state) => (state.userInfo ? state.userInfo["ip"] : "0.0.0.0"),
    fiat: (state) => state.currencies,
    // @ts-ignore
    localCurrency: (state) =>
      state.userInfo ? state.userInfo["currency"] : {},
  },
});
