import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './slices/loginSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})

store.subscribe(() => {
  const accessToken = store.getState().login.token.accessToken
  const refreshToken = store.getState().login.token.refreshToken
  localStorage.setItem('token', JSON.stringify(accessToken))
  localStorage.setItem('refresh', JSON.stringify(refreshToken))
})
