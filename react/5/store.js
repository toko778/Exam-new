import { configureStore, createSlice } from '@reduxjs/toolkit';

// 2. Slice-ის შექმნა (Reducer და Action-ები)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 1. Redux Store-ის კონფიგურაცია
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});