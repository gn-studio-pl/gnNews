export type Article = {
  title: string;
  url: string;
  author: string;
  urlToImage: string | null;
  publishedAt: string;
  description: string;
  source: { name: string };
};
