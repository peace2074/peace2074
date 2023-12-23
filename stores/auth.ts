import { defineStore } from "pinia";
import type { UserI } from "../types";
import { CaslActionE, CaslSubjectE } from "../types";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    _user: {} as UserI,
    _permissions: [
      { action: CaslActionE.READ, subject: CaslSubjectE.CATEGORY },
      { action: CaslActionE.UPDATE, subject: CaslSubjectE.CATEGORY },
      { action: CaslActionE.CREATE, subject: CaslSubjectE.CATEGORY },
      // POST

      { action: CaslActionE.READ, subject: CaslSubjectE.POST },
      { action: CaslActionE.UPDATE, subject: CaslSubjectE.POST },
      { action: CaslActionE.CREATE, subject: CaslSubjectE.POST },

      // User Permissions
      { action: CaslActionE.CREATE, subject: CaslSubjectE.USER },
      { action: CaslActionE.UPDATE, subject: CaslSubjectE.USER },
      { action: CaslActionE.READ, subject: CaslSubjectE.USER },
    ],
  }),
  getters: {
    user: (state: { _user: any }) => state._user,
    authenticated: (state: { _user: {} }) =>
      Boolean(state._user && Object.keys(state._user).length),
    permissions: (state: { _permissions: any }) => state._permissions,
  },
  actions: {
    async setUserInfo(info: UserI) {
      // @ts-ignore
      this._user = info;
    },
  },
});
