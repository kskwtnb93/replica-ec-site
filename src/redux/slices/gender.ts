import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/redux/store'

const initialState = {
  gender: 'all',
}

export const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    switchGender: (state, action) => {
      state.gender = action.payload
    },
  },
})

export const { switchGender } = genderSlice.actions

export const selectGender = (state: RootState) => state.gender

export default genderSlice.reducer
