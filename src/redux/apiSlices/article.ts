import { randomNumber } from '../../helpers/numbers';
import { apiSlice } from '../api/api';

interface ArticleSource {
  id: string;
  name: string;
}

export interface Article {
  author: string;
  content?: string;
  description?: string;
  publishedAt: string;
  source: ArticleSource;
  title: string;
  url: string;
  urlToImage?: string;
}

interface CountryQuery {
  code: string;
}

interface ArticlesResponse {
  articles: Article[];
  status: string;
  totalResults: number;
}

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<ArticlesResponse, CountryQuery>({
      query: ({ code }) => ({
        url: `/top-headlines`,
        params: {
          country: code,
          apiKey: '1f049adc3ec04de6bc4daaf76ef7531c',
        },
      }),
      transformResponse: getArticlesResponse(),
    }),
  }),
});

export const { useGetArticlesQuery } = articleApiSlice;

function getArticlesResponse() {
  const getData = async (res: ArticlesResponse) => {
    if (!res?.articles?.length) return res;

    res.articles = res.articles.map((article) => {
      if (!article.urlToImage) {
        article.urlToImage = `https://picsum.photos/400/200?random=${randomNumber(
          2,
        )}`;
      }
      return article;
    });

    return res;
  };
  return getData;
}
