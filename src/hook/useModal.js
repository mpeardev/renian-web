import { useState } from "react";

export const useModal = () => {
  const [openDefaultModal, setOpenDefaultModal] = useState(false);
  const [openRegistryModal, setOpenRegistryModal] = useState(false);
  return {
    openDefaultModal,
    setOpenDefaultModal,
    openRegistryModal,
    setOpenRegistryModal,
  };
};
