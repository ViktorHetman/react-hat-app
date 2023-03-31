import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './slices/loginSlice'
import licenseReducer from './slices/licenseSlice'
import contactsReducer from './slices/contactsSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    licenses: licenseReducer,
    contacts: contactsReducer,
  },
})
