import Image from "next/image";
import classes from "./functionality.module.scss";
import { Bounce } from "react-reveal";
import { MainContainer } from "../../";

export const Functionality = () => {
  return (
    <>
      <section className={classes.functionality} id="microchip">
        <MainContainer>
          <div className={classes.functionality__container}>
            <h2>¿Cómo es el proceso de registro?</h2>
            <div>
              <div className={classes.functionality__text}>
                <span>¡El proceso es bastante simple y rápido!</span>
                <p>
                  Primero verificamos que la mascota no cuente con una
                  identificación, luego insertamos el microchip de
                  identificación permanente en el lomo de la mascotita, este
                  dispositivo cuenta con un número único a nivel mundial.
                </p>
                <p>
                  Este número es detectado por un lector de microchip, es
                  ingresado a nuestro Sistema de Registro de Mascotas en la Web3
                  (Blockchain) anexando las características de las mascotas, su
                  información sanitaria y datos del propietario legal.
                </p>
              </div>

              <div className={classes.functionality__image}>
                <Bounce right>
                  <div>
                    <Image
                      src="/img/microchip-how.png"
                      layout="responsive"
                      width={60}
                      height={29}
                      alt="microchip-how"
                    />
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
      <Chip />
    </>
  );
};

const Chip = () => {
  return (
    <section className={classes.chip}>
      <div className={classes.chip__container}>
        <Bounce left>
          <div className={classes.chip__image}>
            <Image
              src="/img/chip-important.png"
              layout="responsive"
              width={150}
              height={65}
            />
          </div>
        </Bounce>
        <div className={classes.chip__detail}>
          <span>El Microchip</span>{" "}
          <p>Es un dispositivo de identificación animal:</p>
          <ul>
            <li>Es biocompatible.</li>
            <li>Del tamaño de un grano de arroz.</li>
            <li>Va debajo de la piel del animal.</li>
            <li>Es pasivo (no emite señal alguna).</li>
            <li>Es de por vida.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
