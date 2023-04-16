import instance from '../http'
import { WEB_URL } from '../constants/WEB_URL'

export const patchMessage = async (chatId) => {
  try {
    const licenseId = localStorage.getItem('licenseId')
    const messengerType = localStorage.getItem('messengerType')
    const token = localStorage.getItem('token')
    instance.patch(
      `${WEB_URL}/licenses/${licenseId}/messengers/${messengerType}/chats/${chatId}/read`,
      { token }
    )
  } catch (e) {
    console.log(e)
  }
}
