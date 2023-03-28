import { INews } from './INews';

export interface IStoreState  {
    view: string,
    news: INews[]
}