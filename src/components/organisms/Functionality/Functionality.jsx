import Image from "next/image";
import classes from "./functionality.module.scss";
import { Bounce } from "react-reveal";

const Background = ({ children }) => {
  return (
    <div className={classes.background}>
      <div className={classes.backgroundDecorate}></div>
      <div className={classes.background__container}>{children}</div>
    </div>
  );
};

export const Functionality = () => {
  return (
    <Background>
      <section className={classes.functionality}>
        <div className={classes.functionality__image}>
          <h2>Busqueda de la mascota</h2>
          <Bounce left>
            <div>
              <Image
                src="/img/microchip-how.png"
                layout="responsive"
                width={60}
                height={29}
                alt="image"
              />
            </div>
          </Bounce>
        </div>

        <div className={classes.functionality__text}>
          <h2>Como funciona el Registro?</h2>
          <p>
            El proceso es simple y rapido, se inserta un microchip de
            identificacion permanente dentro del cuerpo del animal, este
            dispositivo es un numero unico a nivel mundial, no es un GPS, es
            biocompatible y no causa nungun daño a su salud. Este numero
            esdetectado por el lector de microchip y luego es ingresado al
            sistema enaxando las caracteristicas del anuimal y los datos del
            propietario legal.
          </p>

          <p>El microhip es un dispositivo de identificacion animal.</p>
          <ul>
            <li>Es biocompatible.</li>
            <li>Es del tamaño de un grano de arroz.</li>
            <li>Va debajo de la piel del animal.</li>
            <li>Es pasivo (no emite señal alguna).</li>
            <li>Es de por vida.</li>
          </ul>
        </div>
      </section>
    </Background>
  );
};
