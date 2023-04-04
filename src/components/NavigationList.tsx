import { countries } from "../constants/navigationData";
import { Country } from "../types/types";
import NavCountry from "./NavCountry";
import { StyledWrapperNavigationlist } from "./styles/WrapperNavigationList.styled";

const NavigationList = (): React.ReactElement => {
  const createNavList = (): JSX.Element[] =>
    countries
      .sort(compareByName)
      .map((country: Country) => (
        <NavCountry key={country.country} navElement={country} />
      ));

  const compareByName = (a: Country, b: Country) => {
    if (a.nameCountry > b.nameCountry) return 1;
    else if (a.nameCountry < b.nameCountry) return 0;
    else return -1;
  };

  return (
    <>
      <StyledWrapperNavigationlist>
        {createNavList()}
      </StyledWrapperNavigationlist>
    </>
  );
};

export default NavigationList;
