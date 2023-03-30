import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { NApi } from './newsApi.interface'

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/'
  }),
  endpoints: (builder) => ({
    getListOfCountry: builder.query<NApi.TCountryList, string>({
      query: () => `top-headlines/sources?apiKey=${API_KEY}`,

      transformResponse: (response: NApi.ITopHeadlines): NApi.TCountryList =>
        [
          ...new Set(
            response.sources.map(
              (item: NApi.ITopHeadlineSource) => item.country
            )
          )
        ].sort(),

      transformErrorResponse: (response: { status: string | number }) =>
        response.status
    }),
    getTopHeadlinesByCountry: builder.query<NApi.ITopHeadlineByCountry, string>(
      {
        query: (countryName) =>
          `top-headlines?country=${countryName}&apiKey=${API_KEY}`
      }
    )
  })
})

export const { useGetListOfCountryQuery, useGetTopHeadlinesByCountryQuery } =
  newsApi
