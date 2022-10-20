import Image from "next/image";
import classes from "./our-mission.module.scss";
import Zoom from "react-reveal/Zoom";
import { MainContainer } from "../../";

export const OurMission = () => {
  return (
    <section className={classes.mission} id="mission">
      <MainContainer>
        <div className={classes.mission__container}>
          <div className={classes.mission__content}>
            <h2>Nuestra Mision</h2>
            <p>
              Reducir significativamente la población de animales callejeros y
              en estado de abandono, trabajando junto a entidades municipales y
              regionales, así como con organizaciones que buscan y trabajan por
              el bienestar animal.
            </p>
            <p>
              Promover la tenencia responsable en todo el Perú, esto mediante la
              identificación oficial de las mascotas y sus propietarios legales.
            </p>

            <div className={classes.mission__contentImages}>
              <Zoom left cascade>
                <div>
                  <h4>
                    Proyección a mediano plazo sin un control adecuado de la
                    población de animales domésticos
                  </h4>
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
                  <h4>Teniendo un control adecuado</h4>
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
