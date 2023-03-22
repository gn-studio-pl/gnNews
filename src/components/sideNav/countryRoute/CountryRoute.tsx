import React from "react";
import "./coutryRoute.css";

interface CountryRouteProps {
  country: string;
  flag: string;
}

const CountryRoute = ({ country, flag }: CountryRouteProps) => {
  const className = `fi fi-${flag}`;
  return (
    <li>
      <span className={className}></span> {country}
    </li>
  );
};

export default CountryRoute;
