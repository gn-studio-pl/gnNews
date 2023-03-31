import { FormattedMessage } from "react-intl";
import { ArticlesQueryParams } from "../types/types";
import {
  StyledFlag,
  StyledNameCountry,
  StyledWrapperNavCountry,
} from "./styles/NavCountry.styled";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { updateParams } from "../features/articles/articlesSlice";
import { NavCountryProps } from "../types/components.types";

const NavCountry = ({ navElement }: NavCountryProps) => {
  const { params } = useAppSelector((state) => state.articles);
  const { nameCountry, country } = navElement;
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    let updatedParams: ArticlesQueryParams = {
      ...params,
      country: country,
    };
    dispatch(updateParams(updatedParams));
  };

  return (
    <StyledWrapperNavCountry onClick={handleClick}>
      <StyledFlag
        alt={nameCountry}
        src={require(`../assets/img/${nameCountry}.png`)}
      />
      <StyledNameCountry>
        <FormattedMessage id={`navigation.navbar.${nameCountry}`} />
      </StyledNameCountry>
    </StyledWrapperNavCountry>
  );
};

export default NavCountry;
