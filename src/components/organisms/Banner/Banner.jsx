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
                  <div className={classes.banner__slide}>
                    <div className={classes.banner__slideDetail}>
                      <h4>Al servicio del cuidado de las mascotas</h4>
                      <h1>
                        Nunca fue tan fácil ser parte de esta comunidad RENIAN
                      </h1>
                      <div>
                        <Link
                          to="contact"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          // offset={-80}
                        >
                          <DefaultButton name="contáctanos" />
                        </Link>
                        <p>(+51) 923-683-933</p>
                      </div>
                    </div>
                  </div>
                </MainContainer>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={classes.banner__second}>
                <MainContainer>
                  <div className={classes.banner__slide}>
                    <div className={classes.banner__slideDetail}>
                      <h4>Al servicio del cuidado de las mascotas</h4>
                      <h1>
                        Ellos también tienen derecho a una identificación,
                        protejámoslos (Ley 30407)
                      </h1>
                      <div>
                        <Link
                          to="contact"
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact="true"
                          // offset={-80}
                        >
                          <DefaultButton name="contáctanos" />
                        </Link>
                        <p>(+51) 923-683-933</p>
                      </div>
                    </div>
                  </div>
                </MainContainer>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Flip>
    </section>
  );
};
