<script setup lang="ts">
import { autoClass } from '~/mixins'

const online = useOnline()
</script>

<template>
  <q-page padding class="fit flex" :class="autoClass">
    <Suspense>
      <ClientOnly fit :class="autoClass">
        <PageView v-if="online" />
        <div v-else text-red:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <div class="fit aligh-middle flex justify-center" :class="autoClass">
      <div class="row">
        <h3>Home</h3>
      </div>
      <ChatBox />
    </div>
  </q-page>
</template>
