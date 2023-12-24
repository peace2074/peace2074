<script lang="ts" setup>
import { useI18n, watch } from '#imports'

const { locale } = useI18n()
enum langsE { en = 'es-US', he = 'he-IL', ar = 'ar-IL' }
const langs = ['es-US', 'he-IL', 'ar-IL']
const localeOptions = reactive([
  { value: langsE.en as string, label: 'English', dir: 'ltr' },
  { value: langsE.he as string, label: 'Hebrew', dir: 'rtl' },
  { value: langsE.ar as string, label: 'Arabic', dir: 'rtl' },
])
// if Dom is Ready!
if (import.meta.client) {
  const body = document.body
  body.classList.add(langsE.he, 'rtl')

  const LocalKeys = langs

  watch(locale, async (newLocal, oldLocal) => {
    if (LocalKeys.includes(newLocal)) {
      const filteredNewResult = localeOptions.find((e: { value: string }) => e.value == newLocal)
      const filteredOldResult = localeOptions.find((e: { value: string }) => e.value == oldLocal)
      locale.value = newLocal
      body.classList.remove(oldLocal)
      if (filteredOldResult)
        body.classList.remove(filteredOldResult.dir)

      body.classList.add(newLocal)
      if (filteredNewResult)
        body.classList.add(filteredNewResult?.dir)
    }
  })
}
</script>

<template>
  <q-select
    id="lang-switcher" v-model="locale" class="appearance-none" :options="localeOptions"
    dense emit-value map-options options-dense rounded
  />
</template>

<style scoped>
#lang-switcher {
  max-width: 250px;
}
</style>
