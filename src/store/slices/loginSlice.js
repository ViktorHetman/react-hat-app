import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: null,
    password: null,
    userAppId: null,
  },
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.password = action.payload.password
      state.userAppId = action.payload.userAppId
    },
  },
})

export const { setUser } = loginSlice.actions

export default loginSlice.reducer
