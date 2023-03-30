import Pusher from 'pusher-js/types/src/core/pusher'

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
// const channel = pusher.subscribe(
//   'private-v1.licenses.27720.messengers.grWhatsApp'
//   )
//   channel.bind('message', (data) => {
//     console.log(data)
//   })

export default pusher
