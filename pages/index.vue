import { onBeforeMount, useOnline } from '#imports';
<script setup lang="ts">
import { _to } from 'waelio-utils'

const online = useOnline()
</script>

<template>
  <KeepAlive>
    <PageView :views="true">
      <Logos mx-auto mb-6 class="table" aria-label="logos" />
    </PageView>
  </KeepAlive>
</template>

<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}
</style>
