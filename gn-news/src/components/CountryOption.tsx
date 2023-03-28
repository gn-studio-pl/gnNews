import React from 'react';
//import { Link } from 'react-router-dom';
import { ICountry } from '../models/ICountry';

export class CountryOption extends React.Component<ICountry, ICountry> {

    constructor(props: ICountry){
        super(props);
        this.state = {countryName: props.countryName, imgSrc: props.imgSrc, shortName: props.shortName}
        this.getImgSrcLocation = this.getImgSrcLocation.bind(this);
    }
    
    getImgSrcLocation(): string {
        return require("../assets/" + this.state.imgSrc + ".jpg");
    }

    render(){
        return (
            <div className="country-option">
                <img className="flag" src={this.getImgSrcLocation()} alt={this.state.countryName}></img>
                <span>{this.state.countryName}</span>
            </div>
        )
    }
}

        /* <Link to="/{this.state.countryName">{this.state.countryName}</Link> */