import { onBeforeMount, useOnline } from '#imports';
<script setup lang="ts">
import { _to } from 'waelio-utils'

const online = useOnline()
</script>

<template>
  <KeepAlive>
    <div>
      <Logos mb-6 />
      <Suspense>
        <ClientOnly>
          <PageView v-if="online">
            <!-- <pre>{{ data[0] }}</pre> -->
            <!-- <pre>{{ Ayat() }}</pre> -->
          </PageView>
          <div v-else text-gray:80>
            <div class="online-banner text-h4 border-lg border-white rounded text-red" label="You're offline">
              {{ "You'reoffline" }}
            </div>
          </div>
        </ClientOnly>
        <template #fallback>
          <div italic op50>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
      <InputEntry />
    </div>
  </KeepAlive>
</template>

<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}

.rtl {
  direction: rtl;
}
</style>
