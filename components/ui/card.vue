<script setup lang="ts">
defineProps<{ title: string; par1?: string; par2?: string }>();
</script>
<template>
  <q-card flat bordered class="my-card">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none" v-if="par1">
      {{ par1 }}
    </q-card-section>
    <div v-if="par2">
      <q-separator inset />
      <q-card-section v-if="par2">{{ par2 }} </q-card-section>
      <q-card-section v-else>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </div>
  </q-card>
</template>

<style scoped>
.my-card {
  max-width: 400px;
}
</style>
