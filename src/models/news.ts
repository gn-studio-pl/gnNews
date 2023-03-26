export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: News[];
}

export interface News {
  author?: string | null;
  content?:string | null;
  description?: string | null;
  title: string;
  url?: string;
  urlToImage?: string | null;
  publishedAt?: Date;
  source?: Source;
}

export interface Source {
  id: string  | null;
  name: string;
}