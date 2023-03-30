import axios from 'axios'

const WEB_URL = 'https://api.chatapp.online/v1/tokens/refresh'

const instance = axios.create({
  WEB_URL: WEB_URL,
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalConfig = error.config

    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true
    }

    try {
      const response = await axios.post(WEB_URL, {
        headers: {
          Refresh: localStorage.getItem('token'),
          Accept: 'application/json',
        },
      })

      localStorage.setItem('token', response.data.data.accessToken)
      localStorage.setItem('refresh', response.data.data.refreshToken)

      instance.defaults.headers.common[
        'Authorization'
      ] = `${response.data.data.accessToken}`
    } catch (e) {
      localStorage.removeItem('token')
      localStorage.removeItem('refresh')
      window.location.replace('/login')
    }
  }
)

export default instance
