<script setup lang="ts">
import { v4 as uuid } from 'uuid'
import { autoClass } from '~/mixins'

const message = ref<string>('')

const { $socket } = useNuxtApp()
const uid = uuid()

onMounted(() => {
  $socket.onopen = () => {
    localStorage.setItem(`connection-${uid}`, uid)
    $socket.send(uid)
  }

  $socket.onmessage = ({ data }: any) => {
    console.log('data', data)
    message.value = data
  }
  $socket.onclose = function () {
    console.log('disconnected')
  }
})

function sendMessage() {
  fetch('/api/sendmessage', {
    method: 'POST',
    body: JSON.stringify({ message: Math.random(), sender: localStorage.getItem(`connection-${uid}`) }),
  }).then(res => res.json()).then((data) => {
    console.log('sent')
  })
}
const online = useOnline()
</script>

<template>
  <q-page padding class="fit flex" :class="autoClass">
    <Suspense>
      <ClientOnly fit :class="autoClass">
        <PageView v-if="online" />
        <div v-else text-red:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <div class="fit aligh-middle flex justify-center" :class="autoClass">
      <h3>Home</h3>
      <div class="sticky">
        <ChatBox />
      </div>
    </div>
  </q-page>
</template>
