import React from 'react';
//import { Link } from 'react-router-dom';
import { ICountry } from '../models/ICountry';

export class CountryOption extends React.Component<{countryName: string, imgSrc: string, shortName: string, onSelect: (country: string) => void}> {

    constructor(props: {countryName: string, imgSrc: string, shortName: string, onSelect: (country: string) => void}){
        super(props);
        this.getImgSrcLocation = this.getImgSrcLocation.bind(this);
    }
    
    getImgSrcLocation(): string {
        return require("../assets/" + this.props.imgSrc + ".jpg");
    }

    render(){
        return (
            <div className="country-option">
                <img className="flag" width="80px" height="40px" src={this.getImgSrcLocation()} alt={this.props.countryName}></img>
                <span className="country-option-country-name" onClick={(e) => this.props.onSelect}>{this.props.countryName}</span>
            </div>
        )
    }
}

        /* <Link to="/{this.state.countryName">{this.state.countryName}</Link> */