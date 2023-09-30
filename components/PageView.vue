<script setup lang="ts">
import { conf } from '~/utils/conf'

defineProps({
  views: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const appName = conf.get('app:businessame')
useHead({
  title: appName,
})
const { data } = await useFetch('/api/pageview')
const time = useTimeAgo(() => data.value?.startAt || 0)
</script>

<template>
  <Suspense>
    <ClientOnly>
      <q-page>
        <slot />
        <div v-if="views" text-gray:80>
          <span font-500 text-gray>{{ data?.pageview }}</span>
          page views since
          <span text-gray>{{ time }}</span>
        </div>
      </q-page>
    </ClientOnly>
    <template #fallback>
      <div italic op50>
        <span animate-pulse>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>
