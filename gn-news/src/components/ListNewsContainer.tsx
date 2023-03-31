import React from 'react';
import { INews } from '../models/INews'
import { ListNews } from './ListNews';


export class ListNewsContainer extends React.Component<{news: INews[], openNewsPopup: () => void, setPopupNews: (title: string, sourceName: string, url: string, publishedAt: string, author: string) => void}>{

    constructor(props: {news: INews[], openNewsPopup: () => void, setPopupNews: (title: string, sourceName: string, url: string, publishedAt: string, author: string) => void}){
        super(props);
        this.newsOnClick = this.newsOnClick.bind(this);
    }

    newsOnClick(title: string, sourceName: string, url: string, publishedAt: string, author: string){
        this.props.openNewsPopup();
        this.props.setPopupNews(title, sourceName, url, publishedAt, author);
    }

    render(): React.ReactNode {
        return (
            <div className='list-news-container'>
                <ul>
                    {this.props.news.map((article) => <li onClick={(e) => this.newsOnClick(article.title, article.sourceName, article.sourceUrl, article.publishedAt, article.author)} key={article.title}><ListNews  title={article.title} sourceName={article.sourceName} publishedAt={article.publishedAt}/></li>)}
                </ul>
            </div>
        )
    }

    
}