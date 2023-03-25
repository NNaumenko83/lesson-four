import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/';

export const exchangedApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints(build) {
    return {
      getCurrency: build.query({
        query: (symbols, base) => ({
          url: `latest?symbols=${symbols}&base=${base}`,
          method: 'get',
          headers: { apikey: 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y' },
        }),
      }),
    };
  },
});

export const { useGetCurrencyQuery } = exchangedApi;
