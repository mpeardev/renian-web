import Image from "next/image";
import React from "react";
import classes from "./projection.module.scss";

export const Projection = () => {
  return (
    <section className={classes.projection}>
      <div className={classes.projection__container}>
        <div className={classes.projection__text}>
          <h2>
            Proyeccion a <span>mediano y largo plazo</span>
          </h2>
          <p>
            Sin un control adecuado de la poblacion de animales domesticos esto
            podria llegar a ser una realidad .
          </p>
        </div>

        <div className={classes.projection__image}>
          <Image
            src="/img/mission/projection.png"
            layout="responsive"
            width={120}
            height={60}
          />
        </div>
      </div>
    </section>
  );
};
