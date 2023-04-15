import { createSlice } from '@reduxjs/toolkit'

import { getRecentContacts } from '../../services/getRecentContacts'

const recentSlice = createSlice({
  name: 'recentContacts',
  initialState: {
    recentContacts: [],
    status: '',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecentContacts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getRecentContacts.fulfilled, (state, action) => {
        state.recentContacts = action.payload.data
        state.status = 'fulfilled'
        state.error = null
      })
      .addCase(getRecentContacts.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})

export default recentSlice.reducer
