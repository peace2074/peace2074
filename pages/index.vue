<script setup lang="ts">
import { SuraI } from '~/types';
import { _get } from "waelio-utils";
const online = useOnline()
const qrn: Ref<SuraI[]> = ref([])

const fetchData = () => {
  const res = useFetch<SuraI[]>('/api/quran')
    .then(quran => {
      const r1 = _get(_get(quran))
      qrn.value.push(r1)
    })
}
onBeforeMount(() => {
  fetchData()
})
</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online">
          <q-card>
            <q-card-section>
              <div v-if="qrn">
                <div v-for="q in qrn">
                  <pre>
                    {{ q }}

                  </pre>
                  
                </div>
              </div>
            </q-card-section>
          </q-card>
        </PageView>
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
    <InputEntry />
  </div>
</template>
