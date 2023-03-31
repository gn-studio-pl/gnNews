import React from "react";
import { Clock } from "./Clock"

export class Footer extends React.Component<{numberOfNews: number}> {

    render(): React.ReactNode {
        return (
            <footer>
                <div className="footer-number-of-news">{this.props.numberOfNews} results</div>   
                <Clock/>
            </footer>
        )
    }
}