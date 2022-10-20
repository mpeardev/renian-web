import React from "react";
import Image from "next/image";
import classes from "./footer.module.scss";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { MainContainer, DefaultModal } from "../../";
import { useModal } from "../../../hook/useModal";
import { Bounce } from "react-reveal";

export const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Controls />
      <footer className={classes.footer}>
        <MainContainer>
          <div className={classes.footer__container}>
            <div className={classes.footer__description}>
              <div
                className={classes.footer__descriptionImage}
                onClick={toggleHome}
              >
                <Image
                  src="/svg/renian-logo-white.svg"
                  layout="responsive"
                  width={80}
                  height={30}
                  alt="image"
                />
              </div>
              <p>
                Somos una fundacion procupada por la proteccion y defensa del
                bienestar animal. Identificamos, registramos y contribuimos a la
                localizacion de mascotas en el territorio Peruano.
              </p>
            </div>

            <div className={classes.footer__contact}>
              <h3>Contactanos</h3>
              <ul>
                <li>
                  <p>Av. Mariategui 1030, Jesus Maria</p>
                  <div>
                    <lord-icon
                      src="https://cdn.lordicon.com/gwklwoti.json"
                      // trigger="loop"
                      colors="primary:#929292,secondary:#929292"
                    ></lord-icon>
                  </div>
                </li>

                <li>
                  <p>(+51) 759-4451</p>
                  <div>
                    <lord-icon
                      src="https://cdn.lordicon.com/iguuenru.json"
                      // trigger="loop"
                      colors="primary:#929292,secondary:#929292"
                    ></lord-icon>
                  </div>
                </li>

                <li>
                  <p>info@renian.org</p>
                  <div>
                    <lord-icon
                      src="https://cdn.lordicon.com/egpbfgcp.json"
                      // trigger="loop"
                      colors="primary:#929292,secondary:#929292"
                    ></lord-icon>
                  </div>
                </li>

                <li>
                  <p>Lun-Vie 09:00 am | 6:00 pm</p>
                  <div>
                    <lord-icon
                      src="https://cdn.lordicon.com/uutnmngi.json"
                      // trigger="loop"
                      colors="primary:#929292,secondary:#929292"
                      style={{ width: "22px", height: "22px" }}
                    ></lord-icon>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </MainContainer>
      </footer>
      <Copyright />
    </>
  );
};

export const Controls = () => {
  const { openModal, setOpenModal } = useModal();

  return (
    <>
      {openModal && (
        <DefaultModal setOpenModal={setOpenModal}>
          <h1>
            Proximamente en <span>Renian</span>
          </h1>
        </DefaultModal>
      )}
      <section className={classes.controls}>
        <MainContainer>
          <div className={classes.controls__container}>
            <div className={classes.controls__links}>
              <a onClick={() => setOpenModal(true)}>FAQs</a>
              <a>Soy Veterinaria</a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                // offset={-80}
              >
                Soy una Municipalidad
              </Link>
            </div>
            <div className={classes.controls__social}>
              <h5>Siguenos en:</h5>
              <Bounce right cascade>
                <div>
                  <a
                    href="https://www.facebook.com/RenianPeru/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/svg/networks/fb-icon.svg"
                      width={28}
                      height={28}
                      alt="fb-icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/renian_peru/?hl=es-la"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/svg/networks/inst-icon.svg"
                      width={28}
                      height={28}
                      alt="inst-icon"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@renian.peru?lang=en"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      src="/svg/networks/tik-icon.svg"
                      width={28}
                      height={28}
                      alt="tiktok-icon"
                    />
                  </a>
                </div>
              </Bounce>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};

export const Copyright = () => {
  return (
    <section className={classes.copyright}>
      <MainContainer>
        <div className={classes.copyright__container}>
          <p>Copyright &copy;2022 | Todos los derechos reservados</p>
          <p>Diseñado por Qolkrex Foundation</p>
        </div>
      </MainContainer>
    </section>
  );
};
