import { useEffect, useState } from "react";

export const usePetState = (dataPet = false, dataPetWeb3 = false) => {
  const [petState, setPetState] = useState();
  const [colorState, setColorState] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    if (!dataPetWeb3) {
      console.log(dataPet);
      if (dataPet.pet.status != undefined) {
        setState(dataPet.pet.status);
      } else if (dataPet.pet.usuario_status != undefined) {
        setState(dataPet.pet.usuario_status);
      } else {
        console.error("No se pudo establecer el estado de la mascota");
      }
    }
  }, [dataPet]);

  const obtainPetState = () => {
    let result = "";
    let color = "";
    if (state != "") {
      switch (true) {
        case state == "ACTIVE" || state == "ACTIVO":
          result = "activo";
          color = "#27A900";
          break;
        case state == "ADOPTION" ||
          state == "EN ADOPCIÓN" ||
          state == "EN ADOPCION":
          result = "en adopción";
          color = "#F66C5E";
          break;
        case state == "GALLERY" || state == "GALERÍA" || state == "GALERIA":
          result = "galería";
          color = "#13EEC9";
          break;
        case state == "LOST" || state == "PERDIDO":
          result = "perdido";
          color = "#F7C30E";
          break;
        case state == "STOLEN" || state == "ROBADO":
          result = "robado";
          color = "#f40000";
          break;
        case state == "DEAD" || state == "DECESO":
          result = "deceso";
          color = "#000000";
          break;
      }
      return setPetState(result) || setColorState(color);
    }
    if (state == "no definido") {
      setPetState("no definido");
      setColorState("#edf5f5");
    }
  };
  return { obtainPetState, petState, colorState };
};
