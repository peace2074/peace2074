<script setup lang="ts">
import { useSound } from '@vueuse/sound'

const audioList = "/assets/raw/Blue.mp3"
// const { data } = await useFetch(audioList)
// import { useI18n } from "#imports"
// const { data } = useFetch('http://api.alquran.cloud/v1/ayah/262/ar.alafasy')

const playbackRate = 0.75




const { play, stop } = useSound(audioList)

const options = {
  autoplay: true,
  playbackRate
}
</script>

<template>
  <KeepAlive>
    <PageView :views="true">
      <Logos mx-auto mb-6 class="table" aria-label="logos" />
      <q-btn label="play" @click="play" />
      <q-btn label="stop" @click="() => stop(0)" />
      <pre>{{ play }}</pre>
    </PageView>
  </KeepAlive>
</template>

<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}
</style>
