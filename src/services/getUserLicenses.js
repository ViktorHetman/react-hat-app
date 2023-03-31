import { createAsyncThunk } from '@reduxjs/toolkit'

import instance from '../http'

const WEB_URL = 'https://api.chatapp.online/v1'

export const getLicenses = createAsyncThunk(
  'licenses/getLicenses',
  async (token) => {
    const res = await instance.get(`${WEB_URL}/licenses`, { token })
    const licenseList = res.data.data
    localStorage.setItem('licenseId', licenseList[0].licenseId)
    localStorage.setItem('messengerType', licenseList[0].messenger[0].type)
    return licenseList
  }
)

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const licenseId = localStorage.getItem('licenseId')
      const messengerType = localStorage.getItem('messengerType')
      const token = localStorage.getItem('token')
      const res = await instance.get(
        `${WEB_URL}/licenses/${licenseId}/messengers/${messengerType}/contacts`,
        { token }
      )
      const allContacts = res.data
      console.log(allContacts)
      return allContacts
    } catch (e) {
      console.log(e)
    }
  }
)
