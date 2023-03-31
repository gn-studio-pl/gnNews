import { countries } from "../utils/countries";
import { useParams } from "react-router";

interface Params {
  country?: string;
}

export const useCountryCode = () => {
  const params = useParams() as Params;

  const getCountryCode = () => {
    const country =
      countries.find((item) => item.name === params.country) || countries[0];
    return country?.code;
  };

  return { code: getCountryCode() };
};
