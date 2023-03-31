import { createSlice } from '@reduxjs/toolkit'

import { getContacts } from '../../services/getUserLicenses'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    userContacts: [],
    status: '',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.userContacts = action.payload
        state.error = null
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.status = 'rejected'
        console.log(action.error.message)
      })
  },
})

export default contactsSlice.reducer
