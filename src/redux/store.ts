import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { WebStorage } from 'redux-persist/lib/types'

import cartReducer from './slices/cart'
import genderReducer from './slices/gender'

/**
 * SSR時に(?) redux-persist で同期ストレージの作成に失敗するため createPersistStorage() で storage の値を調整
 * 参考：　https://github.com/vercel/next.js/discussions/15687#discussioncomment-45319
 */
export function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null)
      },
      setItem() {
        return Promise.resolve()
      },
      removeItem() {
        return Promise.resolve()
      },
    }
  }

  return createWebStorage('local')
}

const storage = createPersistStorage()

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  gender: genderReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  /**
   * A non-serializable value was detected in an action, in the path: `register`... のエラーをデフォルトのミドルウェアをカスタマイズして回避
   * 参考: https://github.com/rt2zz/redux-persist/issues/988#issuecomment-1172584633
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
