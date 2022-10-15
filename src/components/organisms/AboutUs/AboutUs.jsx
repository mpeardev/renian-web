import Image from "next/image";
import classes from "./about-us.module.scss";
import Bounce from "react-reveal/Bounce";
import { MainContainer } from "../../";

export const AboutUs = () => {
  return (
    <section className={classes.about} id="about">
      <MainContainer>
        <div className={classes.about__container}>
          <div className={classes.about__image}>
            <Bounce left>
              <div>
                <Image
                  src="/img/renian-about.jpg"
                  layout="responsive"
                  width={120}
                  height={80}
                  href="image"
                />
              </div>
            </Bounce>
          </div>

          <div className={classes.about__text}>
            <h2>Quienes somos?</h2>
            <p>
              <span>Renian</span> es una institucion que tiene como principal
              objetivo el registro nacional de los animales (consideradas
              mascotas y no mascotas), que trabaja bajo un sistema de plataforma
              interinstitucional unificada, llamado con el nombre
            </p>
          </div>

          <div className={classes.about__logo}>
            <div>
              <Image
                src="/img/renian-img.png"
                layout="responsive"
                width={50}
                height={58}
                alt="image"
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
