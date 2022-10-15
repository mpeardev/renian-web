import Image from "next/image";
import classes from "./section-cards.module.scss";
import useHover from "@react-hook/hover";
import Bounce from "react-reveal/Bounce";
import { useRouter } from "next/router";
import { useRef } from "react";
import { DefaultModal, MainContainer } from "../../";
import { useModal } from "../../../hook/useModal";

export const SectionCards = () => {
  const router = useRouter();

  const { openModal, setOpenModal } = useModal();

  const target01 = useRef(null);
  const target02 = useRef(null);
  const target03 = useRef(null);
  const target04 = useRef(null);

  const hover01 = useHover(target01);
  const hover02 = useHover(target02);
  const hover03 = useHover(target03);
  const hover04 = useHover(target04);

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
            <div ref={target01}>
              <Bounce left>
                <div
                  className={`${classes.cards__box} ${classes.cards__boxOne}`}
                  onClick={() => router.push("/consult")}
                >
                  <div className={classes.cards__boxBg}>
                    {hover01 ? (
                      <Image
                        src="/img/frames/frame_red_01.png"
                        layout="fill"
                        href="image"
                        priority
                      />
                    ) : (
                      <Image
                        src="/img/frames/frame_01.png"
                        layout="fill"
                        href="image"
                        priority
                      />
                    )}
                  </div>
                  <h4>Consultar</h4>
                  <div>
                    <div className={classes.cards__boxImage}>
                      <div>
                        <Image
                          src="/img/cards-section/image_01.png"
                          layout="responsive"
                          width={50}
                          height={50}
                          href="image"
                          // priority
                        />
                      </div>
                    </div>
                    <div className={classes.cards__boxText}>
                      <p>Consulta el registro de tu mascota.</p>
                    </div>
                  </div>
                </div>
              </Bounce>
            </div>

            <div ref={target02}>
              <Bounce left>
                <a
                  href="http://registro.firulaixcoin.finance/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    className={`${classes.cards__box} ${classes.cards__boxTwo}`}
                    ref={target02}
                  >
                    <div className={classes.cards__boxBg}>
                      {hover02 ? (
                        <Image
                          src="/img/frames/frame_red_02.png"
                          layout="fill"
                          href="image"
                          priority
                        />
                      ) : (
                        <Image
                          src="/img/frames/frame_02.png"
                          layout="fill"
                          href="image"
                          priority
                        />
                      )}
                    </div>

                    <h4>Registrar</h4>
                    <div>
                      <div className={classes.cards__boxText}>
                        <p>Registro mundial de mascotas.</p>
                      </div>
                      <div className={classes.cards__boxImage}>
                        <div style={{ position: "relative" }}>
                          <Image
                            src="/img/cards-section/image_02.png"
                            layout="responsive"
                            width={50}
                            height={50}
                            href="image"
                            // priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Bounce>
            </div>

            <div ref={target03}>
              <Bounce right>
                <div
                  className={`${classes.cards__box} ${classes.cards__boxThree}`}
                  onClick={() => setOpenModal(true)}
                >
                  <div className={classes.cards__boxBg}>
                    {hover03 ? (
                      <Image
                        src="/img/frames/frame_red_03.png"
                        layout="fill"
                        href="image"
                        priority
                      />
                    ) : (
                      <Image
                        src="/img/frames/frame_03.png"
                        layout="fill"
                        href="image"
                        priority
                      />
                    )}
                  </div>
                  <h4 style={{ textAlign: "end" }}>Solicitud de registro</h4>
                  <div>
                    <div className={classes.cards__boxText}>
                      <p>Desde cualquier parte del mundo.</p>
                    </div>
                    <div className={classes.cards__boxImage}>
                      <div>
                        <Image
                          src="/img/cards-section/image_03.png"
                          layout="responsive"
                          width={50}
                          height={50}
                          href="image"
                          // priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Bounce>
            </div>

            <div ref={target04}>
              <Bounce right>
                <a
                  href="https://dexscreener.com/moonriver/0x3b8ce3bce4e393f2095438e656da44b51fd2567d"
                  target="_black"
                  rel="noreferrer noopener"
                >
                  <div
                    className={`${classes.cards__box} ${classes.cards__boxFour}`}
                  >
                    <div className={classes.cards__boxBg}>
                      {hover04 ? (
                        <Image
                          src="/img/frames/frame_red_04.png"
                          layout="fill"
                          href="image"
                          priority
                        />
                      ) : (
                        <Image
                          src="/img/frames/frame_04.png"
                          layout="fill"
                          href="image"
                          priority
                        />
                      )}
                    </div>
                    <h4>Precio actual</h4>
                    <div>
                      <div className={classes.cards__boxText}>
                        <p>FIRU / USDC</p>
                        <span>0.0025</span>
                      </div>
                      <div className={classes.cards__boxImage}>
                        <div>
                          <Image
                            src="/img/cards-section/image_04.png"
                            layout="responsive"
                            width={70}
                            height={45}
                            href="image"
                            // priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Bounce>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};
