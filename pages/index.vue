<script setup lang="ts">
import { onBeforeMount, useOnline } from '#imports';
import { _to } from 'waelio-utils';
import { core } from '../utils/core'
const online = useOnline()
const router = useRouter()
const { start, _quran, _legends, _size,  _enums } = useQuran()
const navToSura = (n: number) => router.push(`/quran/sura/${n}`)

onBeforeMount(() => {
  start();
  if (core.has(_enums.quran)) {
    _quran.value = core.getItem(_enums.quran)
  }
  if (core.has(_enums.legend)) {
    _legends.value = core.getItem(_enums.legend)
  }
  if (core.has(_enums.size)) {
    _size.value = core.getItem(_enums.size)
  }
})

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
            <div class="online-banner rounded text-h4 text-red border-white border-lg" label="You're offline">
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
      <div class="q-pa-md row items-start q-gutter-md" v-if="_legends">
        <div v-for="one in _legends" class="rtl">
          <q-btn :class="one.index" :label="one.name" @click="navToSura(one.index)" />
        </div>
      </div>
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