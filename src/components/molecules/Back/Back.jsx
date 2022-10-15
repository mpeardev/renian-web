import Image from "next/image";
import { MainContainer } from "../../";
import classes from "./back.module.scss";

export const Back = () => {
  return (
    <section className={classes.back}>
      <MainContainer>
        <div className={classes.back__container}>
          <div className={classes.back__title}>
            <h2>Con el respaldo de:</h2>
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
                    src="/img/back/image_09.png"
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
  );
};
