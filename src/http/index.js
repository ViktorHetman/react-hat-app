import axios from 'axios'

import { WEB_URL } from '../constants/WEB_URL'

const instance = axios.create({
  WEB_URL: WEB_URL,
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
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
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
    }

    try {
      const refreshToken = localStorage.getItem('refresh')
      const response = await axios.post(`${WEB_URL}/tokens/refresh`, {
        headers: {
          Refresh: refreshToken,
          Accept: 'application/json',
        },
      })

      localStorage.setItem('token', response.data.data.accessToken)
      localStorage.setItem('refresh', response.data.data.refreshToken)

      return instance.request(originalRequest)
    } catch (e) {
      console.log(e)
      instance.request(originalRequest)
    }
  }
)

export default instance
