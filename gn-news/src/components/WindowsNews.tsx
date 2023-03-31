import React from "react";
import { INews } from "../models/INews";
import { IWindowsNews } from "../models/IWindowsNews";


export class WindowsNews extends React.Component<{title: string, sourceName: string, publishedAt: string, thumbnailUrl: string | null, description: string | null, onClick: () => void}>{

    constructor(props: {title: string, sourceName: string, publishedAt: string, thumbnailUrl: string | null, description: string | null, onClick: () => void}){
        super(props);
  
    }


    render(): React.ReactNode {
        let imgElement = null;
        if(this.props.thumbnailUrl){
            imgElement = <img className="windows-news-thumbnail" src={this.props.thumbnailUrl} width="100%" height="100%"></img>
        }

        return (
            <div className="windows-news" onClick={this.props.onClick}>
                {imgElement}
                <div className="windows-news-title">{this.props.title}</div>
                <div className="windows-news-source">source: {this.props.sourceName}</div>
                <div className="windows-news-time">{this.props.publishedAt}</div>
            </div>
        )
    }
}