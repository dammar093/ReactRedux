import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('reward/increment')
export const incrementByAmount = createAction('reward/incrementByAmount')

const initialState = { value: 10 }

const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})

export default rewardReducer