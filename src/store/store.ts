import {configureStore} from '@reduxjs/toolkit'
// @ts-ignore
import storage from 'redux-persist/lib/storage';
import itemSlice from './slice/itemSlice'
import {persistReducer, persistStore} from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {itemApi} from "./api/item.api";
import authSlice from "./slice/authSlice";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const authReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    item: itemSlice,
    auth: authReducer,
    [itemApi.reducerPath]: itemApi.reducer,
    // [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(itemApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export let persistor = persistStore(store)
