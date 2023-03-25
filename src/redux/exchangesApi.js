import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/';

export const exchangedApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  reducerPath: 'Exchange',
  tagTypes: ['exchange'],

  endpoints: builder => ({
    getCurrency: builder.query({
      query: ({ base, symbols }) => {
        console.log('base:', base);
        console.log('symbols:', symbols);

        return {
          url: `latest?symbols=${symbols}&base=${base}`,
          method: 'get',
          headers: { apikey: 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y' },
        };
      },
    }),
  }),
});

export const { useGetCurrencyQuery } = exchangedApi;
