import axios from 'axios'

const WEB_URL = 'https://api.chatapp.online/v1'

const instance = axios.create({
  WEB_URL: WEB_URL,
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = JSON.parse(token)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
    }

    try {
      const refreshToken = localStorage.getItem('refresh')
      const response = await axios.post(`${WEB_URL}/tokens/refresh`, {
        headers: {
          Refresh: JSON.parse(refreshToken),
          Accept: 'application/json',
        },
      })

      localStorage.setItem('token', response.data.data.accessToken)
      localStorage.setItem('refresh', response.data.data.refreshToken)

      return instance.request(originalRequest)
    } catch (e) {
      localStorage.removeItem('token')
      localStorage.removeItem('refresh')
      window.location.replace('/login')
    }
  }
)

export default instance
