import React, { useContext, useEffect } from "react";
import classes from "./consult.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import { ConnectButton, Loader, MainContainer } from "../../";
import { useLoader } from "../../../hook/useLoader";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { useAdopterPet } from "../../../hook/useAdopterPet";

export const Consult = () => {
  const router = useRouter();
  const { web3 } = useContext(Web3Context);
  const [dataPet, setdataPet] = useState(false);
  const inputValue = useRef();
  const [open, setOpen] = useState(false);
  const [onLoad, setOnLoad] = useLoader();

  const { pets, getSearch, reset } = useAdopterPet();

  useEffect(() => {
    if (web3.account) {
      reset();
      // getSearch(web3.wallet, "0x3dD85B618Cf7a86e06D2a390e85E8fb183fd56f5");
      setTimeout(() => {
        getSearch(web3.wallet, "0x4415B2Bfc4445b33C17c1A0b0D10cC18e9F928D0");
      }, 5000);
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
      } catch (err) {
        console.error(err);
        setdataPet(false);
        setOnLoad(false);
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
    <section className={classes.consult}>
      <MainContainer>
        <div className={classes.consult__container}>
          <div className={classes.consult__card}>
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
                  // layout="responsive"
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
                    colors="primary:#000000,secondary:#dd0000"
                  ></lord-icon>
                </div>
              </div>

              <div className={classes.consult__searchButton}>
                <ConnectButton open={open} setOpen={setOpen} />
              </div>
            </div>

            {!dataPet && !onLoad && (
              <div className={classes.consult__default}>
                <div>
                  <Image
                    src="/svg/renian-logo.svg"
                    layout="responsive"
                    width={120}
                    height={80}
                    href="renian-logo"
                  />
                </div>
                <div>
                  <Image
                    src="/svg/war-logo.svg"
                    layout="responsive"
                    width={80}
                    height={80}
                    href="war-logo"
                  />
                </div>
              </div>
            )}

            {onLoad && <Loader />}

            {dataPet.ok === false && !onLoad && (
              <div className={classes.consult__nochip}>
                <div>
                  <Image
                    src="/img/no-chip.png"
                    layout="responsive"
                    width={80}
                    height={80}
                  />
                </div>
                <p>Numero de chip no encontrado</p>
              </div>
            )}

            {dataPet.ok != false && dataPet && (
              <div className={classes.consult__content}>
                <div className={classes.consult__contentBg}></div>
                {dataPet.pet?.name != undefined && <h1>{dataPet.pet?.name}</h1>}
                {dataPet.pet?.usuario_empresa != undefined && (
                  <h1>{dataPet.pet?.usuario_empresa}</h1>
                )}

                <div>
                  <div className={classes.consult__contentImg}>
                    <div>
                      <Image
                        src={
                          dataPet.pet?.chip != undefined
                            ? `https://firu.alejandroaguilar.dev/public/images/image/${dataPet.pet?.chip}.jpg`
                            : "/img/img-nofound.png"
                        }
                        layout="responsive"
                        width={60}
                        height={75}
                        href="image-dog"
                      />
                    </div>
                    <div>
                      {dataPet.type == "RENIAN" && (
                        <>
                          <lord-icon
                            src="https://cdn.lordicon.com/hgpfwhzk.json"
                            colors="primary:#000000,secondary:#ffae00"
                            trigger="loop"
                          ></lord-icon>
                          <p>Esta mascota debe actualizar sus datos.</p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={classes.consult__contentInfo}>
                    <div className={classes.consult__contentInfo__cards}>
                      <div>
                        <div className={classes.consult__contentInfo__cardsImg}>
                          <div>
                            <lord-icon
                              src="https://cdn.lordicon.com/sruywmtf.json"
                              trigger="loop"
                              colors="primary:#000000,secondary:#dd0000"
                              style={{
                                width: "165px",
                                height: "165px",
                                opacity: ".7",
                              }}
                            ></lord-icon>
                          </div>
                        </div>

                        <div
                          className={classes.consult__contentInfo__cardsText}
                        >
                          <h4>Microchip:</h4>
                          {dataPet.pet?.chip != undefined && (
                            <span>{dataPet.pet?.chip}</span>
                          )}
                          {dataPet.pet?.usuario_cargo != undefined && (
                            <span>{dataPet.pet?.usuario_cargo}</span>
                          )}
                        </div>
                      </div>

                      <div>
                        <div className={classes.consult__contentInfo__cardsImg}>
                          <div>
                            <lord-icon
                              src="https://cdn.lordicon.com/zkzytvcr.json"
                              trigger="loop"
                              colors="primary:#000000,secondary:#dd0000"
                              style={{
                                width: "165px",
                                height: "165px",
                                opacity: ".7",
                              }}
                            ></lord-icon>
                          </div>
                        </div>

                        <div
                          className={classes.consult__contentInfo__cardsText}
                        >
                          <h4>Registrado por:</h4>
                          {dataPet.pet?.userAddress != undefined && (
                            <span>{dataPet.pet?.userAddress}</span>
                          )}
                          {!dataPet.pet?.userAddress && (
                            <span>No definido</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={classes.consult__contentInfo__general}>
                      <div
                        className={classes.consult__contentInfo__generalTable}
                      >
                        <div>
                          <h5>Propietario:</h5>
                          {dataPet.pet?.adopterName &&
                            dataPet.pet?.adopterLastName != undefined && (
                              <span>
                                {dataPet.pet?.adopterName}{" "}
                                {dataPet.pet?.adopterLastName}
                              </span>
                            )}
                          {dataPet.pet?.usuario_nombre &&
                            dataPet.pet?.usuario_apellidos != undefined && (
                              <span>
                                {dataPet.pet?.usuario_nombre}{" "}
                                {dataPet.pet?.usuario_apellidos}
                              </span>
                            )}
                        </div>

                        <div>
                          <h5>Raza:</h5>
                          {dataPet.pet?.race != undefined && (
                            <span>{dataPet.pet?.race}</span>
                          )}
                          {dataPet.pet?.usuario_telefax != undefined && (
                            <span>{dataPet.pet?.usuario_telefax}</span>
                          )}
                        </div>

                        <div>
                          <h5>Nacimiento:</h5>
                          {dataPet.pet?.date != undefined && (
                            <span>{dataPet.pet?.date}</span>
                          )}
                          {dataPet.pet?.usuario_empresa_sector != undefined && (
                            <span>{dataPet.pet?.usuario_empresa_sector}</span>
                          )}
                        </div>

                        <div>
                          <h5>Fecha de adopcion:</h5>
                          {dataPet.pet?.date != undefined && (
                            <span>{dataPet.pet?.date}</span>
                          )}
                          {dataPet.pet?.usuario_registrado != undefined && (
                            <span>{dataPet.pet?.usuario_registrado}</span>
                          )}
                        </div>

                        <div>
                          <h5>Pais:</h5>
                          {dataPet.pet?.country != undefined && (
                            <span>{dataPet.pet?.country}</span>
                          )}
                          {dataPet.pet?.usuario_ciudad != undefined && (
                            <span>{dataPet.pet?.usuario_ciudad}</span>
                          )}
                        </div>

                        <div>
                          <h5>Sexo:</h5>
                          {dataPet.pet?.gender != undefined && (
                            <span>{dataPet.pet?.gender}</span>
                          )}
                          {dataPet.pet?.usuario_url != undefined && (
                            <span>{dataPet.pet?.usuario_url}</span>
                          )}
                        </div>

                        <div>
                          <h5>Color:</h5>
                          {dataPet.pet?.colour != undefined && (
                            <span>{dataPet.pet?.colour}</span>
                          )}
                          {dataPet.pet?.usuario_interes != undefined && (
                            <span>{dataPet.pet?.usuario_interes}</span>
                          )}
                        </div>

                        <div>
                          <h5>Esterilizado:</h5>
                          {dataPet.pet?.sterilized != undefined && (
                            <span>{dataPet.pet?.sterilized}</span>
                          )}
                          {dataPet.pet?.usuario_esteril != undefined && (
                            <span>
                              {dataPet.pet?.usuario_esteril == "ESTERILIZADO"
                                ? "SI"
                                : "NO"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
