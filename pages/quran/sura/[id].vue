<script lang="ts" setup>
import { ref, watchEffect, useRoute, onBeforeMount } from '#imports';
import { useQuran } from '../../../composables/useQuran'
const { start, _quran, _legends, _enums } = useQuran()
import { core } from "../../../utils/core";

const route = useRoute()
const sura = ref(1)


const target = !!_quran ? _quran.value.find(s => s.index == sura.value.toString()) : ''

watchEffect(() => {
  sura.value = +route.params.id
})
onBeforeMount(() => {
  start();
  if (core.has(_enums.quran)) {
    _quran.value = core.getItem(_enums.quran)
  }
  if (core.has(_enums.legend)) {
    _quran.value = core.getItem(_enums.legend)
  }
})
</script>
<template>
  <ClientOnly>
    <div>
      {{ sura }}
    </div>
    <div>
      <div>
        <div>index: {{ target.index }}</div>
        <div> name: {{ target.name }}</div>
        <div v-for="one in target.aya"> <span>{{ one.text }}</span> </div>
      </div>
    </div>
  </ClientOnly>
</template>
<style></style>