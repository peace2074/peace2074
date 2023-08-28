<template>
  <div>
    <VitePwaManifest />
    <RouterView />
  </div>
</template>
<script lang="ts" setup>
import runSetup from "./utils/setup";
const nuxtApp = useNuxtApp()
const ioApi = ref({}); // APIs in "KISS" format will get stored here
const ioData = ref({});

if (process.client) {
  runSetup();
}
onMounted(() => {
  nuxtApp.$nuxtSocket({
    name: 'home',
    channel: '/dynamic',

  })
})
</script>
