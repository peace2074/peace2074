<script setup lang="ts">
import { onBeforeMount, ref, useFetch, useOnline } from '#imports';
import useNote from '~/composables/useNote';
import { SuraI } from '~/types';
const online = useOnline()
const { note } = useNote()

const _size = ref('114')
const _legends = ref([])
const _quran = ref([])

async function start() {

  const { data } = await useFetch('/api/quran')
console.log('data', data);

  if (data.value && data.value.Quran) {
    _quran.value.push(data.value.Quran);
    _legends.value.push(data.value.Legend);
    _size.value = data.value.Size;
    note.success('data loaded succsessfuly')
  }
}
onMounted(() => {
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
    <div v-if="quran">
      <div v-for="(index, one) in quran" :key="index+''+one[index].name">
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