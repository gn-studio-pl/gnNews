import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NewsApiResponse } from 'models/news';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://newsapi.org/v2/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', '5eeb53e2b160427c97a70fc29b2e37e4');
      return headers
    },
  }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsApiResponse, void>({
      query: () => `everything?q=bitcoin`,
      providesTags: ['News'],
    }),
    getCountryNews: builder.query<NewsApiResponse, string>({
      query: (id: string) => `top-headlines?country=${id}`,
      providesTags: ['News'],
    }),
  }),
})

export const {useGetAllNewsQuery, useGetCountryNewsQuery} = newsApi