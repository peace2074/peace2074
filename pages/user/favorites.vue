<template>
  <NuxtLayout name="default">
    <q-page :style-fn="autoStyle" padding>
      <h1 class="text-h3 tect-center text-cyan-10 d-block">Favourites</h1>
    </q-page>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import { autoStyle } from "../../mixins";
</script>
