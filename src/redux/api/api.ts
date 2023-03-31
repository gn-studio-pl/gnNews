import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2',
  }),
  endpoints: () => ({}),
});
