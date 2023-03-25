import { configureStore } from '@reduxjs/toolkit';
import { exchangedApi } from './exchangesApi';

export const store = configureStore({
  reducer: {
    [exchangedApi.reducerPath]: exchangedApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    exchangedApi.middleware,
  ],
});
