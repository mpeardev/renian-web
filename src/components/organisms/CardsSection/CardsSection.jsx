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
              <h3>Consultar</h3>
              <div>
                <div className={classes.cards__cardImg}>
                  <Image
                    src="/img/cards/image_01.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
                <div className={classes.cards__cardDetail}>
                  <p>Consulta el registro de tu mascota</p>
                  <div onClick={() => router.push("/consult")}>
                    <CardsButton name="consultar" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.cards__card} ${classes.cardsTwo}`}>
              <h3>Registrar</h3>
              <div>
                <div className={classes.cards__cardImg}>
                  <Image
                    src="/img/cards/image_02.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
                <div className={classes.cards__cardDetail}>
                  <p>Registra a tu mascota en RENIAN Jesús María</p>
                  <div onClick={() => setOpenModal(true)}>
                    <CardsButton name="registrar" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.cards__card} ${classes.cardsThree}`}>
              <h3>Solicitud de Registro</h3>
              <div>
                <div className={classes.cards__cardImg}>
                  <Image
                    src="/img/cards/image_03.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
                <div className={classes.cards__cardDetail}>
                  <p>Desde cualquier parte del mundo</p>
                  <div onClick={() => setOpenModal(true)}>
                    <CardsButton name="solicitar" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.cards__card} ${classes.cardsFour}`}>
              <h3>Mis Mascotas</h3>
              <div>
                <div className={classes.cards__cardImg}>
                  <Image
                    src="/img/cards/image_04.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
                <div className={classes.cards__cardDetail}>
                  <p>Lorem Ipsu Lorem Ipsu</p>
                  <div onClick={() => setOpenModal(true)}>
                    <CardsButton name="ver" />
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
