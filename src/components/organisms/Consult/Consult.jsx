import React from "react";
import Lottie from "react-lottie";
import classes from "./consult.module.scss";
import redFootprints from "../../../../public/json/red-footprints.json";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

const Background = ({ children }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.background}>
      <div className={classes.background__decorate}>
        <div className={classes.background__decorateFootprints}>
          <div>
            <Lottie
              isClickToPauseDisabled={true}
              style={{
                width: "100%",
              }}
              options={{
                animationdataPet: redFootprints,
                defaultOptions,
              }}
            />
          </div>
          <div>
            <Lottie
              isClickToPauseDisabled={true}
              style={{
                width: "100%",
              }}
              options={{
                animationdataPet: redFootprints,
                defaultOptions,
              }}
            />
          </div>
        </div>
      </div>

      <div className={classes.background__container}>{children}</div>
    </div>
  );
};

export const Consult = () => {
  const router = useRouter();

  const [dataPet, setdataPet] = useState(false);

  const inputValue = useRef();

  const getInfo = async (value) => {
    if (value) {
      try {
        const rsp = await fetch(
          `https://firu.alejandroaguilar.dev/api/renian/search?id=${value}`
        );
        const data = await rsp.json();

        setdataPet(data);
      } catch (err) {
        console.error(err);
        setdataPet(false);
      }
    }
  };

  const getSearch = () => {
    const value = inputValue.current.value;
    getInfo(value);
  };

  return (
    <Background>
      <section className={classes.consult}>
        <div className={classes.consult__card}>
          <div className={classes.consult__header}>
            <Image
              src="/svg/renian-logo.svg"
              width={140}
              height={40}
              alt="renian-icon"
            />
            <div onClick={() => router.push("/")}>
              <lord-icon
                src="https://cdn.lordicon.com/zfxxckbp.json"
                trigger="loop"
                colors="primary:#000000,secondary:#dd0000"
                // style={{ width: "250px", height: "250px" }}
              ></lord-icon>
              <p>Volver al Home</p>
            </div>
          </div>

          <div className={classes.consult__search}>
            <span>Ingrese el codigo del microchip:</span>

            <div className={classes.consult__searchCamp}>
              <input type="text" ref={inputValue} />
              <div onClick={getSearch}>
                <lord-icon
                  src="https://cdn.lordicon.com/zniqnylq.json"
                  trigger="loop"
                  colors="primary:#000000,secondary:#dd0000"
                ></lord-icon>
              </div>
            </div>
          </div>

          {dataPet.ok != false && (
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
                            style={{ width: "165px", height: "165px" }}
                          ></lord-icon>
                        </div>
                      </div>

                      <div className={classes.consult__contentInfo__cardsText}>
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
                            style={{ width: "165px", height: "165px" }}
                          ></lord-icon>
                        </div>
                      </div>

                      <div className={classes.consult__contentInfo__cardsText}>
                        <h4>Registrado por:</h4>
                        {dataPet.pet?.userAddress != undefined && (
                          <span>{dataPet.pet?.userAddress}</span>
                        )}
                        {!dataPet.pet?.userAddress && <span>No definido</span>}
                      </div>
                    </div>
                  </div>

                  <div className={classes.consult__contentInfo__general}>
                    <div className={classes.consult__contentInfo__generalTable}>
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
      </section>
    </Background>
  );
};
