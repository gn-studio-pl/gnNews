import React from "react"
import { ICountry } from "../models/ICountry"
import { CountryOption } from './CountryOption';


export class SideMenu extends React.Component<{countries: ICountry[], getNews: (country: string) => void}, {countries: ICountry[]}> {
    constructor(props: {countries: ICountry[], getNews: (country: string) => void}){
        super(props)
        this.state = { countries: props.countries}
    }

    render(): React.ReactNode {
        return (
            <ul className="side-menu">
                {this.state.countries.map(country => <li><CountryOption countryName={country.countryName} imgSrc={country.imgSrc} shortName={country.shortName} onSelect={() => this.props.getNews(country.shortName)}/></li>)}
            </ul>
        )
    }
}