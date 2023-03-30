import { createSlice } from '@reduxjs/toolkit'

import { getTokens, refreshTokens } from '../../services/getTokens'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: null,
    password: null,
    userAppId: null,
    token: {},
    status: '',
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.password = action.payload.password
      state.userAppId = action.payload.userAppId
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTokens.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(refreshTokens.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getTokens.fulfilled, (state, action) => {
        state.status = 'fullfield'
        state.token = action.payload
        state.error = null
      })
      .addCase(refreshTokens.fulfilled, (state, action) => {
        state.status = 'fullfield'
        state.token = action.payload
        state.error = null
      })
      .addCase(getTokens.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
        alert('Enter valid information!')
      })
      .addCase(refreshTokens.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
  },
})

export const { setUser } = loginSlice.actions

export default loginSlice.reducer
