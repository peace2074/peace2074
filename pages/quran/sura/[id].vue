<script lang="ts" setup>
import { useQuran } from '../../../composables/useQuran'
import { core } from '../../../utils/core'
import { onBeforeMount, ref, useRoute, watchEffect } from '#imports'

const { start, _quran, _enums } = useQuran()

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
useMeta({
  tite: target?.name,
})
</script>

<template>
  <ClientOnly>
    <div class="rtl q-page">
      <h3>Fahras</h3>
      <div id="book" class="q-mx-auto q-pa-lg text-center text-lg">
        <div v-if="target" class="flex justify-between">
          <div>رقم السوره: {{ target.index }}</div>
          <div> اسم السوره: {{ target.name }}</div>
        </div>
        <div class="quran-wrapper">
          <div v-for="one in target.aya" :key="one.index" class="target">
            <span v-if="one.basmala" class="text-lg">{{ one.basmala }}</span>

            <span class="text-lg">{{ one.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
#book .target * {
  font-size: xx-large;
}

.quran-wrapper {
  border: 2px solid gold;
  border-radius: 15px;
  padding: 1rem;
}
</style>
