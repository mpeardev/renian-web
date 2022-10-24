import Image from "next/image";
import { Fade } from "react-reveal";
import { MainContainer, DefaultButton } from "../../";
import classes from "./back.module.scss";

export const Back = () => {
  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <section className={classes.back}>
        <MainContainer>
          <div className={classes.back__container}>
            <div className={classes.back__title}>
              <h3>Con el respaldo de:</h3>
            </div>

            <div className={classes.back__slider}>
              <div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_01.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_02.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_03.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_04.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_05.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_06.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_07.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_08.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <Image
                      src="/img/back/image_01.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_02.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Image
                      src="/img/back/image_03.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
      <MoreInformation />
    </div>
  );
};

const MoreInformation = () => {
  return (
    <div className={classes.information}>
      <MainContainer>
        <Fade top>
          <div className={classes.information__box}>
            <div className={classes.information__boxImg}></div>
            <div className={classes.information__boxText}>
              <div>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/mjmrmyzg.json"
                    trigger="loop"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: "5rem", height: "5rem" }}
                  ></lord-icon>
                </div>
              </div>
              <div>
                <h1>¿Necesitas más información?</h1>
                <a
                  href="https://bit.ly/Informacion_RENIAN"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <DefaultButton name="¡Conversemos!" />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </MainContainer>
    </div>
  );
};
