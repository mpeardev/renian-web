import React, { useRef } from "react";
import classes from "./about.module.scss";
import useHover from "@react-hook/hover";
import Image from "next/image";

export const About = () => {
  const target01 = useRef(null);
  const target02 = useRef(null);
  const target03 = useRef(null);

  const hover01 = useHover(target01);
  const hover02 = useHover(target02);
  const hover03 = useHover(target03);

  return (
    <section className={classes.about}>
      <div className={classes.about__container}>
        <div className={classes.about__text}>
          <h2>
            <span>¿Quienes</span> somos?
          </h2>
          <p>
            RENIAN es una institución que tiene como principal objetivo el
            REGISTRO NACIONAL DE LOS ANIMALES (considerando a los animales
            domésticos y no domésticos ), que se ejecuta bajo un sistema de
            plataforma interinstitucional unificada de nombre “SRM”. RENIAN
            trabaja dentro del marco de Políticas Públicas de Protección y
            Bienestar Animal Nacional e Internacional y se encuentra incluido
            dentro de varios proyectos nacionales priorizados por los
            Ministerios de Agricultura y de Salud.
          </p>
          <div>
            <div className={classes.about__card} ref={target01}>
              <div className={classes.about__cardIcon}>
                <lord-icon
                  src="https://cdn.lordicon.com/cqqydgge.json"
                  trigger={hover01 ? "loop" : "none"}
                  colors={
                    hover01
                      ? "primary:#000000,secondary:#dd0000"
                      : "primary:#606060,secondary:#606060"
                  }
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
              </div>

              <div className={classes.about__cardText}>
                <h2>30k+</h2>
                <p style={{ color: hover01 ? "#212121" : "#757575" }}>
                  Mascotas Registradas
                </p>
              </div>
            </div>

            <div className={classes.about__card} ref={target02}>
              <div className={classes.about__cardIcon}>
                <lord-icon
                  src="https://cdn.lordicon.com/tnfwimua.json"
                  trigger={hover02 ? "loop" : "none"}
                  colors={
                    hover02
                      ? "primary:#000000,secondary:#dd0000"
                      : "primary:#606060,secondary:#606060"
                  }
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
              </div>

              <div className={classes.about__cardText}>
                <h2>325+</h2>
                <p style={{ color: hover02 ? "#212121" : "#757575" }}>
                  Veterinarias Afiliadas
                </p>
              </div>
            </div>

            <div className={classes.about__card} ref={target03}>
              <div className={classes.about__cardIcon}>
                <lord-icon
                  src="https://cdn.lordicon.com/mxuuhaan.json"
                  trigger={hover03 ? "loop" : "none"}
                  colors={
                    hover03
                      ? "primary:#000000,secondary:#dd0000"
                      : "primary:#606060,secondary:#606060"
                  }
                  style={{ width: "80px", height: "80px" }}
                ></lord-icon>
              </div>

              <div className={classes.about__cardText}>
                <h2>15+</h2>
                <p style={{ color: hover03 ? "#212121" : "#757575" }}>
                  Municipalidades
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.about__image}>
          <Image
            src="/img/about-image.png"
            layout="responsive"
            width={28}
            height={28}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};
