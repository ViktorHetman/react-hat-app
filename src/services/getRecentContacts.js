import { createAsyncThunk } from '@reduxjs/toolkit'

import instance from '../http'
import { WEB_URL } from '../constants/WEB_URL'

export const getRecentContacts = createAsyncThunk(
  'contacts/recentContacts',
  async () => {
    try {
      const licenseId = localStorage.getItem('licenseId')
      const messengerType = localStorage.getItem('messengerType')
      const token = localStorage.getItem('token')
      const res = await instance.get(
        `${WEB_URL}/licenses/${licenseId}/messengers/${messengerType}/chats`,
        { token }
      )
      const recentContacts = res.data
      return recentContacts
    } catch (e) {
      console.log(e)
    }
  }
)
