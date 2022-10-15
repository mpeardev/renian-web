import Image from "next/image";
import classes from "./our-mission.module.scss";
import Zoom from "react-reveal/Zoom";
import { MainContainer } from "../../";

export const OurMission = () => {
  return (
    <section className={classes.mission}>
      <MainContainer>
        <div className={classes.mission__container}>
          <div className={classes.mission__circles}>
            <div>
              <div>
                <h2>37k</h2>
                <p>Mascotas Registradas</p>
              </div>
            </div>
            <div>
              <div>
                <h2>325+</h2>
                <p>Veterinarias Afiliadas</p>
              </div>
            </div>
            <div>
              <div>
                <h2>15+</h2>
                <p>Municipalidades</p>
              </div>
            </div>
          </div>

          <div className={classes.mission__content}>
            <h2>Nuestra Mision</h2>
            <p>
              <span>Renian</span> es una institucion que tiene como principal
              objetivo el registro nacional de los animales (consideradas
              mascotas y no mascotas), que trabaja bajo un sistema de plataforma
              interinstitucional.
            </p>

            <div className={classes.mission__contentImages}>
              <Zoom left cascade>
                <div>
                  <h4>Sin control adecuado</h4>
                  <div>
                    <Image
                      src="/img/mission/projection.png"
                      layout="responsive"
                      width={120}
                      height={60}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <h4>Control adecuado</h4>
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
              </Zoom>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
