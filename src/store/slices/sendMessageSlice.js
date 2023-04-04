import { createSlice } from '@reduxjs/toolkit'

import { postMessage } from '../../services/postMessage'

const sendMessageSlice = createSlice({
  name: 'sendMessage',
  initialState: {
    chatId: '',
    message: '',
    status: '',
    error: null,
  },
  reducers: {
    setInfo(state, action) {
      state.chatId = action.payload.chatId
      state.text = action.payload.text
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postMessage.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(postMessage.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.message = action.payload.data
        state.error = null
      })
      .addCase(postMessage.rejected, (state, action) => {
        state.error = action.error.message
        alert(state.error)
      })
  },
})
export const { setInfo } = sendMessageSlice.actions

export default sendMessageSlice.reducer
