import { useEffect, useMemo, useState } from "react";
import personsJson from "../../../public/json/data/selects/person.json";

export const usePerson = () => {
  const [persons, setPersons] = useState([]);

  const handlePersons = useMemo(() => {
    const temp = [];
    for (let i = 0; i < personsJson.person.length; i++) {
      temp.push({
        label: personsJson.person[i].esEs,
        value: personsJson.person[i].value,
      });
    }
    return temp;
  }, []);

  useEffect(() => {
    setPersons(handlePersons);
  }, [handlePersons]);

  return {
    persons,
  };
};
