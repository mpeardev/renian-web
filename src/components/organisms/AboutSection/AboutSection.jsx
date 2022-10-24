import classes from "./about-section.module.scss";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import { Bounce } from "react-reveal";
import { MainContainer } from "../../";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [loadVideo, setLoadVideo] = useState();

  useEffect(() => {
    setLoadVideo(true);
  }, []);

  return (
    <section className={classes.about} id="about">
      <MainContainer>
        <div className={classes.about__container}>
          <div className={classes.about__information}>
            <h1>
              ¿Qué es <span>Renian</span>?
            </h1>
            <p>
              Somos el Registro Nacional de Identidad Animal en el Perú, una
              institución que tiene como objetivo principal el registro de los
              animales (animales domésticos y silvestres){" "}
              <span>
                almacenando la información de los propietarios y la data de los
                animales bajo un sistema Blockchain de almacenamiento
                descentralizado con un resguardo único.
              </span>
            </p>
            <p>
              En RENIAN trabajamos dentro de un marco de Políticas Públicas de
              Protección, Bienestar Animal y Tenencia Responsable, encontrándose
              incluído dentro de varios proyectos nacionales priorizados y
              liderados por los ministerios de agricultura y de salud pública.{" "}
            </p>
            <p>
              Nuestro proyecto permite identificar, registrar y realizar un
              seguimiento a los animales que habitan en cualquier ciudad del
              Perú, mediante el implante de un microchip de identificación
              animal de standar mundial, que cumple con la normativa ISO 11784 -
              11785.
            </p>
            <p>
              RENIAN está respaldado y es aliado del{" "}
              <span>
                <a
                  href="https://worldanimalregistry.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  World Animal Registry
                </a>
              </span>
              , un registro 100% seguro a nivel mundial y conectado a la Web3.
            </p>

            <Bounce left cascade>
              <div>
                <div className={classes.about__informationCard}>
                  <div>
                    <Image
                      src="/img/about/image_01.png"
                      layout="responsive"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span></span>
                  <h3>
                    <CountUp end={30} duration={3} />
                    k+
                  </h3>
                  <p>Mascotas Registradas</p>
                </div>

                <div className={classes.about__informationCard}>
                  <div>
                    <Image
                      src="/img/about/image_02.png"
                      layout="responsive"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span></span>
                  <h3>
                    <CountUp end={325} duration={3} />+
                  </h3>
                  <p>Veterinarias Afiliadas</p>
                </div>

                <div className={classes.about__informationCard}>
                  <div>
                    <Image
                      src="/img/about/image_03.png"
                      layout="responsive"
                      width={50}
                      height={50}
                    />
                  </div>
                  <span></span>
                  <h3>
                    <CountUp end={15} duration={3} />+
                  </h3>
                  <p>Municipalidades</p>
                </div>
              </div>
            </Bounce>
          </div>

          <div className={classes.about__player}>
            <Bounce right>
              <div className={classes.about__playerVideo}>
                {loadVideo && (
                  <ReactPlayer url="https://www.youtube.com/watch?v=W-yP0CYFSaU&feature=emb_title" />
                )}
              </div>
            </Bounce>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
