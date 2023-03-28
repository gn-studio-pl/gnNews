import React from 'react';


class ListNewsContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {news: props.news}
    }
}