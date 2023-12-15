
<template>
    <div>
        <q-select v-model="locale" :options="localeOptions" :label="$t('general.setLocale')" dense emit-value map-options
            options-dense style="min-width: 150px" />
    </div>
</template>
<script setup>
import { ref, watch, useI18n } from "#imports"

const { locale } = useI18n()


const localeOptions = ref([
    { key: 'en', value: 'en-US', label: 'English' },
    { key: 'he', value: 'he-IL', label: 'Hebrew' },
    { key: 'ar', value: 'ar-IL', label: 'Arabic' }
])
const LocalKeys = ['en-US', 'he-IL', 'ar-IL']
watch(locale, async (newLocal, _oldLocal) => {
    if (LocalKeys.includes(newLocal)) {
        locale.value = newLocal
    }
})
</script>
