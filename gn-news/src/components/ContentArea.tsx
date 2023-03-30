import React from 'react';
import { INews } from '../models/INews';
import { store } from '../store/store';
import { ListNewsContainer } from './ListNewsContainer';
import { WindowsNewsContainer } from './WindowsNewsContainer';


export class ContentArea extends React.Component<{news: INews[]}, {news: INews[]}> {

    constructor(props: { news: INews[] }) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className='content-area'>
                {store.getState().view === 'list' ? <ListNewsContainer /> : <WindowsNewsContainer/>}
            </div>
        )
    }
}