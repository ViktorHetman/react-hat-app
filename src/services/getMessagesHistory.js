import { createAsyncThunk } from '@reduxjs/toolkit'

import instance from '../http'
import { WEB_URL } from '../constants/WEB_URL'

export const getMessagesHistory = createAsyncThunk(
  'messages/getMessages',
  async (chatId) => {
    try {
      const licenseId = localStorage.getItem('licenseId')
      const messengerType = localStorage.getItem('messengerType')
      const token = localStorage.getItem('token')
      const res = await instance.get(
        `${WEB_URL}/licenses/${licenseId}/messengers/${messengerType}/chats/${chatId}/messages`,
        { token }
      )
      const messagesHistory = res.data
      return messagesHistory
    } catch (e) {
      console.log(e)
    }
  }
)
