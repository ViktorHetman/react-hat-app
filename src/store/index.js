import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slices/loginSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})

store.subscribe(() => {
  const state = store.getState().login
  localStorage.setItem('user', JSON.stringify(state))
})
