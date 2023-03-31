import { createSlice } from '@reduxjs/toolkit'

import { getLicenses } from '../../services/getUserLicenses'

const licenseSlice = createSlice({
  name: 'licenses',
  initialState: {
    licenses: [],
    status: '',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLicenses.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getLicenses.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.licenses = action.payload.data
        state.error = null
      })
      .addCase(getLicenses.rejected, (state, action) => {
        state.status = 'rejected'
        console.log(action.error.message)
      })
  },
})

export default licenseSlice.reducer
