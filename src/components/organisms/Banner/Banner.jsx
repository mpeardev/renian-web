import classes from "./banner.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
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
              <div
                className={`${classes.banner__background} ${classes.banner__first}`}
              >
                <MainContainer>
                  <div className={classes.banner__slide}>
                    <div className={classes.banner__slideDetail}>
                      <h4>Demos juntos el primer paso</h4>
                      <h1>
                        Ellos también tienen derecho a ser identificados (Ley
                        30407)
                      </h1>
                      <a
                        href="https://bit.ly/Informacion_RENIAN"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <DefaultButton name="contáctanos" />
                      </a>
                    </div>
                  </div>
                </MainContainer>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className={`${classes.banner__background} ${classes.banner__second}`}
              >
                <MainContainer>
                  <div className={classes.banner__slide}>
                    <div className={classes.banner__slideDetail}>
                      <h4>Demos juntos el primer paso</h4>
                      <h1>
                        Sé parte de la comunidad RENIAN, sé parte de la Tenencia
                        Responsable
                      </h1>
                      <a
                        href="https://bit.ly/Informacion_RENIAN"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <DefaultButton name="contáctanos" />
                      </a>
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
