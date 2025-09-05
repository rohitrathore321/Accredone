import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import MMKVStorage from '../../utils/storage';
import rootReducer from '../reducers';
import { authService } from '../../service/authService';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: MMKVStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  //@ts-ignore
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    })
    .concat(authService.middleware,),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
