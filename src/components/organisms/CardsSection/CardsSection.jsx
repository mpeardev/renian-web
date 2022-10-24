import Image from "next/image";
import { useRouter } from "next/router";
import { MainContainer, CardsButton, DefaultModal } from "../../";
import { useModal } from "../../../hook/useModal";
import classes from "./cards-section.module.scss";

export const CardsSection = () => {
  const router = useRouter();
  const { openModal, setOpenModal } = useModal();

  return (
    <>
      {openModal && (
        <DefaultModal setOpenModal={setOpenModal}>
          <h1>
            Proximamente en <span>Renian</span>
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
                  <div onClick={() => router.push("/consult")}>
                    <CardsButton name="aqui" />
                  </div>
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
                  <div onClick={() => setOpenModal(true)}>
                    <CardsButton name="completar" />
                  </div>
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
                  <div onClick={() => setOpenModal(true)}>
                    <CardsButton name="ver mapa" />
                  </div>
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
                  <div>
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
          </div>
        </MainContainer>
      </section>
    </>
  );
};
