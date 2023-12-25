import WebSocket, { WebSocketServer } from 'ws'
import { defineEventHandler } from 'h3'

interface Client {
  id: string
  send: (message: string) => void
  readyState: number
}

declare global {

  const wss: WebSocketServer
  const clients: Client[]0
}

let wss: WebSocketServer
const clients: Client[] = []

export default defineEventHandler((event) => {
  //
  if (!global.wss) {
    wss = new WebSocketServer({ server: event.node?.res?.socket?.server })

    wss.on('connection', (socket) => {
      socket.send('connected')

      socket.on('message', (message) => {
        wss.clients.forEach((client) => {
          if (client === socket && client.readyState === WebSocket.OPEN) {
            clients.push({
              id: message.toString(),
              send: (data: string) => client.send(data),
              readyState: client.readyState,
            })
            global.clients = clients
          }
        })
      })
      global.wss = wss
    })
  }
})
