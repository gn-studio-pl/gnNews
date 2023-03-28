import React from "react";
import { Link } from 'react-router-dom'
import { changeViewAction } from "../store/actions/changeViewAction";
import { store } from "../store/store";
import { Button } from "./Button";

export class Header extends React.Component<{}, {view: string}> {

    constructor(props: any){
        super(props);
        this.state = {view: 'list'}
    }


    handleChangeView(){
        const newValue = this.state.view === 'list' ? 'windows' : 'list';
        this.setState({view: newValue});
        store.dispatch(changeViewAction({value: newValue}));
    }

    render(): React.ReactNode {
        return (
            <header className="grid-row">
                <span className="title">gnNews</span>
                <div className="header-buttons-container">
                    <Button onClick={this.handleChangeView} label="View"/>
                    <Button onClick={() => {}} label="Problems"/>
                </div>
            </header>
        )
    }

}