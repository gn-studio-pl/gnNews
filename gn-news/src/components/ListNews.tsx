import React from 'react';

export class ListNews extends React.Component<{title: string, sourceName: string, publishedAt: string}> {

    constructor(props: {title: string, sourceName: string, publishedAt: string}){
        super(props);
    }

    render(){
        return (
            <div className='list-news'>
                <div className='list-news-title'>{this.props.title}</div>
                <div className='list-news-source-name'>{this.props.sourceName}</div>
                <div className='list-news-published-at'>{this.props.publishedAt}</div>
            </div>
        )
    }
}