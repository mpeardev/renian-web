import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactHead } from "./components/ContactHead/ContactHead";
import classes from "./header.module.scss";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { MobileLinksFrame, MainContainer, DefaultModal } from "../../";
import { useModal } from "../../../hook/useModal";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { openDefaultModal, setOpenDefaultModal } = useModal();
  const [initialBackground, setInitialBackground] = useState();
  // const [path, setPath] = useState();

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (router.asPath == "/") {
      setInitialBackground({ background: "white" });
    } else {
      setInitialBackground({ background: "transparent" });
    }
  }, [router]);

  useEffect;

  useEffect(() => {
    let ubic = window.pageYOffset;
    const header = document.getElementById("navbar");
    if (ubic == 0) {
      header.style.position = "absolute";
      header.style.top = "auto";
      header.style.backdropFilter = "blur(0)";
    }
    window.onscroll = function () {
      const onUbic = window.pageYOffset;
      if (header) {
        if (ubic < onUbic && onUbic > 115) {
          header.style.position = "fixed";
          header.style.top = "0";
          header.style.background = "rgba(255, 255, 255, 0.7)";
          header.style.backdropFilter = "blur(0.8rem)";
        } else if (ubic > onUbic && onUbic < 115) {
          header.style.position = "absolute";
          header.style.top = "auto";
          header.style.backdropFilter = "blur(0)";
          if (router.asPath == "/faq") {
            header.style.backdropFilter = "blur(0.8rem)";
          }
          if (router.asPath == "/") {
            header.style.background = "#fff";
          } else {
            header.style.background = "transparent";
          }
        }
      }
      ubic = onUbic;
    };
  }, [router]);

  return (
    <>
      {openDefaultModal && (
        <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
          <h1>
            Próximamente en <span>Renian</span>
          </h1>
        </DefaultModal>
      )}

      <ContactHead />
      <MobileLinksFrame
        show={show}
        setShow={setShow}
        isOpen={isOpen}
        setOpen={setOpen}
        setOpenDefaultModal={setOpenDefaultModal}
      />

      <header className={classes.header} id="navbar" style={initialBackground}>
        <MainContainer>
          <div className={classes.header__container}>
            <a href={router.asPath == "/" ? null : "/"}>
              <div
                className={classes.header__containerLogo}
                onClick={router.asPath == "/" ? toggleHome : null}
              >
                <Image
                  src="/svg/renian-logo.svg"
                  width={160}
                  height={50}
                  layout="responsive"
                  alt="renian-icon"
                  priority
                />
              </div>
            </a>
            {router.asPath == "/" && (
              <div
                className={classes.header__burguer}
                onClick={() => setShow(!show)}
              >
                <div>
                  <Hamburger
                    direction="right"
                    color="#bf0303"
                    size={20}
                    toggled={isOpen}
                    toggle={setOpen}
                  />
                </div>
              </div>
            )}

            {router.asPath == "/" && (
              <nav className={classes.header__links}>
                <div>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    // offset={-80}
                  >
                    ¿qué es renian?
                  </Link>
                  <Link
                    to="microchip"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    el microchip
                  </Link>
                  <Link
                    to="mission"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    nuestra misión
                  </Link>
                  <a onClick={() => router.push("/faq")}>
                    preguntas frecuentes
                  </a>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    contáctanos
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </MainContainer>
      </header>
    </>
  );
};
