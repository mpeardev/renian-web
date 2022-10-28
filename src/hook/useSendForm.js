import { useState } from "react";
import { helpHttp } from "../utils/helpHttp";

export const useSendForm = () => {
  const [response, setResponse] = useState(null);

  const dataSubmit = (data, setOpenDefaultModal, reset) => {
    helpHttp()
      .post("https://formsubmit.co/ajax/contacto@renian.pe", {
        body: data,
        headers: {
          "Content-Type": "applitacion/json",
          Accept: "applitacion/json",
        },
      })
      .then((res) => {
        setResponse(true);
        setTimeout(() => setResponse(false), 5000);
        setOpenDefaultModal(true);
        reset();
      });
  };

  return { response, dataSubmit };
};
