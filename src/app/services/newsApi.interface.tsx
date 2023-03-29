export namespace NApi {
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
}
