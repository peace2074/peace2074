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
    <div>
      <div>
        <div>رقم السوره: {{ target.index }}</div>
        <div> اسم السوره: {{ target.name }}</div>
        <div v-for="one in target.aya">
          <span>{{ one.text }}</span>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style></style>
