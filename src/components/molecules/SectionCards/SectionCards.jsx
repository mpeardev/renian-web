import Image from "next/image";
import classes from "./section-cards.module.scss";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

export const SectionCards = () => {
  const router = useRouter();

  return (
    <section className={classes.cards}>
      <div className={classes.cards__container}>
        <Fade left>
          <div
            className={`${classes.cards__box} ${classes.cards__boxOne}`}
            onClick={() => router.push("/consult")}
          >
            <div className={classes.cards__boxBg}>
              <Image
                src="/img/frames/frame_01.png"
                layout="fill"
                href="image"
              />
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
                  />
                </div>
              </div>
              <div className={classes.cards__boxText}>
                <p>Consulta el registro de tu mascota.</p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade left>
          <a href="http://registro.firulaixcoin.finance/" target="_blank">
            <div className={`${classes.cards__box} ${classes.cards__boxTwo}`}>
              <div className={classes.cards__boxBg}>
                <Image
                  src="/img/frames/frame_02.png"
                  layout="fill"
                  href="image"
                />
              </div>
              <h4>Registrar</h4>
              <div>
                <div className={classes.cards__boxText}>
                  <p>Registro mundial de mascotas.</p>
                </div>
                <div className={classes.cards__boxImage}>
                  <div>
                    <Image
                      src="/img/cards-section/image_02.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      href="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Fade>

        <Fade right>
          <div className={`${classes.cards__box} ${classes.cards__boxThree}`}>
            <div className={classes.cards__boxBg}>
              <Image
                src="/img/frames/frame_03.png"
                layout="fill"
                href="image"
              />
            </div>
            <h4 style={{ textAlign: "end" }}>Solicitud de registro</h4>
            <div>
              <div className={classes.cards__boxText}>
                <p>Registro mundial de mascotas.</p>
              </div>
              <div className={classes.cards__boxImage}>
                <div>
                  <Image
                    src="/img/cards-section/image_03.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className={`${classes.cards__box} ${classes.cards__boxFour}`}>
            <div className={classes.cards__boxBg}>
              <Image
                src="/img/frames/frame_04.png"
                layout="fill"
                href="image"
              />
            </div>
            <h4>Precio actual</h4>
            <div>
              <div className={classes.cards__boxText}>
                <p>Registro mundial de mascotas.</p>
              </div>
              <div className={classes.cards__boxImage}>
                <div>
                  <Image
                    src="/img/cards-section/image_04.png"
                    layout="responsive"
                    width={50}
                    height={50}
                    href="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
