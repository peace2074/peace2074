<template>
  <q-form class="lang-switcher">
    <q-select
      dense
      borderless
      emit-value
      map-options
      options-dense
      v-model="aLocale"
      :class="autoClass"
      :options="langs"
    />
  </q-form>
</template>
<script lang="ts" setup>
type LOCALE = { label: string; value: string };
import { isDark, useToggle, autoStyle, autoClass } from "../mixins";

const { locale } = useI18n();
const langs: LOCALE[] = [
  { value: "en", label: "EN" },
  { value: "ar", label: "AR" },
  { value: "he", label: "HE" },
];
const aLocale = ref(langs[0]);

watch(aLocale, (newLocale: LOCALE) => {
  locale.value = newLocale.value;
});
</script>
<style>
.lang-switcher {
  margin: 0.94em;
  padding: 0.94rem;
  max-width: 10em;
}
body.body--light .lang-switcher * {
  background-color: transparent;
  color: black;
}
body.body--dark .lang-switcher * {
  background-color: black;
  color: white;
}
</style>
