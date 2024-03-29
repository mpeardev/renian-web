import React, { useContext, useEffect } from "react";
import classes from "./consult.module.scss";
import modalClasses from "../../containers/modals/DefaultModal/default-modal.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import { ConnectButton, Loader, DefaultModal } from "../../";
import { useLoader } from "../../../hook/useLoader";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { useAdopterPet } from "../../../hook/useAdopterPet";
import { Default } from "../../molecules/consult/Default";
import { NotFound } from "../../molecules/consult/NotFound";
import {
  ContentMongoPet,
  ContentWeb3Pet,
} from "../../molecules/consult/DataContent/DataContent";

export const Consult = () => {
  const router = useRouter();
  const { web3 } = useContext(Web3Context);
  const [dataPet, setdataPet] = useState(false);
  const inputValue = useRef();
  const { pets, getSearch, openDefaultModal, setOpenDefaultModal, status } =
    useAdopterPet();
  const [onLoad, setOnLoad] = useLoader();
  const [showDataPetWeb3, setShowDataPetWeb3] = useState();

  useEffect(() => {
    if (web3.account) {
      // getSearch(web3.wallet, "0x3dD85B618Cf7a86e06D2a390e85E8fb183fd56f5");
      // getSearch(web3.wallet, "0x4415B2Bfc4445b33C17c1A0b0D10cC18e9F928D0");
      getSearch(web3.wallet, web3.account);
    }
  }, [web3.account]);

  const getInfo = async (value) => {
    if (value) {
      try {
        const rsp = await fetch(
          `https://firu.alejandroaguilar.dev/api/renian/search?id=${value}`
        );
        const data = await rsp.json();

        setdataPet(data);
        setOnLoad(false);
        setShowDataPetWeb3(false);
      } catch (err) {
        console.error(err);
        setdataPet(false);
        setOnLoad(false);
        setShowDataPetWeb3(false);
      }
    }
  };

  const toSearch = () => {
    const value = inputValue.current.value;
    if (value != "") {
      getInfo(value);
      setOnLoad(true);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toSearch();
    }
  };

  return (
    <>
      <section className={classes.consult}>
        <div className={classes.consult__container}>
          <ConsultCard>
            <div className={classes.consult__header}>
              <div onClick={() => router.push("/")}>
                <lord-icon
                  src="https://cdn.lordicon.com/zfxxckbp.json"
                  trigger="loop"
                  colors="primary:#e0dfdf,secondary:#f5f5f5"
                ></lord-icon>
                <p>Volver al Home</p>
              </div>

              <div>
                <Image
                  src="/img/renian-img.png"
                  width={80}
                  height={85}
                  alt="image"
                />
              </div>
            </div>

            <div className={classes.consult__search}>
              <span>Ingrese el codigo del microchip:</span>

              <div className={classes.consult__searchCamp}>
                <input
                  type="number"
                  ref={inputValue}
                  onKeyDown={handleKeyDown}
                  placeholder="Cod. Microchip"
                  autoComplete="true"
                />
                <div onClick={toSearch}>
                  <lord-icon
                    src="https://cdn.lordicon.com/zniqnylq.json"
                    trigger="loop"
                    colors="primary:#bf002a,secondary:#bf002a"
                  ></lord-icon>
                </div>
              </div>

              <div className={classes.consult__searchButton}>
                <ConnectButton
                  pets={pets}
                  openDefaultModal={openDefaultModal}
                  setOpenDefaultModal={setOpenDefaultModal}
                />
              </div>
            </div>

            {!dataPet && !showDataPetWeb3 && !onLoad && <Default />}

            {onLoad && <Loader />}

            {dataPet && dataPet.ok === false && !onLoad && <NotFound />}

            {dataPet && dataPet.ok != false && !onLoad && !showDataPetWeb3 && (
              <ContentMongoPet dataPet={dataPet} />
            )}

            {pets && !onLoad && showDataPetWeb3 && (
              <ContentWeb3Pet pets={pets} />
            )}
          </ConsultCard>
        </div>
      </section>
      {openDefaultModal && web3.account && pets && (
        <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
          {pets.length > 0 && (
            <>
              <h2>
                Usted tiene {pets.length <= 9 ? "0" : ""}
                {pets.length} mascota{pets.length > 1 ? "s" : " "}
                registrada{pets.length > 1 ? "s" : ""}.
              </h2>

              {pets.length > 1 && (
                <div className={modalClasses.modal__contentBoxlist}>
                  <div>
                    <lord-icon
                      src="https://cdn.lordicon.com/cqqydgge.json"
                      trigger="none"
                      colors="primary:#000000,secondary:#dd0000"
                      style={{
                        width: "55px",
                        height: "55px",
                        opacity: ".7",
                      }}
                    ></lord-icon>
                    {/* <p>Ver mis mascotas</p> */}
                    <p>Próximamente</p>
                  </div>
                </div>
              )}
              {pets.length == 1 && (
                <div className={modalClasses.modal__contentBoxlist}>
                  <div onClick={() => setShowDataPetWeb3(true)}>
                    <lord-icon
                      src="https://cdn.lordicon.com/cqqydgge.json"
                      trigger="none"
                      colors="primary:#000000,secondary:#dd0000"
                      style={{
                        width: "55px",
                        height: "55px",
                        opacity: ".7",
                      }}
                    ></lord-icon>
                    <p>Ver mi mascota</p>
                  </div>
                </div>
              )}
            </>
          )}
          {pets.length == 0 && <h1>No tienes mascotas registradas</h1>}
        </DefaultModal>
      )}
    </>
  );
};

const ConsultCard = ({ children }) => {
  return <div className={classes.consult__card}>{children}</div>;
};
