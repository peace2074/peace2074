<script setup lang="ts">
import { autoClass } from '~/mixins'

const online = useOnline()
</script>

<template>
  <q-page padding class="flex" :class="autoClass">
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <div>
      <h3>Home</h3>
    </div>
  </q-page>
</template>
