<script lang="ts" setup>
import { ref, watch, useI18n, } from "#imports"
const { locale } = useI18n()
enum langsE { en = 'es-US', he = 'he-IL', ar = 'ar-IL' }
// if Dom is Ready!
if (import.meta.client) {
    const body = document.body
    body.classList.add(langsE.he, 'rtl')

    const localeOptions = reactive([
        { value: langsE.en, label: 'English', dir: 'ltr' },
        { value: langsE.he, label: 'Hebrew', dir: 'rtl' },
        { value: langsE.ar, label: 'Arabic', dir: 'rtl' }
    ])
    const LocalKeys = [langsE.en, langsE.he, langsE.ar,];

    watch(locale, async (newLocal, oldLocal) => {
        if (LocalKeys.includes(newLocal)) {
            const filteredNewResult = localeOptions.value.find((e) => e.value == newLocal);
            const filteredOldResult = localeOptions.value.find((e) => e.value == oldLocal);
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
    <q-select id="lang-switcher" class="appearance-none" v-model="locale" rounded dense :options="localeOptions" emit-value
        map-options options-dense />
</template>
<style scoped>
#lang-switcher {
    max-width: 250px;
}
</style>
