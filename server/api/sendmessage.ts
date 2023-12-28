import WebSocket from 'ws'

export default defineEventHandler(async (event) => {
  const { message, sender } = await readBody(event)

  globalThis.clients?.forEach((client: { id: any, readyState: number, send: (arg0: { message: any }) => void }, isBinary: any) => {
    if (client.id !== sender && client.readyState === WebSocket.OPEN)
      client.send({ message })
  })

  return {
    data: {
      sender,
      message: 'Sent successfully!',
    },
  }
})
