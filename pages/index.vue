<script lang="ts" setup>
import { UserI, CaslActionE, CaslSubjectE } from "../types";
import { useTimeAgo } from "@vueuse/core";
import moment from "moment";
import { isDark } from "../mixins";
import { v4 as uuid } from "uuid";
import { Ref, ComputedRef } from "vue";
import useAuth from "~/composables/useAuth";
import { useAuthStore } from "~/store/auth.pinia";

const message = ref<string>("");

const { $socket } = useNuxtApp();
const uid = uuid();

interface MessageI {
  sent: boolean;
  text: string;
  user?: UserI;
}
// const { $socket } = useNuxtApp();
const { t } = useI18n();
const router = useRouter();
// const { can, cannot } = useCasl();
const placeholder = "Write a message ...";
const newMsg: Ref<string> = ref("");
const guest = ref(false);
const messages: Ref<MessageI[]> = ref([]);
const sendMessage = () => {
  fetch("/api/sendmessage", {
    method: "POST",
    body: JSON.stringify({
      message: Math.random(),
      sender: localStorage.getItem(`connection-${uid}`),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("sent");
    });
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
onMounted(() => {
  $socket.onopen = () => {
    localStorage.setItem(`connection-${uid}`, uid);
    $socket.send(uid);
  };
  $socket.onmessage = ({ data }: any) => {
    console.log("data", data);
    message.value = data;
  };
  $socket.onclose = function () {
    console.log("disconnected");
  };
});
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
        <div class="h-screen w-full grid place-items-center bg-gray-200 dark:bg-black">
          <span class="flex flex-col items-centers space-y-4">
            <span class="text-slate-900 dark:text-gray-100">{{ message }}</span>
            <q-btn
              color="purple"
              @click="sendMessage"
              class="font-semibold px-5 py-2 rounded-lg"
              label="Click me to send random
            number"
            />
          </span>
        </div>
        <q-input v-model="newMsg" type="text" :label="placeholder" />
        <q-btn @click="sendMessage" color="primary">Send Message</q-btn>
        <q-toggle v-model="guest" />

        <div class="q-pa-md row justify-center">
          <div style="width: 100%; max-width: 400px">
            <q-chat-message
              v-for="msg in messages"
              :key="msg.text"
              :sent="msg.sent"
              :text="[msg.text]"
              :name="msg.user?.handle"
              :avatar="msg.user?.profileImage"
            />
          </div>
        </div>
        <div class="q-pa-md row justify-center">
          <div style="width: 100%; max-width: 400px">
            <q-btn
              class="q-my-md q-ml-none`"
              :color="isAuthenticated ? 'green' : 'red'"
              text="white"
              :label="$t(isAuthenticated ? 'navigation.Signout' : 'navigation.Signin')"
              @click.prevent="isAuthenticated ? logout() : router.push('/auth/login')"
            />
          </div>
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
