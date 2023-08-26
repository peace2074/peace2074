<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const color = useColorMode();

function toggleDark() {
  color.value = color.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <q-icon class="q-mx-sm" size="lg" :name="color === 'dark' ? `dark_mode` : `light_mode`" @click="toggleDark" />
</template>
