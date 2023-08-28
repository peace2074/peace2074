<script lang="ts" setup>
import { UserI, CaslActionE, CaslSubjectE } from "../types";
import { useTimeAgo } from "@vueuse/core";
import moment from "moment";
import { isDark } from "../mixins";

import { Ref, ComputedRef } from "vue";
import useAuth from "~/composables/useAuth";
import { useAuthStore } from "~/store/auth.pinia";
const { $io } = useNuxtApp();
const { t } = useI18n();
const router = useRouter();
const { can, cannot } = useCasl();
const msg = ref("");
const sendMessage = () => {
  console.log("Click");
  $io.emit("message", msg.value);
  msg.value = ''
};
const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
const $q = useQuasar();
const _auth = useAuthStore();
const __DATE__ = new Date().toISOString();
const date = __DATE__;
const timeAgo = useTimeAgo(date);
const BuildTime: string = moment(date).format("ddd MMM DD, YYYY [at] HH:mm");

useHead({
  title: t("welcome"),
});
const loading = ref(false);
const isAuthLoading = useAuthLoading();
let isAuthenticated: ComputedRef<boolean> = computed(
  () => !!(user.value && user.value.username)
);
initAuth();

const updateStore = (subject: CaslSubjectE, action: CaslActionE) => {
  _auth.setPermission(subject, action);
};
const user: Ref<UserI> = useAuthUser();
onBeforeMount(async () => {
  initAuth();
  isAuthenticated = computed(() => !!(user.value && user.value.username));

  loading.value = true;
  if (user) {
    try {
      loading.value = true;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
});
const localAlert = (title: string, message: string) => {
  const p = {
    title: t(title),
    message,
  };
  $q.dialog(p);
};
</script>
<template>
  <ClientOnly>
    <NuxtLayout name="default">
      <MainSection class="fit no-borders" title="Home" :loading="loading">
        <LoadingPage v-if="!isAuthLoading" />

        <!-- App -->
        <div clas="all-pages q-px-md">
          <slot />
        </div>
        <q-input v-model="msg" type="text" label="Write Message" />
        <q-chat-message :text="[msg]" sent />
        <q-btn @click="sendMessage" color="primary">Send Message</q-btn>

        <div class="q-px-md">
          <q-btn
            class="q-my-md q-ml-none`"
            :color="isAuthenticated ? 'green' : 'red'"
            text="white"
            :label="$t(isAuthenticated ? 'navigation.Signout' : 'navigation.Signin')"
            @click.prevent="isAuthenticated ? logout() : router.push('/auth/login')"
          />
        </div>
        <div class="text-center" :class="isDark ? 'text-white' : 'text-dark'">
          Built at: {{ BuildTime }} ({{ timeAgo }})
        </div>
      </MainSection>
    </NuxtLayout>
  </ClientOnly>
</template>
<style>
pre {
  width: 100%;
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
