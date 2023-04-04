import Pusher from 'pusher-js'

const token = localStorage.getItem('token')

const pusher = new Pusher('ChatsAppApiProdKey', {
  wsHost: 'socket.chatapp.online',
  wssPort: 6001,
  disableStats: true,
  authEndpoint: 'https://api.chatapp.online/broadcasting/auth',
  auth: {
    headers: {
      Authorization: token,
    },
  },
  enabledTransports: ['ws'],
  forceTLS: true,
  cluster: 'ru',
})

export default pusher
