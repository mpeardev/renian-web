import { useState } from "react";
import { helpHttp } from "../utils/helpHttp";

export const useSendForm = () => {
  const [response, setResponse] = useState(null);

  const dataSubmit = (data, setOpenModal, reset) => {
    helpHttp()
      .post("https://formsubmit.co/ajax/mirkopb96@gmail.com", {
        body: data,
        headers: {
          "Content-Type": "applitacion/json",
          Accept: "applitacion/json",
        },
      })
      .then((res) => {
        setResponse(true);
        setTimeout(() => setResponse(false), 5000);
        setOpenModal(true);
        reset();
      });
  };

  return { response, dataSubmit };
};
