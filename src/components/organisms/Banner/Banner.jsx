import classes from "./banner.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { Link } from "react-scroll";
import { Flip } from "react-reveal";
import { MainContainer, DefaultButton } from "../../";

export const Banner = () => {
  return (
    <section className={classes.banner}>
      <Flip top>
        <div>
          <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide>
              <div className={classes.banner__first}>
                <MainContainer>
                  <main>
                    <div className={classes.banner__firstWar}>
                      <div>
                        <Image
                          src="/svg/war-logo.svg"
                          layout="responsive"
                          width={60}
                          height={45}
                          href="war-logo"
                          // priority
                        />
                      </div>
                    </div>

                    <div className={classes.banner__firstText}>
                      <h1>Ahora pertenecemos al W.A.R.!</h1>
                      <div>
                        <h3>Que es W.A.R.?</h3>
                        <h5>
                          Asociacion formada por entidades de registro civil de
                          mascotas.
                        </h5>
                      </div>
                    </div>

                    <div className={classes.banner__firstImage}>
                      <div>
                        <Image
                          src="/img/slides/cat.png"
                          layout="responsive"
                          width={42}
                          height={60}
                          href="image"
                          // priority
                        />
                      </div>
                    </div>
                  </main>
                </MainContainer>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={classes.banner__second}>
                <MainContainer>
                  <main>
                    <div className={classes.banner__secondImage}>
                      <div>
                        <Image
                          src="/img/slides/paw.png"
                          layout="responsive"
                          width={70}
                          height={65}
                          href="image"
                          // priority
                        />
                      </div>
                    </div>

                    <div className={classes.banner__secondText}>
                      <h2>Beneficios de ser identificado a nivel mundial</h2>
                      <div>
                        <h5>
                          Con los registros podemos fomentar la adopcion y
                          donaciones internacionales, evitamos en un 60% las
                          perdidas y robos de nuestras mascotas, ademas podran
                          viajar a cualquier parte del mundo sin necesidad de
                          registrarse nuevamente en otros paises.
                        </h5>
                      </div>
                    </div>
                  </main>
                </MainContainer>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={classes.banner__third}>
                <MainContainer>
                  <main>
                    <div className={classes.banner__thirdText}>
                      <h5>Al servicio del cuidado de las mascotas</h5>
                      <div>
                        <h3>
                          Ellos tambien tienen derecho a una identificacion,
                          protejamoslos. (Ley 30407)
                        </h3>
                      </div>

                      <div>
                        <Link
                          to="contact"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          offset={-80}
                        >
                          <DefaultButton type={"button"} name={"contactanos"} />
                        </Link>
                      </div>
                    </div>

                    <div className={classes.banner__thirdImage}>
                      <div>
                        <Image
                          src="/img/slides/dog.png"
                          layout="responsive"
                          width={50}
                          height={65}
                          href="image"
                          // priority
                        />
                      </div>
                    </div>
                  </main>
                </MainContainer>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Flip>
    </section>
  );
};
