import React from 'react';


export class ListNewsContainer extends React.Component{

    constructor(props: any){
        super(props);
        this.state = {news: props.news}
    }

    render(): React.ReactNode {  
        return (
            <></>
        );
    }
}