import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts/contactsApi';
// import { contactsSlice } from './contacts/contactsSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { authReducer } from './auth/authSlice';
import { authApi } from './auth/authApi';
import { contactsReducer } from './contacts/contactsSlice';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: persistedUserReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

    contactsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
// setupListeners(store.dispatch);
