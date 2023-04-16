import { createSlice } from '@reduxjs/toolkit'

import { getRecentContacts } from '../../services/getRecentContacts'

const recentSlice = createSlice({
  name: 'recentContacts',
  initialState: {
    recentContacts: [],
    status: '',
    error: null,
  },
  reducers: {
    setOpen(state, action) {
      state.recentContacts.items.map((item) =>
        item.id === action.payload.id
          ? ((item.isOpen = true), (item.unreadMessages = 0))
          : (item.isOpen = false)
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecentContacts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getRecentContacts.fulfilled, (state, action) => {
        state.recentContacts = action.payload.data
        state.recentContacts.items.map((item) => (item.isOpen = false))
        state.status = 'fulfilled'
        state.error = null
      })
      .addCase(getRecentContacts.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})
export const { setOpen } = recentSlice.actions

export default recentSlice.reducer
