<script lang="ts" setup>
const localData = ref([])
const showTooltip = ref(true)
const delayTime = ref(10000)
const { data } = await useFetch('/api/holynames')
const { names } = data.value
if (names)
  localData.value.push(names)
</script>

<template>
  <page-view :views="true">
    <div>
      <h1 class="text-h3 text-center">
        Holy Names
      </h1>
      <q-toggle v-model="showTooltip">
        Info
      </q-toggle>
      <q-slider v-model="delayTime" :step="100" :min="100" :max="10000">
        Delay time
      </q-slider>
    </div>
    <div v-if="data?.names" class="row">
      <q-badge v-for="n in data.names" :key="n.index" rounded class="q-pa-md q-mx-md text-h6 q-my-md round">
        {{ n.name }}
        <q-tooltip v-if="showTooltip" :hide-delay="delayTime" class="rtl text-h5">
          {{ n.text }}
        </q-tooltip>
      </q-badge>
    </div>
  </page-view>
</template>

<style>

</style>
