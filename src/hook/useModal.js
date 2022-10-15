import { useState } from "react";

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return {
    openModal,
    setOpenModal,
  };
};
