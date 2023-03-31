import React from 'react';
import { INews } from '../models/INews';
import { WindowsNews } from './WindowsNews';

export class WindowsNewsContainer extends React.Component<{news: INews[], openNewsPopup: () => void, setPopupNews: (title: string, sourceName: string, url: string, publishedAt: string, author: string) => void}>{

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
            <div className="windows-news-container">
                {this.props.news.map((article) => <WindowsNews onClick={() => this.newsOnClick(article.title, article.sourceName, article.sourceUrl, article.publishedAt, article.author)} title={article.title} sourceName={article.sourceName} publishedAt={article.publishedAt} thumbnailUrl={article.thumbnailUrl} description={article.description}/>)}
            </div>
        )
    }
}