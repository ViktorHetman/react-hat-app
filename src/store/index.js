import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import loginReducer from './slices/loginSlice'
import licenseReducer from './slices/licenseSlice'
import contactsReducer from './slices/contactsSlice'
import messegesReducer from './slices/messegesSlice'
import sendMessageReducer from './slices/sendMessageSlice'
import recentContacsReducer from './slices/recentContacsSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistConfigRecent = {
  key: 'recentContacts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)
const persistedReducerRecent = persistReducer(
  persistConfigRecent,
  recentContacsReducer
)

export const store = configureStore({
  reducer: {
    login: loginReducer,
    licenses: licenseReducer,
    persisted: persistedReducer,
    persistedRecent: persistedReducerRecent,
    messages: messegesReducer,
    sendMessage: sendMessageReducer,
  },
})

export const persistor = persistStore(store)
