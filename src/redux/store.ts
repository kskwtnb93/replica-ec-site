import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cart'
import genderReducer from './slices/gender'

export const store = configureStore({
  reducer: {
    gender: genderReducer,
    cart: cartReducer,
    cartTotalQuantity: cartReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
