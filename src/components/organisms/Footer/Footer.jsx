import React from "react";
import Image from "next/image";
import classes from "./footer.module.scss";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { MainContainer, DefaultModal } from "../../";
import { useModal } from "../../../hook/useModal";
import { Bounce } from "react-reveal";
import { useRouter } from "next/router";

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
                Somos una fundación procupada por la protección y defensa del
                bienestar animal. Identificamos, registramos y contribuimos a la
                localización de mascotas en el territorio Peruano.
              </p>
            </div>

            <div className={classes.footer__contact}>
              <h3>Contáctanos</h3>
              <ul>
                <li>
                  <p>Av. Mariategui 1030, Jesús María</p>
                  <div>
                    <lord-icon
                      src="https://cdn.lordicon.com/gwklwoti.json"
                      // trigger="loop"
                      colors="primary:#929292,secondary:#929292"
                    ></lord-icon>
                  </div>
                </li>

                <li>
                  <p>(+51) 923-683-933</p>
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
                  <p>Lun - Vie: 9:00am a 6:00pm | Sáb: 9:00am a 3:00pm</p>
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
  const { openDefaultModal, setOpenDefaultModal } = useModal();
  const router = useRouter();

  return (
    <>
      {openDefaultModal && (
        <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
          <h1>
            Próximamente en <span>Renian</span>
          </h1>
        </DefaultModal>
      )}
      <section className={classes.controls}>
        <MainContainer>
          <div className={classes.controls__container}>
            <div className={classes.controls__links}>
              <a onClick={() => router.push("/faq")}>FAQs</a>
              <a
                href="https://bit.ly/Informacion_RENIAN"
                target="_blank"
                rel="noreferrer noopener"
              >
                Soy Veterinaria
              </a>
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
              <h5>Síguenos en:</h5>
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
