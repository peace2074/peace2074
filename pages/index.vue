<script setup lang="ts">
import { useSound } from '@vueuse/sound'

const audioList = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/262.mp3'
// const { data } = await useFetch(audioList)
// import { useI18n } from "#imports"
const { data } = useFetch('http://api.alquran.cloud/v1/ayah/262/ar.alafasy')

const playbackRate = 0.75

const options = {
  autoplay: true,
  playbackRate,
}
</script>

<template>
  <KeepAlive>
    <PageView :views="true">
      <Logos mx-auto mb-6 class="table" aria-label="logos" />
      <audio controls autoplay>
        <source :src="audioList" type="audio/ogg">
        <source :src="audioList" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <div class="text-h5">
        {{ data.data.text }}
      </div>
      <!-- <pre>{{ data }}</pre> -->
    </PageView>
  </KeepAlive>
</template>

<style scoped>
.online-banner {
  border: solid 0.11rem lightgoldenrodyellow;
}
</style>
