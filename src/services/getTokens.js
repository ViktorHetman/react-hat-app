import axios from 'axios'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { WEB_URL } from '../constants/WEB_URL'

export const getTokens = createAsyncThunk('tokens/getTokens', async (user) => {
  const res = await axios.post(`${WEB_URL}/tokens`, {
    headers: {
      'Content-Type': 'application/json',
    },
    email: user.email,
    password: user.password,
    appId: user.appId,
  })
  const token = {
    accessToken: res.data.data.accessToken,
    accessTokenEndTime: res.data.data.accessTokenEndTime,
    cabinetUserId: res.data.data.cabinetUserId,
    refreshToken: res.data.data.refreshToken,
    refreshTokenEndTime: res.data.data.refreshTokenEndTime,
  }
  localStorage.setItem('token', res.data.data.accessToken)
  localStorage.setItem('refresh', res.data.data.refreshToken)
  return token
})
