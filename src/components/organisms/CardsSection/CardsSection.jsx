import Image from "next/image";
import { useRouter } from "next/router";
import {
  MainContainer,
  CardsButton,
  DefaultModal,
  RegistryModal,
} from "../../";
import { useModal } from "../../../hook/useModal";
import classes from "./cards-section.module.scss";

export const CardsSection = () => {
  const router = useRouter();
  const {
    openDefaultModal,
    setOpenDefaultModal,
    openRegistryModal,
    setOpenRegistryModal,
  } = useModal();

  return (
    <>
      {openRegistryModal && (
        <RegistryModal setOpenRegistryModal={setOpenRegistryModal} />
      )}

      {openDefaultModal && (
        <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
          <h1>
            Próximamente en <span>Renian</span>
          </h1>
        </DefaultModal>
      )}
      <section className={classes.cards}>
        <MainContainer>
          <div className={classes.cards__container}>
            <div className={`${classes.cards__card} ${classes.cardsOne}`}>
              <div className={classes.cards__cardTitle}>
                <h3>Consultar</h3>
                <div>
                  <Image
                    src="/img/cards/image_01.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
              </div>
              <div>
                <div className={classes.cards__cardDetail}>
                  <p>Revisa los datos de cualquier mascota</p>
                  <CardsButton
                    name="aquí"
                    onClick={() => router.push("/consult")}
                  />
                </div>
              </div>
            </div>
            <div className={`${classes.cards__card} ${classes.cardsTwo}`}>
              <div className={classes.cards__cardTitle}>
                <h3>Solicitud de Registro</h3>
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
                <div className={classes.cards__cardDetail}>
                  <p>
                    Pre registra los datos y asiste a nuestro local para la
                    aplicación de microchip
                  </p>
                  <CardsButton
                    name="completar"
                    onClick={() => setOpenRegistryModal(true)}
                  />
                </div>
              </div>
            </div>
            <div className={`${classes.cards__card} ${classes.cardsThree}`}>
              <div className={classes.cards__cardTitle}>
                <h3>Centros de Registro</h3>
                <div>
                  <Image
                    src="/img/cards/image_03.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
              </div>
              <div>
                <div className={classes.cards__cardDetail}>
                  <p>Conoce nuestros centros de registro en todo el Perú</p>
                  <a
                    href="http://www.renian.org/centros/?fbclid=IwAR0jU8TfLuQn9rwcHWfV4cyPVCfnpBmRrd-O53guouFtXdBQnSfakHpTFFM"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <CardsButton
                      name="ver mapa"
                      // onClick={() => router.push("/centers")}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={`${classes.cards__card} ${classes.cardsFour}`}>
              <div className={classes.cards__cardTitle}>
                <h3>Mis Mascotas</h3>
                <div>
                  <Image
                    src="/img/cards/image_04.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
              </div>
              <div>
                <div className={classes.cards__cardDetail}>
                  <p>Consulta y edita los datos de tus mascotas</p>
                  <a
                    href="https://registro.firulaixcoin.finance/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <CardsButton name="ingresar" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};
