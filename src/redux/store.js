import { configureStore } from '@reduxjs/toolkit';
import { exchangedApi } from './exchangesApi';
import currencySlice from './filterSlice';

export const store = configureStore({
  reducer: {
    currency: currencySlice,
    [exchangedApi.reducerPath]: exchangedApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(exchangedApi.middleware),
});
