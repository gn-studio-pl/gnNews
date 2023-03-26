import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ITopHeadlines {
  sources: ITopHeadlineSource[]
  status: string
}

export interface ITopHeadlineSource {
  id: string
  name: string
  description: string
  url: string
  category: string
  language: string
  country: string
}

export interface ITopHeadlineByCountry {
  articles: IArticle[]
  status: string
  totalResults: number
}

export interface IArticle {
  author: string
  content: string
  description: string
  publishedAt: string
  source: { id: string; name: string }
  title: string
  url: string
  urlToImage: string
}

export type TCountryList = string[]

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/v2/'
  }),
  endpoints: (builder) => ({
    getListOfCountry: builder.query<TCountryList, string>({
      query: () => `top-headlines/sources?apiKey=${API_KEY}`,

      transformResponse: (response: ITopHeadlines): TCountryList =>
        [
          ...new Set(
            response.sources.map((item: ITopHeadlineSource) => item.country)
          )
        ].sort(),

      transformErrorResponse: (response: { status: string | number }) =>
        response.status
    }),
    getTopHeadlinesByCountry: builder.query<ITopHeadlineByCountry, string>({
      query: (countryName) =>
        `top-headlines?country=${countryName}&apiKey=${API_KEY}`
    })
  })
})

export const { useGetListOfCountryQuery, useGetTopHeadlinesByCountryQuery } =
  newsApi
