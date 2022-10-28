import classes from "./registry-modal.module.scss";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import {
  ModalButton,
  ModalInput,
  ModalSelect,
  ModalCheckbox,
  ModalFile,
} from "../../../";
import { useState } from "react";
import { useCountry } from "../../../../hook/inputs/useCountry";

export const RegistryModal = ({ setOpenRegistryModal, width = "80rem" }) => {
  const { countries } = useCountry();
  const [isRegister, setIsRegister] = useState();
  const [haveAddress, setHaveAddress] = useState();
  const [shareInformation, setShareInformation] = useState();
  const [nextSection, setNextSection] = useState();

  return (
    <div className={classes.modal}>
      <div className={classes.modal__background}>
        <div className={classes.modal__container}>
          <Fade>
            <div className={classes.modal__content} style={{ width }}>
              <div>
                <div className={classes.modal__contentIcon}>
                  <div>
                    <Image
                      src="/img/cards/image_02.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      href="image"
                    />
                  </div>
                </div>

                <div>
                  <h1>
                    solicitud de <span>registro</span>
                  </h1>
                  <div className={classes.modal__contentPrice}>
                    <h3>A solo</h3>
                    <h1>
                      <span>s/</span>50
                    </h1>
                  </div>
                  <div className={classes.modal__contentInclude}>
                    <h4>Incluye:</h4>
                    <ul>
                      <li>Microchip de identificación</li>
                      <li>Registro en el Sistema de RENIAN</li>
                      <li>Carnet de identificación</li>
                      <li>Consulta veterinaria</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={classes.modal__contentMain}>
                <div className={classes.modal__contentMainStepper}>
                  <div>
                    <span></span>
                    <div>
                      <div
                        style={{
                          background: nextSection ? "#fff" : "#bf002a",
                          color: nextSection ? "#bababa" : "#fff",
                          border: nextSection ? "1px solid #bababa" : "0",
                        }}
                      >
                        1
                      </div>
                      <div
                        style={{
                          background: nextSection ? "#bf002a" : "#fff",
                          color: nextSection ? "#fff" : "#bababa",
                          border: nextSection ? "0" : "1px solid #bababa",
                        }}
                      >
                        2
                      </div>
                    </div>
                  </div>
                </div>

                {!nextSection && (
                  <div className={classes.modal__contentMainForm}>
                    <div className={classes.modal__contentMainFormReveal}>
                      <div>
                        <ModalCheckbox
                          onClick={() => setIsRegister(!isRegister)}
                          show={isRegister}
                        />
                        <p>¿Eres un registrante?</p>
                      </div>
                      {isRegister && (
                        <div>
                          <ModalInput
                            name="escribe tu codigo"
                            type="number"
                            required
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={`${classes.modal__contentMainFormSection} ${classes.modal__contentMainFormIdentification}`}
                    >
                      <h3>identificación</h3>
                      <div>
                        <ModalSelect name="pais" options={countries} required />
                        <ModalSelect name="tipo persona" required />
                        <ModalSelect name="tipo documento" required />
                        <ModalInput
                          name="numero documento"
                          type="number"
                          required
                        />
                        <ModalSelect name="tipo adoptante" required />
                      </div>
                    </div>
                    <div
                      className={`${classes.modal__contentMainFormReveal} ${classes.modal__contentMainFormAddress}`}
                    >
                      <div>
                        <ModalCheckbox
                          onClick={() => setHaveAddress(!haveAddress)}
                          show={haveAddress}
                        />
                        <p>¿Tienes una dirección pública de Ethereum?</p>
                      </div>
                      {haveAddress && (
                        <div>
                          <ModalInput
                            name="escribe tu codigo"
                            type="number"
                            required
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={`${classes.modal__contentMainFormSection} ${classes.modal__contentMainFormPersonal}`}
                    >
                      <h3>información personal</h3>
                      <div>
                        <ModalInput name="nombre" required />
                        <ModalInput name="segundo nombre" />
                        <ModalInput name="apellido" required />
                        <ModalSelect name="segundo apellido" required />
                        <ModalInput name="cumpleaños" type="date" required />
                        <ModalSelect name="género" required />
                        <ModalInput name="celular" type="number" required />
                        <ModalInput name="email" type="email" required />
                      </div>
                    </div>
                    <div
                      className={`${classes.modal__contentMainFormSection} ${classes.modal__contentMainFormUbigeo}`}
                    >
                      <h3>ubigeo</h3>
                      <div>
                        <ModalSelect name="departamento" required />
                        <ModalSelect name="provincia" required />
                        <ModalSelect name="distrito" required />
                        <div>
                          <ModalInput name="dirección" required />
                        </div>
                      </div>
                    </div>
                    <div className={classes.modal__contentMainFormAgree}>
                      <div>
                        <ModalCheckbox
                          onClick={() => {
                            setShareInformation(!shareInformation);
                          }}
                          show={shareInformation}
                        />
                        <p>
                          Acepto compartir mi información personal en búsquedas
                          en la plataforma
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${classes.modal__contentMainFormSection} ${classes.modal__contentMainFormDocument}`}
                    >
                      <h4>
                        Ingresar ajunto del documento de identidad que ingreso
                        anteriormente:
                      </h4>
                      <div>
                        <div>
                          <h5>documento de identidad (Front):</h5>
                          <div>
                            <ModalFile name="frontal" />
                          </div>
                        </div>
                        <div>
                          <h5>documento de identidad (Reverso):</h5>
                          <div>
                            <ModalFile name="reverso" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {nextSection && (
                  <div className={classes.modal__contentMainForm}>
                    <h1>Hello world</h1>
                  </div>
                )}

                <div className={classes.modal__contentMainButtons}>
                  <div>
                    <ModalButton
                      name="cancelar"
                      background="#cccccc"
                      onClick={() => setOpenRegistryModal(false)}
                    />
                    <ModalButton
                      name="atras"
                      disabled={nextSection ? false : true}
                      onClick={
                        nextSection ? () => setNextSection(false) : () => false
                      }
                    />
                    <ModalButton
                      name={nextSection ? "enviar" : "siguiente"}
                      onClick={() => {
                        setNextSection(true);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
