import { createAsyncThunk } from '@reduxjs/toolkit'

import instance from '../http'

const WEB_URL = 'https://api.chatapp.online/v1'
const token = localStorage.getItem('token')

export const getLicenses = createAsyncThunk(
  'licenses/getLicenses',
  async () => {
    const res = await instance.get(`${WEB_URL}/licenses`, { token })
    const licenseList = res.data.data
    return licenseList
  }
)
