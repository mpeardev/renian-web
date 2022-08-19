import React, { useRef } from "react";
import classes from "./options-login.module.scss";
import useHover from "@react-hook/hover";
import Image from "next/image";
import { useRouter } from "next/router";

export const OptionsLogin = () => {
  const router = useRouter();

  const target01 = useRef(null);
  const target02 = useRef(null);

  const hover01 = useHover(target01);
  const hover02 = useHover(target02);

  return (
    <section className={classes.options}>
      <div className={classes.options__container}>
        <h5>Login</h5>
        <h3>
          Selecciona una <span>opcion para ingresar</span>
        </h3>

        <div>
          <div
            className={classes.options__card}
            ref={target01}
            onClick={() => router.push("/login/owner")}
          >
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
              <Image src="/img/option-owner.png" layout="fill" alt="image" />
            </div>
          </div>

          <div
            className={classes.options__card}
            ref={target02}
            onClick={() => router.push("/cpanel")}
          >
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
              <h3>Entidades registradoras e instituciones</h3>
            </div>
            <div className={classes.options__cardImage}>
              <Image
                src="/img/option-register.png"
                layout="fill"
                alt="image"
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
