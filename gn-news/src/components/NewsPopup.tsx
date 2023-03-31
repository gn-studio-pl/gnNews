import React from 'react';


export function NewsPopup(props: {trigger: boolean, title: string, sourceName: string, author: string, publishedAt: string, url: string, close: () => void}){
    return (props.trigger) ? (
        <div className="popup">
            <div className="news-popup-inner">
                <div className='news-popup-title'>{props.title}</div>
                <div className='news-popup-source'>source: {props.sourceName}</div>
                <div className='news-popup-author'>author: {props.author}</div>
                <div className='news-popup-time'>{props.publishedAt}</div>
                <div className='news-popup-link'><a href={props.url}>{props.url}</a></div>
                <button onClick={props.close}>close</button>
            </div>
        </div>
    ): <></>
}