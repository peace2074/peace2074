<script setup lang="ts">
import { onBeforeMount, ref, useOnline } from '#imports';
import { _to } from 'waelio-utils';
import useNote from '~/composables/useNote';
import { SuraI } from '~/types';
const online = useOnline()
const { note } = useNote()
type LegendT = {
  index: number;
  name: string;
}
const _size: Ref<number | string> = ref('114')
const _legends: Ref<LegendT[]> = ref([])
const _quran: Ref<SuraI[]> = ref([])

async function start() {
  const { data, error } = await useFetch('/api/quran', { lazy: false, })
  if (data && data.value) {
    const nr = await data.value?.data
    _size.value = nr.Size;
    _quran.value = [...nr.Quran]
    _legends.value = [...nr.Legend]
    note.success('data loaded succsessfuly')
    return _quran.value
  }

  if (error) {
    note.error(error)
  }
}

onBeforeMount(() => {
  start();
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
    <div v-if="_legends && _legends[0]">
      <div v-for="one in _legends[0]">
        <div><span :class="one.index">{{ one.name }}</span> </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}
</style>