import { createSlice } from '@reduxjs/toolkit'

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

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
export const selectGender = (state) => state.gender

export default genderSlice.reducer
