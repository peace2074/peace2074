<script setup lang="ts">
import { AyaI, SuraI } from '~/types';
import { _get, _reParseString } from "waelio-utils";
import { ref, Ref, unref, reactive } from "#imports";
const { start, quran, legends } = useQuran()
const online = useOnline()

onBeforeMount(() => {
  start()
})
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online">
          <div v-for="one in legends">
            <pre>{{ one }}</pre>
          </div>
          <!-- <pre>{{ data[0] }}</pre> -->
          <!-- <pre>{{ Ayat() }}</pre> -->
        </PageView>
        <div v-else text-gray:80>
          <div class="online-banner rounded text-h1 text-red border-white border-lg" label="You're offline">{{ "You're offline" }}</div>
          <div v-for="one in legends">
            <pre>{{ one.name }}</pre>
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
</template>
<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}
</style>