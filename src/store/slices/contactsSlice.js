import { createSlice } from '@reduxjs/toolkit'

import { getContacts } from '../../services/getUserLicenses'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    userContacts: [],
    userName: '',
    userPhone: '',
    status: '',
    error: null,
  },
  reducers: {
    setName(state, action) {
      state.userName = action.payload.userName
      state.userPhone = action.payload.userPhone
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.userContacts = action.payload.data
        state.error = null
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.status = 'rejected'
        console.log(action.error.message)
      })
  },
})
export const { setName } = contactsSlice.actions

export default contactsSlice.reducer
