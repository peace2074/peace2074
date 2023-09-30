<script lang="ts" setup>
const localData = ref([])
const { data } = await useFetch('/api/holynames')
if (data)
  localData.value.push(data)
</script>

<template>
  <page-view :views="true">
    <div v-if="data?.data" class="row">
      <q-badge v-for="n in data.data" :key="n.index" rounded class="q-pa-md q-mx-md text-h6 q-my-md round">
        {{ n.name }}
        <q-tooltip class="rtl text-h5">
          {{ n.text }}
        </q-tooltip>
      </q-badge>
    </div>
  </page-view>
</template>

<style>

</style>
