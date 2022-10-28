import { useEffect, useMemo, useState } from "react";
import countriesJson from "../../../public/json/data/selects/countries.json";

export const useCountry = () => {
  const [countries, setCountries] = useState([]);

  const handleCountries = useMemo(() => {
    const temp = [];
    for (let i = 0; i < countriesJson.countries.length; i++) {
      temp.push({
        label: countriesJson.countries[i].esEs,
        value: countriesJson.countries[i].code,
      });
    }
    return temp;
  }, []);

  useEffect(() => {
    setCountries(handleCountries);
  }, [handleCountries]);

  return {
    countries,
  };
};
