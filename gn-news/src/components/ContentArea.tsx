import React from 'react';
import { store } from '../store/store';


export class ContentArea extends React.Component {

    render(): React.ReactNode {
        return (
            <div className='content-area'>
                {store.getState().view === 'list' ? <ListNewsContainer /> : <WindowsNewsContainer/>}
            </div>
        )
    }
}