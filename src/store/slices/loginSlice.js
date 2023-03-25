import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    userAppId: '',
  },
  reducers: {
    emailInputHandler(state, action) {},
    passwordInputHandle(state, action) {},
    appIdInputHandler(state, action) {},
  },
})

export const { emailInputHandler, passwordInputHandle, appIdInputHandler } =
  loginSlice.actions

export default loginSlice.reducer
