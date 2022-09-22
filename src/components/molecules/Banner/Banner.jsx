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
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          <SwiperSlide>
            <div className={classes.banner__first}></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={classes.banner__second}>
              {/* <div className={classes.banner__description}>
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
              </div> */}
              {/* <div className={classes.banner__image}>
                <Image
                  src="/img/pets/8.jpg"
                  layout="fill"
                  priority="true"
                  alt="image"
                />
              </div> */}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={classes.banner__third}>
              {/* <div className={classes.banner__description}>
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
              </div> */}
              {/* <div className={classes.banner__image}>
                <Image
                  src="/img/pets/8.jpg"
                  layout="fill"
                  priority="true"
                  alt="image"
                />
              </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
