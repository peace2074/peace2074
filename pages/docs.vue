<template>
  <div class="bg-green-3 text-white q-mt-none flex fit">
    <h1>Docs</h1>
    {{ bar }}
  </div>
</template>

<script lang="ts" setup>
const bar = ref('')
// const $api = ()=>{console.log('triggered');

// useAsyncData ({ $api }) {
//     return { foo: await $api.foo.get() }
// }
// onMounted(async () =>     bar.value = await $api.bar.get())
</script>

<style lang="scss" scoped></style>
