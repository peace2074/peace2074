// @ts-ignore
import WebSocket, { WebSocketServer } from "ws"

type Client = {
  id: string
  send: (message: string) => void
  readyState: number
}

declare global {
  var wss: WebSocketServer
  var clients: Client[]
}

let wss: WebSocketServer
let clients: Client[] = []

export default defineEventHandler((event) => {

  if (!global.wss) {
    wss = new WebSocketServer({ server: event.node.res.socket?.server })


    wss.on("connection", function (socket: { send: (arg0: string) => void; on: (arg0: string, arg1: (message: any) => void) => void }) {

      socket.send("connected")

      socket.on("message", function (message) {
        wss.clients.forEach(function (client: Client) {
          if (client == socket && client.readyState === WebSocket.OPEN) {
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