import axios from 'axios'

const WEB_URL = 'https://api.chatapp.online/v1/tokens'

export async function getTokens(email, password, userAppId) {
  const res = await axios.post(WEB_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    email: email,
    password: password,
    appId: userAppId,
  })
  console.log(res)
}
