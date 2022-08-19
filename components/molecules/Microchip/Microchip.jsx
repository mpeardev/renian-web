import React from "react";
import classes from "./microchip.module.scss";
import Image from "next/image";

export const Microchip = () => {
  return (
    <section className={classes.microchip}>
      <div className={classes.microchip__container}>
        <div className={classes.microchip__description}>
          <h2>
            ¿Que es un <span>Microchip?</span>
          </h2>
          <p>Es un dispositivo de identificacion animal.</p>
          <ul>
            <li>Es biocompatible</li>
            <li>Es del tamaño de un grano de arroz</li>
            <li>Va debajo de la piel del animal</li>
            <li>Es pasivo (no emite señal alguna)</li>
            <li>Es de por vida</li>
          </ul>
          <div>
            <div className={classes.microchip__descriptionImage}>
              <Image
                src="/img/microchip-null.png"
                layout="responsive"
                width={10}
                height={10}
                alt="image"
              />
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/uypveeyg.json"
                  trigger="loop"
                  colors="primary:#606060,secondary:#606060"
                  style={{ width: "150px", height: "150px" }}
                ></lord-icon>
              </div>
            </div>

            <div className={classes.microchip__descriptionText}>
              <h4>¡IMPORTANTE!</h4>
              <p>
                El microchip <span>no es un dispositivo GPS.</span>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.microchip__how}>
          <h2>
            <span>¿Como</span> funciona el Registro?
          </h2>
          <div>
            <Image
              src="/img/microchip-how.png"
              layout="responsive"
              width={60}
              height={29}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
