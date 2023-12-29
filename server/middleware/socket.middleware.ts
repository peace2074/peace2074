import type { Socket } from 'socket.io'
import { Server } from 'socket.io'

const appSocket = {
  emit: (channel: string, message: string) => {
    console.log('Not initiated yet', channel, message)
  },
}

export default defineEventHandler((event) => {
  event.context.appSocket = appSocket

  if (global.io)
    return
  console.log('Initiating socket.middleware')

  const node = event.node
  global.io = new Server(node.res.socket?.server)
  global.io.on('connection', (socket: Socket) => {
    socket.emit('message-channel', `welcome ${socket.id}`)

    listeners.push({ channel: 'message', socket })

    appSocket.emit = (channel, message) => {
      global.io.emit(channel, message)
    }

    socket.on('message', (data) => {
      console.log('Relaying again for funsies: ', data)
      global.io.emit('message-channel', `Hello, client! ${data}`)
    })

    socket.on('disconnect', () => {
      // Put optional disconnect logic here
    })
  })
})
