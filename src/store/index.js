import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import loginReducer from './slices/loginSlice'
import licenseReducer from './slices/licenseSlice'
import contactsReducer from './slices/contactsSlice'
import messegesReducer from './slices/messegesSlice'
import sendMessageReducer from './slices/sendMessageSlice'

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
    messages: messegesReducer,
    sendMessage: sendMessageReducer,
  },
})

export const persistor = persistStore(store)
