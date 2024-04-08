<script lang="ts" setup>
import { v4 as uuid } from 'uuid'
import { autoClass, autoStyle } from '~/mixins'

const message = ref<string>('')

const { $socket } = useNuxtApp()
const uid = uuid()

onMounted(() => {
  $socket.onopen = () => {
    localStorage.setItem(`connection-${uid}`, uid)
    $socket.send(uid)
  }

  $socket.onmessage = ({ data }: any) => {
    console.warn('data', data)
    message.value = data
  }
  $socket.onclose = function () {
    console.warn('disconnected')
  }
})

function sendMessage() {
  fetch('/api/sendmessage', {
    method: 'POST',
    body: JSON.stringify({ message: Math.random(), sender: localStorage.getItem(`connection-${uid}`) }),
  }).then(res => res.json()).then((_data) => {
    console.warn('sent')
  })
}
function onReset() {
  message.value = ''
}
</script>

<template>
  <div class="q-pa-md col justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        name="Jane"
        :text="['doing fine, how r you?']"
      />
    </div>
    <q-form
      ref="myForm"
      class="q-gutter-md"
      @submit="sendMessage"
      @reset="onReset"
    >
      <q-input
        v-model="message"
        filled
        label="send a message"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="positive" />
        <q-btn label="Reset" type="reset" color="warning" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>
