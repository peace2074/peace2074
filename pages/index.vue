<script setup lang="ts">
import { onBeforeMount, ref, useOnline } from '#imports';
import { _to } from 'waelio-utils';
import useNote from '~/composables/useNote';
import { SuraI } from '~/types';
const online = useOnline()
const { note } = useNote()

const _size = ref('114')
const _legends = ref([])
const _quran = ref([])

async function start() {
  const { data, error } = await useFetch('/api/quran')
  const nr = await data.value?.data

  _size.value = nr.Size;
  _quran.value.push(nr.Quran)
  _legends.value.push(nr.Legend)



  note.success('data loaded succsessfuly')
  return _quran.value
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
    <div v-if="_legends">
      <div v-for="(index, one) in _legends" :key="index + '' + one[index].name">
        <pre>{{ one.name }}</pre>
      </div>
    </div>
  </div>
</template>
<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}
</style>