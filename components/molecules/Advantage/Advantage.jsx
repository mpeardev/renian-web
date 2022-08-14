import Image from "next/image";
import React from "react";
import classes from "./advantage.module.scss";

export const Advantage = () => {
  return (
    <section className={classes.advantage}>
      <div className={classes.advantage__container}>
        <div className={classes.advantage__image}>
          <Image
            src="/img/advantage-image.jpg"
            layout="responsive"
            width={40}
            height={40}
          />
        </div>

        <div className={classes.advantage__text}>
          <h5>Conoce las ventajas de los</h5>
          <h2>
            <span>Animales</span> registrados
          </h2>

          <ul>
            <li>
              <lord-icon
                src="https://cdn.lordicon.com/euyxudqt.json"
                trigger="loop"
                colors="primary:#000000,secondary:#dd0000"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
              <p>Identidad unica del animal de por vida</p>
            </li>

            <li>
              <lord-icon
                src="https://cdn.lordicon.com/euyxudqt.json"
                trigger="loop"
                colors="primary:#000000,secondary:#dd0000"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
              <p>Conocer al propietario legal</p>
            </li>

            <li>
              <lord-icon
                src="https://cdn.lordicon.com/euyxudqt.json"
                trigger="loop"
                colors="primary:#000000,secondary:#dd0000"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
              <p>Conocer las catacteristicas del animal</p>
            </li>

            <li>
              <lord-icon
                src="https://cdn.lordicon.com/euyxudqt.json"
                trigger="loop"
                colors="primary:#000000,secondary:#dd0000"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
              <p>Recuperar animales perdidos o robados</p>
            </li>

            <li>
              <lord-icon
                src="https://cdn.lordicon.com/euyxudqt.json"
                trigger="loop"
                colors="primary:#000000,secondary:#dd0000"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
              <p>Controles sanitarios y ficha clinica</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
