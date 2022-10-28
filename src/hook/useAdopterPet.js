import { useState } from "react";
import { CONTRACTS_SPECIES } from "../config";
import { get } from "../utils/post";
import { registeringEntity } from "../utils/war/RegisteringEntities";
import { getInfoStatus, getSearchOwner } from "../utils/war/bridge";
import { useModal } from "./useModal";

export const useAdopterPet = () => {
  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState([]);
  const [entityRegister, setEntityRegister] = useState([]);
  const [loading, setLoading] = useState(true);

  const { openDefaultModal, setOpenDefaultModal } = useModal();

  const reset = () => {
    setPets([]);
    setEntityRegister([]);
  };

  const getSearch = (web3, account) => {
    reset();
    // console.log(account);
    const contractSpecies = [];
    Object.keys(CONTRACTS_SPECIES).map((c) =>
      contractSpecies.push(CONTRACTS_SPECIES[c])
    );
    // console.log(contractSpecies);
    getSearchOwner(web3, contractSpecies, account)
      .then((resolve) => {
        // console.log(resolve);
        if (resolve?.length > 0) {
          for (let i = 0; i < resolve?.length; i++) {
            // console.log(i);
            get(resolve[i])
              .then((resolve2) => {
                getInfoStatus(web3, resolve2.chip)
                  .then((resolve4) => {
                    setStatus((s) => [...s, resolve4]);
                  })
                  .catch((e) => console.log(e));

                resolve2.image = resolve2.image.replace("ipfs://", "");
                resolve2.pedigree = resolve2.pedigree.replace("ipfs://", "");
                setPets((p) => [...p, resolve2]);
                setOpenDefaultModal(true);
                registeringEntity(web3, resolve2.addressEr)
                  .then((resolve3) => {
                    if (resolve3)
                      setEntityRegister((r) => [
                        ...r,
                        resolve3?.data != ""
                          ? JSON.parse(
                              Buffer.from(resolve3?.data, "base64").toString()
                            )
                          : "",
                      ]);
                  })
                  .catch((e) => console.log(e));
              })
              .catch((e) => console.log(e));
          }
          setLoading(false);
        } else {
          setLoading(false);
          setOpenDefaultModal(true);
          setPets([]);
        }
      })
      .catch((e) => console.log(e));
  };

  return {
    pets,
    status,
    entityRegister,
    loading,
    getSearch,
    openDefaultModal,
    setOpenDefaultModal,
  };
};
