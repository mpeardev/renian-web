import Image from "next/image";
import classes from "./news.module.scss";
import Zoom from "react-reveal/Zoom";
import { MainContainer } from "../../";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import mediumArticles from "../../../utils/mediumArticles.json";

export const News = () => {
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
          <Carousel />
        </div>
      </MainContainer>
    </section>
  );
};

const Carousel = () => {
  return (
    <>
      <main className={`${classes.carousel}`}>
        <Swiper
          slidesPerView="auto"
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {mediumArticles.map((article, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={classes.news__slide}>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div className={classes.news__card}>
                      <div className={classes.news__cardImage}>
                        <Image
                          src={article.image}
                          layout="responsive"
                          width={90}
                          height={40}
                          href="image"
                        />
                      </div>

                      <div className={classes.news__cardContent}>
                        <h6>{article.author}</h6>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </>
  );
};
