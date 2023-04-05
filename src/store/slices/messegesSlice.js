import { createSlice } from '@reduxjs/toolkit'

import { getMessagesHistory } from '../../services/getMessagesHistory'

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    allMesseges: [],
    status: null,
    error: null,
  },
  reducers: {
    setMessage(state, action) {
      state.allMesseges.unshift(action.payload.allMesseges[0])
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessagesHistory.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getMessagesHistory.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.allMesseges = action.payload.data.items
        state.error = null
      })
      .addCase(getMessagesHistory.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})
export const { setMessage } = messagesSlice.actions

export default messagesSlice.reducer
