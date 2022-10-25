import Image from "next/image";
import classes from "./news.module.scss";
import { useEffect, useRef, useState } from "react";
import useHover from "@react-hook/hover";
import Zoom from "react-reveal/Zoom";
import { MainContainer } from "../../";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useMediaQuery } from "../../../hook/useMediaQuery";

export const News = () => {
  // const target01 = useRef(null);
  // const target02 = useRef(null);
  // const target03 = useRef(null);

  // const hover01 = useHover(target01);
  // const hover02 = useHover(target02);
  // const hover03 = useHover(target03);

  const matches = useMediaQuery("(max-width: 767px)");

  return (
    <section className={classes.news} id="news">
      <MainContainer>
        <div className={classes.news__container}>
          <Zoom cascade>
            <div className={classes.news__text}>
              <h1>Últimas noticias</h1>
              <p>
                ¿Qué está pasando actualmente? Entérate de los últimos
                acontecimientos en relación al mundo animal
              </p>
            </div>
          </Zoom>

          <main>
            <Swiper
              slidesPerView={matches ? 1 : 3}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
            >
              <SwiperSlide>
                <div className={classes.news__slide}>
                  <a
                    href="https://medium.com/@renian.pe/qu%C3%A9-es-el-derecho-animal-en-el-per%C3%BA-d61f08427794?source=rss-2fc3ff655f43------2"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className={classes.news__card}>
                      {/* <div
                      className={classes.news__cardDeg}
                      style={
                        hover01 ? { display: "block" } : { display: "none" }
                      }
                    >
                      <div>
                        <lord-icon
                          src="https://cdn.lordicon.com/qdwegwcw.json"
                          trigger="loop"
                          colors="primary:#bf002a,secondary:#bf002a"
                          style={{ width: "120px", height: "120px" }}
                        ></lord-icon>
                        <p>Leer Noticia</p>
                      </div>
                    </div> */}
                      <div
                        className={classes.news__cardImage}
                        // style={
                        //   hover01
                        //     ? { filter: "opacity(0.3)" }
                        //     : { filter: "grayscale(0.3)" }
                        // }
                      >
                        <Image
                          src="https://cdn-images-1.medium.com/max/1024/1*BaNpt7iNFO28Fshr_oE18A.jpeg"
                          layout="responsive"
                          width={90}
                          height={40}
                          href="image"
                        />
                      </div>

                      <div className={classes.news__cardContent}>
                        <h6>RENIAN - Registro Nacional de Identidad Animal</h6>
                        <h3>¿Qué es el derecho animal en el Perú?</h3>
                        <p>
                          Conoce los deberes que tienes como propietario
                          responsable de mascotas… ¡Te contamos todo lo que
                          necesitas saber!. En el Perú existen más de 6 millones
                          de mascotas que se encuentran en estado de abandono.
                          La falta de conciencia en cuanto a la situación animal
                          actual en el Perú nos lleva a ignorar o desconocer los
                          derechos de nuestros fieles amigos, y muchas veces,
                          caer en la irresponsabilidad con relación a
                          nuestros deberes.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={classes.news__slide}>
                  <a
                    href="https://medium.com/@renian.pe/nueva-feria-de-mascotas-8b155ad39494?source=rss-2fc3ff655f43------2"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className={classes.news__card}>
                      {/* <div
                      className={classes.news__cardDeg}
                      style={
                        hover02 ? { display: "block" } : { display: "none" }
                      }
                    >
                      <div>
                        <lord-icon
                          src="https://cdn.lordicon.com/qdwegwcw.json"
                          trigger="loop"
                          colors="primary:#bf002a,secondary:#bf002a"
                          style={{ width: "120px", height: "120px" }}
                        ></lord-icon>
                        <p>Leer Noticia</p>
                      </div>
                    </div> */}
                      <div
                        className={classes.news__cardImage}
                        // style={
                        //   hover02
                        //     ? { filter: "opacity(0.3)" }
                        //     : { filter: "grayscale(0.3)" }
                        // }
                      >
                        <Image
                          src="https://cdn-images-1.medium.com/max/526/1*jgnilNS-dzOpZn2JSzGhsQ.jpeg"
                          layout="responsive"
                          width={90}
                          height={40}
                          href="image"
                        />
                      </div>

                      <div className={classes.news__cardContent}>
                        <h6>RENIAN - Registro Nacional de Identidad Animal</h6>
                        <h3>¡Nueva Feria de Mascotas!</h3>
                        <p>
                          Llegó Halloween y con esto la posibilidad de lucir el
                          mejor disfraz de tu engreído… Nos unimos una ves más a
                          la Municipalidad de Miraflores y Mascotas Miraflores
                          para tener un domingo lleno de sorpresas y premios
                          🐾🎁 Así es, esta campaña sacará tu lado más creativo
                          para que tu mascotita tenga la posibilidad de ganar
                          uno de nuestros premios.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={classes.news__slide}>
                  <a
                    href="https://medium.com/@renian.pe/despu%C3%A9s-del-registro-qu%C3%A9-informaci%C3%B3n-debes-enviar-a98c76e17481?source=rss-2fc3ff655f43------2"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className={classes.news__card}>
                      {/* <div
                      className={classes.news__cardDeg}
                      style={
                        hover03 ? { display: "block" } : { display: "none" }
                      }
                    >
                      <div>
                        <lord-icon
                          src="https://cdn.lordicon.com/qdwegwcw.json"
                          trigger="loop"
                          colors="primary:#bf002a,secondary:#bf002a"
                          style={{ width: "120px", height: "120px" }}
                        ></lord-icon>
                        <p>Leer Noticia</p>
                      </div>
                    </div> */}
                      <div
                        className={classes.news__cardImage}
                        // style={
                        //   hover03
                        //     ? { filter: "opacity(0.3)" }
                        //     : { filter: "grayscale(0.3)" }
                        // }
                      >
                        <Image
                          src="https://cdn-images-1.medium.com/max/507/1*QrkpqICp7Flrf-oWW5VvcQ.jpeg"
                          layout="responsive"
                          width={90}
                          height={40}
                          href="image"
                        />
                      </div>

                      <div className={classes.news__cardContent}>
                        <h6>RENIAN - Registro Nacional de Identidad Animal</h6>
                        <h3>
                          Después del registro: ¿Qué información debes enviar?
                        </h3>
                        <p>
                          Conoce los archivos que debes enviar para mantener
                          actualizada la información de tu mascotita 🐾❤️.
                          Sabemos lo importante que es mantener la información
                          sanitaria de tu mascotita en un solo lugar. Por ello,
                          si tu mascota está inscrita en RENIAN, puedes
                          almacenar todos sus datos de manera segura en nuestro
                          SRM (Sistema de Registro de Mascotas) — WEB 3.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </main>
        </div>
      </MainContainer>
    </section>
  );
};
