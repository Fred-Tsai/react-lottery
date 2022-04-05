import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
  name: 'result',
  initialState: {
    result: {},
  },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setResult } = resultSlice.actions;

export const selectResult = (state) => state.result;

export default resultSlice.reducer;
