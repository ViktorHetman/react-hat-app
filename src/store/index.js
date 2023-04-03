import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import loginReducer from './slices/loginSlice'
import licenseReducer from './slices/licenseSlice'
import contactsReducer from './slices/contactsSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    login: loginReducer,
    licenses: licenseReducer,
    persisted: persistedReducer,
  },
})

export const persistor = persistStore(store)
