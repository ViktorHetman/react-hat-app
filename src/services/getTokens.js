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
  const token = {
    accesToken: res.data.data.accessToken,
    accessTokenEndTime: res.data.data.accessTokenEndTime,
    cabinetUserId: res.data.data.cabinetUserId,
    refreshToken: res.data.data.refreshToken,
    refreshTokenEndTime: res.data.data.refreshTokenEndTime,
  }
  return token
}
