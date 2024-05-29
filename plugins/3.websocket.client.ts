import { WebSocketServer } from "ws"

export default defineNuxtPlugin(() => {
  if (process.server)
    return

  const socket = new WebSocket('ws://localhost:3000/api/send-message')

  return {
    provide: {
      socket,
    },
  }
})
