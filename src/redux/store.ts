import { configureStore } from '@reduxjs/toolkit'

import genderReducer from './slices/gender'

export const store = configureStore({
  reducer: {
    gender: genderReducer,
  },
})
