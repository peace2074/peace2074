// server/middleware/socket.ts
import type { Socket } from 'socket.io'
import { Server } from 'socket.io'

export default defineEventHandler(({ node }) => {
  if (global.io)
    return

  global.io = new Server(node.res.socket?.server)

  global.io.on('connection', async (socket: Socket) => {
    console.log('a user connected')

    socket.on('message', (data) => {
      console.log('received message:', data)
      global.io.emit('message', 'Hello, client!')
    })
  })
})
