import React from 'react';
import { store } from '../store/store';
import { INews } from '../models/INews';
import { ListNewsContainer } from './ListNewsContainer';
import { WindowsNewsContainer } from './WindowsNewsContainer';
import { connect } from 'react-redux';


class ContentArea extends React.Component<{news: INews[], view: string}> {

    constructor(props: {news: INews[], view: string}){
        super(props);
        this.render = this.render.bind(this);
        store.subscribe(this.render);
    }

  

    render(): React.ReactNode {
        return (
            <div className='content-area'>
                {this.props.view === 'list' ? <ListNewsContainer news={this.props.news}/> : <WindowsNewsContainer news={this.props.news}/>}
            </div>
        )
    }
}

const mapStateToProps = (state :any) => {
    return ({
        view: state.view
    })

}

export default connect(mapStateToProps)(ContentArea)