import React from "react";
import { Link } from 'react-router-dom'
import { changeViewAction } from "../store/actions/changeViewAction";
import { store } from "../store/store";
import { Button } from "./Button";

export class Header extends React.Component<{navigateHome: () => void, openProblemPopup: () => void}, {view: string}> {

    constructor(props: {navigateHome: () => void, openProblemPopup: () => void}){
        super(props);
        this.state = {view: 'list'}
        this.handleChangeView = this.handleChangeView.bind(this);
    }


    handleChangeView(){
        console.log("handleChangeView start")
        const newValue = this.state.view === 'list' ? 'windows' : 'list';
        this.setState({view: newValue});
        console.log("handleChangeView after setstate")
        store.dispatch(changeViewAction({value: newValue}));
        console.log("handleChangeView end")
    }

    render(): React.ReactNode {
        return (
            <header>
                <Link className="header-title" to="/"><span  onClick={(e) => this.props.navigateHome()}>gnNews</span></Link>
                <div className="header-buttons-container">
                    <Button onClick={this.handleChangeView} label="View"/>
                    <Button onClick={this.props.openProblemPopup} label="Problems"/>
                </div>
            </header>
        )
    }

}