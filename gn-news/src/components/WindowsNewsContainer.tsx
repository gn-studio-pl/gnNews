import React from 'react';
import { INews } from '../models/INews';
import { WindowsNews } from './WindowsNews';

export class WindowsNewsContainer extends React.Component<{news: INews[]}>{

    constructor(props: {news: INews[]}){
        super(props);
    
    }

    render(): React.ReactNode {
        return (
            <div className="windows-news-container">
                {this.props.news.map((article) => <WindowsNews title={article.title} sourceName={article.sourceName} publishedAt={article.publishedAt} thumbnailUrl={article.thumbnailUrl} description={article.description}/>)}
            </div>
        )
    }
}