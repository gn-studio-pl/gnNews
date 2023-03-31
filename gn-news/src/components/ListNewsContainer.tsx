import React from 'react';
import { INews } from '../models/INews'
import { ListNews } from './ListNews';


export class ListNewsContainer extends React.Component<{news: INews[]}>{

    constructor(props: {news: INews[]}){
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className='list-news-container'>
                <ul>
                    {this.props.news.map((article) => <li key={article.title}><ListNews title={article.title} sourceName={article.sourceName} publishedAt={article.publishedAt}/></li>)}
                </ul>
            </div>
        )
    }

    
}