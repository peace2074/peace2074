
<template>
    <div>
        <q-select v-model="locale" :options="localeOptions" :label="$t('general.setLocale')" dense emit-value map-options
            options-dense style="min-width: 150px" />
    </div>
</template>``
<script lang="ts" setup>
import { useI18n } from "vue-i18n"
const { locale } = useI18n()

const localeOptions = ref([
    { key: 'en', value: 'enUs', label: 'English' },
    { key: 'he', value: 'heIl', label: 'Hebrew' },
    { key: 'ar', value: 'arIl', label: 'Arabic' }
])
const LocalKeys = ['en', 'he', 'ar']
// const LocalValues = ['enUs', 'heIL', 'arIL']
watch(locale, async (newLocal, oldLocal) => {
    if (LocalKeys.includes(newLocal)) {
        if (newLocal != oldLocal)
            locale.value = newLocal

    }
})
</script>
