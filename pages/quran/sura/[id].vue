<script lang="ts" setup>
import { useQuran } from '../../../composables/useQuran'
import { core } from '../../../utils/core'
import { onBeforeMount, ref, useRoute, watchEffect } from '#imports'

const { start, _quran, _legends, _enums } = useQuran()

const route = useRoute()
const sura = ref(1)

const target = computed(() => _quran.value.find(s => s.index === sura.value.toString()))

watchEffect(() => {
  sura.value = +route.params.id
})
onBeforeMount(() => {
  start()
  if (core.has(_enums.quran))
    _quran.value = core.getItem(_enums.quran)

  if (core.has(_enums.legend))
    _quran.value = core.getItem(_enums.legend)
})
</script>

<template>
  <ClientOnly>
    <div class="q-page">
      <div class="sura">
        <div class="flex">
          <div class="index q-ml-auto text-right">رقم السوره: {{ target.index }}</div>
          <div class="name q-mr-auto text-left"> اسم السوره: {{ target.name }}</div>
        </div>
        <div class="ayat" v-for="one in target.aya">
          <span v-html>{{ one.index }} - {{ one.text }}</span>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.sura {
  border: 3px solid goldenrod;
  padding: 15px;
  border-radius: 15px;
  direction: rtl;
}

.sura .index,
.sura .name {
  display: table;
  border: 3px solid goldenrod;
  padding: 10px;
  border-radius: 10px;
}
.sura .ayat {
  font-family: sans-serif;
  font-size: large;
}
.sura .ayat::after {
  content: ' ⚖';
}
.sura .ayat:last-child::after {
  content: '';
}
</style>
