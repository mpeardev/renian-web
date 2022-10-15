import { useState } from "react";
import classes from "./about-section.module.scss";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import whiteFootprints from "../../../../public/json/white-footprints.json";
import Lottie from "react-lottie";
import { Bounce } from "react-reveal";
import { MainContainer } from "../../";

export const AboutSection = () => {
  const [state, setState] = useState(false);
  const [stylesButton, setStylesButton] = useState({
    background: "auto",
    color: "auto",
    border: "auto",
  });

  const openVideo = () => {
    setState(true);
    setStylesButton(null);
  };

  return (
    <section className={classes.about}>
      <Decorate />
      <MainContainer>
        <div className={classes.about__container}>
          <div className={classes.about__text}>
            <h2>Que es Renian?</h2>
            <p>
              <span>Renian</span> es una institucion que tiene como principal
              objetivo el registro nacional de los animales (consideradas
              mascotas y no mascotas), que trabaja bajo un sistema de plataforma
              interinstitucional unificada, llamado con el nombre
              &quot;SRM&quot;. Renian trabaja dentro de un marco de Politicas
              Publicas de Proteccion y Bienestar Animal y se encuentra incluido
              dentro de varios proyectos nacionales priorizados por los
              ministerios de agricultura y de salud.
              <br />
              <span>Renian</span> permite identificar, registrar y realizar un
              seguimiento a los animales de compañia y no de compañia que
              habitan en cualquier cuidad del Peru, esto mediante el im-
            </p>
          </div>

          <div className={classes.about__player}>
            <Bounce right>
              <div className={classes.about__playerVideo}>
                {stylesButton && (
                  <div
                    onClick={openVideo}
                    style={stylesButton}
                    className={classes.about__playerVideoPreview}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/ujphzprf.json"
                      trigger="loop-on-hover"
                      colors="primary:#000000,secondary:#dd0000"
                      style={{ width: "75px", height: "75px" }}
                    ></lord-icon>
                  </div>
                )}

                {state === true && (
                  <ReactPlayer url="https://www.youtube.com/watch?v=W-yP0CYFSaU&feature=emb_title" />
                )}
              </div>
            </Bounce>

            <p>
              <span>Renian</span> permite identificar, registrar y realizar un
              seguimiento a los animales de compañia y no de compañia que
              habitan en cualquier cuidad del Peru, esto mediante el implante de
              un microchip de identificacion animal de standard mundial.
            </p>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

const Decorate = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.about__decorate}>
      <div className={classes.about__decorateFootprints}>
        <div>
          <Lottie
            isClickToPauseDisabled={true}
            style={{
              width: "100%",
            }}
            options={{
              animationData: whiteFootprints,
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
              animationData: whiteFootprints,
              defaultOptions,
            }}
          />
        </div>
      </div>

      <div className={classes.about__decoratePets}>
        <div>
          <Image
            src="/img/pets.png"
            layout="responsive"
            width={70}
            height={75}
            href="image"
          />
        </div>
      </div>
    </div>
  );
};
