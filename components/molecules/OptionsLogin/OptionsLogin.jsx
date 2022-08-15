import React, { useRef } from "react";
import classes from "./options-login.module.scss";
import useHover from "@react-hook/hover";
import Image from "next/image";

export const OptionsLogin = () => {
  const target01 = useRef(null);
  const target02 = useRef(null);

  const hover01 = useHover(target01);
  const hover02 = useHover(target02);

  return (
    <section className={classes.options}>
      <div className={classes.options__container}>
        <h5>Login</h5>
        <h1>
          Selecciona una <span>opcion para ingresar</span>
        </h1>

        <div>
          <div className={classes.options__card} ref={target01}>
            <div
              className={classes.options__cardDeg}
              style={hover01 ? { display: "block" } : { display: "none" }}
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
            <div className={classes.options__cardText}>
              <h3>Dueño/a de mascota registrada</h3>
            </div>
            <div
              className={classes.options__cardImage}
              style={hover01 ? { filter: "opacity(0.3)" } : { filter: "none" }}
            >
              <Image src="/img/cards/1.jpg" layout="fill" />
            </div>
          </div>

          <div className={classes.options__card} ref={target02}>
            <div
              className={classes.options__cardDeg}
              style={hover02 ? { display: "block" } : { display: "none" }}
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
            <div className={classes.options__cardText}>
              <h3>Entidad Registradora</h3>
            </div>
            <div className={classes.options__cardImage}>
              <Image
                src="/img/cards/3.jpg"
                layout="fill"
                style={
                  hover02 ? { filter: "opacity(0.3)" } : { filter: "none" }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
