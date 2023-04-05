import { createAsyncThunk } from '@reduxjs/toolkit'

import instance from '../http'
import { WEB_URL } from '../constants/WEB_URL'

export const postMessage = createAsyncThunk(
  'message/PostMessage',
  async (chatId) => {
    try {
      const licenseId = localStorage.getItem('licenseId')
      const messengerType = localStorage.getItem('messengerType')
      const token = localStorage.getItem('token')
      const text = localStorage.getItem('text')
      const res = await instance.post(
        `${WEB_URL}/licenses/${licenseId}/messengers/${messengerType}/chats/${chatId}/messages/text`,
        {
          token,
          text: text,
        }
      )
      return res
    } catch (e) {
      console.log(e)
    }
  }
)
