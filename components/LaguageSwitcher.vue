
<template>
    <div>
        <q-select v-model="locale" :options="localeOptions" :label="$t('general.setLocale')" dense emit-value map-options
            options-dense style="min-width: 150px" />
    </div>
</template>``
<script lang="ts" setup>
import { ref, watch, useI18n } from "#imports"
const { locale } = useI18n()

const localeOptions = ref([
    { key: 'enUS', value: 'en', label: 'English' },
    { key: 'he', value: 'he', label: 'Hebrew' },
    { key: 'ar', value: 'ar', label: 'Arabic' }
])
const LocalKeys = ['en', 'he', 'ar']
// const LocalValues = ['enUs', 'heIL', 'arIL']
watch(locale, async (newLocal, oldLocal) => {
    if (LocalKeys.includes(newLocal)) {
        locale.value = newLocal
    }
})
</script>
