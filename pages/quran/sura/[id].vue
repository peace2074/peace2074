<script lang="ts" setup>
import { ref } from '#imports';
enum storageE {
  quran = 'Quran',
  size = 'Size',
  legend = 'Legend'
}
import { conf } from "../../../utils/conf";
const route = useRoute()
const sura = ref(0)
const localQ = conf.getItem(storageE.quran)

const target = localQ?.find(s => s.index === sura.value)

watchEffect(() => {
  sura.value = route.params.id as string
})
</script>
<template>
  <ClientOnly>
    <div>
      {{ sura }} {{ target }}
    </div>
  </ClientOnly>
</template>
<style></style>