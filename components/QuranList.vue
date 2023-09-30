<script lang="ts" setup>
import { core } from '../utils/core'

const { start, _quran, _legends, _size, _enums } = useQuran()
const router = useRouter()

const navToSura = (n: number) => router.push(`/quran/sura/${n}`)

onBeforeMount(() => {
  start()
  if (core.has(_enums.quran))
    _quran.value = core.getItem(_enums.quran)

  if (core.has(_enums.legend))
    _legends.value = core.getItem(_enums.legend)

  if (core.has(_enums.size))
    _size.value = core.getItem(_enums.size)
})
</script>

<template>
  <div v-if="_legends" class="q-pa-md row q-gutter-md items-start">
    <div v-for="one in _legends" :key="one.index" class="rtl">
      <q-btn :class="one.index" :label="one.name" @click="navToSura(one.index)" />
    </div>
  </div>
</template>

<style></style>
