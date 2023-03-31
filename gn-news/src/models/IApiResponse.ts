export interface IApiResponse {
    status: string,
    totalResults: number,
    articles: {
        source: {
            id: string,
            name: string
        },
        author: string,
        title: string,
        description: string | null,
        url: string,
        urlToImage: string | null,
        publishedAt: string,
        content: string | null
    } []
}