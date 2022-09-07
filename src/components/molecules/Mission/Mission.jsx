import React from "react";
import classes from "./mission.module.scss";
import Image from "next/image";

export const Mission = () => {
  return (
    <section className={classes.mission}>
      <div className={classes.mission__container}>
        <div className={classes.mission__text}>
          <h2>
            <span>Nuestra</span> Misión
          </h2>
          <p>
            Reducir significativamente la población de animales callejeros y en
            abandono, además de llevar un monitoreo constante de su estado de
            salud, promoviendo de esta manera una cultura de tenencia
            responsable.
          </p>
        </div>
        <div className={classes.mission__image}>
          <div>
            <Image
              src="/img/mission/our.png"
              layout="responsive"
              width={120}
              height={50}
              alt="image"
            />
          </div>
        </div>
      </div>

      <div className={classes.mission__bg}>
        <Image
          src="/img/footer-dogs.png"
          layout="responsive"
          width={120}
          height={28}
          priority="true"
          alt="image"
        />
      </div>
    </section>
  );
};
