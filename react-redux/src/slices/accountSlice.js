import { createSlice } from '@reduxjs/toolkit'

const initialState = { amount : 100 }

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment(state) {
      state.amount++
    },
    decrement(state) {
      state.amount--
    },
    incrementByAmount(state, action) {
      state.amount += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = accountSlice.actions
export default accountSlice.reducer