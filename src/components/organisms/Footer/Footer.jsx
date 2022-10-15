import React from "react";
import { Copyright } from "./components/Copyright/Copyright";
import Image from "next/image";
import classes from "./footer.module.scss";
import { animateScroll as scroll } from "react-scroll";
import { MainContainer } from "../../";

export const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
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
