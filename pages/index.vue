<script setup lang="ts">
import { onBeforeMount, ref, useOnline } from '#imports';
import { _to } from 'waelio-utils';
import useNote from '~/composables/useNote';
import { SuraI } from '~/types';
import { conf } from '../utils/conf'
const online = useOnline()
const router = useRouter()
const { note } = useNote()
enum storageE {
  quran = 'Quran',
  size = 'Size',
  legend = 'Legend'

}
type LegendT = {
  index: number
  name: string
}
const _size: Ref<number | string> = ref('114')
const _legends: Ref<LegendT[]> = ref([])
const _quran: Ref<SuraI[]> = ref([])

async function start() {
  const { data, error } = await useFetch('/api/quran', { lazy: false, })

  setTimeout(async() => {
    if (data && data.value) {
      const nr = await data.value?.data
      _size.value = nr.Size;
      _quran.value = nr.Quran
      conf.set(storageE.quran, nr.Quran)
      _legends.value = nr.Legend
      conf.set(storageE.legend, nr.Legend)
      note.success('data loaded succsessfuly')
      return _quran.value
    }

    if (error) {
      note.error(error)
    }

  }, 2000);
}
const navToSura = (n: number) => router.push(`/quran/sura/${n}`)

onBeforeMount(() => {
  start();
  if (conf.has(storageE.quran)) {
    _quran.value = conf.getItem(storageE.quran)
  }
  if (conf.has(storageE.legend)) {
    _quran.value = conf.getItem(storageE.legend)
  }
})

</script>
<template>
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
</template>
<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}

.rtl {
  direction: rtl;
}
</style>