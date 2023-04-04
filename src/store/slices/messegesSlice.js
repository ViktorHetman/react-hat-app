import { createSlice } from '@reduxjs/toolkit'

import { getMessagesHistory } from '../../services/getMessagesHistory'

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    allMesseges: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessagesHistory.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getMessagesHistory.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.allMesseges = action.payload.data
        state.error = null
      })
      .addCase(getMessagesHistory.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})

export default messagesSlice.reducer
