<script lang="ts" setup>
import { v4 as uuid } from 'uuid'
import { autoClass, autoStyle } from '~/mixins'

const uid = uuid()
const { note } = useNote()

interface usri {
  id: string
  name: string
}
interface msgi {
  sender: string
  message: string
}

const usser: usri = ref({
  name: 'Wael',
  id: uid,
})

const message: Ref<string | null> = ref(null)
const messages: Ref<msgi[]> = ref([])
const myForm = ref(null)
const { $socket } = useNuxtApp()

onMounted(() => {
  $socket.onopen = () => {
    $socket.send(uid)
    onReset()
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
  myForm.value?.validate().then((success: any) => {
    if (success) {
      note.success('Sent!')
      onReset()
      const payload = {
        sender: usser.id,
        message: message.value,
      }
      messages.value.push(payload)
      return useFetch('/api/sendmessage', {
        method: 'POST',
        body: {
          sender: usser.id,
          message: message.value,
        },
      })
    }
  }).catch((error: any) => {
    console.log(error)
    return null
  })
}
function onReset() {
  message.value = ''
  myForm.value?.resetValidation()
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
