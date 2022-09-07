import React from "react";
import classes from "./banner.module.scss";

// import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { useRouter } from "next/router";

export const Banner = () => {
  const router = useRouter();

  return (
    <>
      <section className={classes.banner}>
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className={classes.banner__slide}>
              <div className={classes.banner__image}>
                <Image
                  src="/img/pets/6.jpg"
                  layout="fill"
                  priority="true"
                  alt="image"
                />
              </div>
              <div className={classes.banner__description}>
                <div className={classes.banner__right}>
                  <h5>Al servicio del cuidado de las mascotas</h5>
                  <h1>
                    Nunca fue tan facil ser parte de esta comunidad{" "}
                    <span>RENIAN</span>
                  </h1>
                  <div>
                    <button>Contactanos</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={classes.banner__slide}>
              <div className={classes.banner__description}>
                <div className={classes.banner__left}>
                  <h5>Al servicio del cuidado de las mascotas</h5>
                  <h1>
                    Ellos tambien tienen derechos a una identificacion,
                    protejamoslos. <span>(Ley 30407)</span>
                  </h1>
                  <div>
                    <button>Contactanos</button>
                  </div>
                </div>
              </div>
              <div className={classes.banner__image}>
                <Image
                  src="/img/pets/8.jpg"
                  layout="fill"
                  priority="true"
                  alt="image"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
