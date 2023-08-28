<template>
  <div>
    <VitePwaManifest />
    <RouterView />
  </div>
</template>
<script lang="ts" setup>
import runSetup from "./utils/setup";


if (process.client) {
  runSetup();
}
onMounted(() => {

})
</script>
