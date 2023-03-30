import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './slices/loginSlice'
import licenseReducer from './slices/licenseSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    licenses: licenseReducer,
  },
})

store.subscribe(() => {
  const accessToken = store.getState().login.token.accessToken
  const refreshToken = store.getState().login.token.refreshToken
  localStorage.setItem('token', JSON.stringify(accessToken))
  localStorage.setItem('refresh', JSON.stringify(refreshToken))
})
