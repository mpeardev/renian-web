import Image from "next/image";
import React, { useRef } from "react";
import useHover from "@react-hook/hover";
import classes from "./card-section.module.scss";
import { useRouter } from "next/router";

export const CardSection = () => {
  const router = useRouter();

  const target01 = useRef(null);
  const target02 = useRef(null);
  const target03 = useRef(null);
  const target04 = useRef(null);

  const hover01 = useHover(target01);
  const hover02 = useHover(target02);
  const hover03 = useHover(target03);
  const hover04 = useHover(target04);

  return (
    <section className={classes.section}>
      <div className={classes.section__container}>
        <h3>Explora nuestras opciones</h3>
        <div>
          <div className={classes.section__card} ref={target01}>
            <div
              className={classes.section__cardDeg}
              style={hover01 ? { display: "block" } : { display: "none" }}
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/zniqnylq.json"
                  trigger="loop"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "120px", height: "120px" }}
                ></lord-icon>
                <p>Consultar</p>
              </div>
            </div>
            <div className={classes.section__cardText}>
              <h3>
                <span>Consulta</span> el registro de tu mascota
              </h3>
            </div>
            <div
              className={classes.section__cardImage}
              style={hover01 ? { filter: "opacity(0.3)" } : { filter: "none" }}
            >
              <Image
                src="/img/cards/1.jpg"
                layout="fill"
                priority
                alt="image"
              />
            </div>
          </div>

          <div className={classes.section__card} ref={target02}>
            <div
              className={classes.section__cardDeg}
              style={hover02 ? { display: "block" } : { display: "none" }}
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/hiqmdfkt.json"
                  trigger="loop"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "120px", height: "120px" }}
                ></lord-icon>
                <p>Registrar</p>
              </div>
            </div>
            <div className={classes.section__cardText}>
              <h3>
                <span>Registra</span> a tu mascota en <span>RENIAN</span>
              </h3>
            </div>
            <div className={classes.section__cardImage}>
              <Image
                src="/img/cards/2.jpg"
                layout="fill"
                priority
                alt="image"
                style={
                  hover02 ? { filter: "opacity(0.3)" } : { filter: "none" }
                }
              />
            </div>
          </div>

          <div
            className={classes.section__card}
            ref={target03}
            // onClick={() => router.push("/cpanel")}
          >
            <div
              className={classes.section__cardDeg}
              style={hover03 ? { display: "block" } : { display: "none" }}
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/wnnosluj.json"
                  trigger="loop"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "120px", height: "120px" }}
                ></lord-icon>
                <p>Ingresar</p>
              </div>
            </div>
            <div className={classes.section__cardText}>
              <h3>
                <span>Ingresa</span> a nuestra <span>Intranet</span>
              </h3>
              <small>(Centros veterinarios e instituciones)</small>
            </div>
            <div className={classes.section__cardImage}>
              <Image
                src="/img/cards/3.jpg"
                layout="fill"
                priority
                alt="image"
                style={
                  hover03 ? { filter: "opacity(0.3)" } : { filter: "none" }
                }
              />
            </div>
          </div>

          <div className={classes.section__card} ref={target04}>
            <div
              className={classes.section__cardDeg}
              style={hover04 ? { display: "block" } : { display: "none" }}
            >
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/zniqnylq.json"
                  trigger="loop"
                  colors="primary:#f5f5f5,secondary:#f5f5f5"
                  style={{ width: "120px", height: "120px" }}
                ></lord-icon>
                <p>Consultar</p>
              </div>
            </div>
            <div className={classes.section__cardText}>
              <h3>
                <span>Consulta</span> el registro en <span>WAR</span>
              </h3>
            </div>
            <div className={classes.section__cardImage}>
              <Image
                src="/img/cards/4.jpg"
                layout="fill"
                priority
                alt="image"
                style={
                  hover04 ? { filter: "opacity(0.3)" } : { filter: "none" }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
