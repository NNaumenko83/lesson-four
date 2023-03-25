import { createSlice } from '@reduxjs/toolkit';

const initialState = 'UAH';

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    currencyChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { currencyChange } = currencySlice.actions;

export default currencySlice.reducer;

export const getCurrencyValue = state => state.currency;
