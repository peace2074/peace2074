
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
    { key: 'enUS', value: 'en-US', label: 'English' },
    { key: 'heIL', value: 'he-IL', label: 'Hebrew' },
    { key: 'arIL', value: 'ar-IL', label: 'Arabic' }
])
const LocalKeys = ['enUS', 'heIL', 'arIL']
watch(locale, async (newLocal, _oldLocal) => {
    if (LocalKeys.includes(newLocal)) {
        locale.value = newLocal
    }
})
</script>
