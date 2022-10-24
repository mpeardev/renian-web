import Image from "next/image";
import Lottie from "react-lottie";
import classes from "./news.module.scss";
import redFootprints from "../../../../public/json/red-footprints.json";
import { useRef } from "react";
import useHover from "@react-hook/hover";
import Zoom from "react-reveal/Zoom";
import { MainContainer } from "../../";

export const News = () => {
  const target01 = useRef(null);
  const target02 = useRef(null);
  const target03 = useRef(null);

  const hover01 = useHover(target01);
  const hover02 = useHover(target02);
  const hover03 = useHover(target03);

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
            <div className={classes.news__card} ref={target01}>
              <div
                className={classes.news__cardDeg}
                style={hover01 ? { display: "block" } : { display: "none" }}
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
              </div>
              <div
                className={classes.news__cardImage}
                style={
                  hover01
                    ? { filter: "opacity(0.3)" }
                    : { filter: "grayscale(0.3)" }
                }
              >
                <Image
                  src="/img/play-preview.png"
                  layout="responsive"
                  width={90}
                  height={40}
                  href="image"
                />
              </div>

              <div className={classes.news__cardContent}>
                <h6>Article</h6>
                <h3>New Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  culpa, ullam in quasi quisquam temporibus incidunt laborum
                  delectus tempore repellat qui consequatur officiis
                  perspiciatis. Voluptates error odit accusantium fuga dolore!
                </p>
              </div>
            </div>

            <div className={classes.news__card} ref={target02}>
              <div
                className={classes.news__cardDeg}
                style={hover02 ? { display: "block" } : { display: "none" }}
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
              </div>
              <div
                className={classes.news__cardImage}
                style={
                  hover02
                    ? { filter: "opacity(0.3)" }
                    : { filter: "grayscale(0.3)" }
                }
              >
                <Image
                  src="/img/play-preview.png"
                  layout="responsive"
                  width={90}
                  height={40}
                  href="image"
                />
              </div>

              <div className={classes.news__cardContent}>
                <h6>Article</h6>
                <h3>New Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  culpa, ullam in quasi quisquam temporibus incidunt laborum
                  delectus tempore repellat qui consequatur officiis
                  perspiciatis. Voluptates error odit accusantium fuga dolore!
                </p>
              </div>
            </div>

            <div className={classes.news__card} ref={target03}>
              <div
                className={classes.news__cardDeg}
                style={hover03 ? { display: "block" } : { display: "none" }}
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
              </div>
              <div
                className={classes.news__cardImage}
                style={
                  hover03
                    ? { filter: "opacity(0.3)" }
                    : { filter: "grayscale(0.3)" }
                }
              >
                <Image
                  src="/img/play-preview.png"
                  layout="responsive"
                  width={90}
                  height={40}
                  href="image"
                />
              </div>

              <div className={classes.news__cardContent}>
                <h6>Article</h6>
                <h3>New Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  culpa, ullam in quasi quisquam temporibus incidunt laborum
                  delectus tempore repellat qui consequatur officiis
                  perspiciatis. Voluptates error odit accusantium fuga dolore!
                </p>
              </div>
            </div>
          </main>
        </div>
      </MainContainer>
    </section>
  );
};
