
<template>
    <q-select id="lang-switcher" class="appearance-none" v-model="locale" rounded dense :options="localeOptions" emit-value
        map-options options-dense />
</template>
<script lang="ts" setup>
import { ref, watch, useI18n } from "#imports"

const { locale } = useI18n()


const localeOptions = ref([
    { key: 'enUS', value: 'en-US', dir: 'ltr', label: 'English' },
    { key: 'heIL', value: 'he-IL', dir: 'rtl', label: 'Hebrew' },
    { key: 'arIL', value: 'ar-IL', dir: 'rtl', label: 'Arabic' }
])
const LocalKeys = ['en-US', 'he-IL', 'ar-IL']
const body = document?.querySelector('body')
body?.classList.add('he-IL', 'rtl')
watch(locale, async (newLocal, oldLocal) => {
    if (LocalKeys.includes(newLocal)) {
        const filteredNewResult = localeOptions.value.find((e) => e.value == newLocal);
        const filteredOldResult = localeOptions.value.find((e) => e.value == oldLocal);
        locale.value = newLocal
        body?.classList.remove(oldLocal)
        if (filteredOldResult)
            body?.classList.remove(filteredOldResult.dir)

        body?.classList.add(newLocal)
        if (filteredNewResult)
            body?.classList.add(filteredNewResult?.dir)
    }
})
</script>
<style scoped>
#lang-switcher {
    max-width: 200px;
}
</style>
