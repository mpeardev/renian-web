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
  const { openModal, setOpenModal } = useModal();

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    let ubic = window.pageYOffset;
    window.onscroll = function () {
      const onUbic = window.pageYOffset;
      const test = document.getElementById("navbar");
      if (test) {
        if (ubic < onUbic && onUbic > 100) {
          test.style.position = "fixed";
          test.style.top = "0";
          test.style.background = "rgba(255, 255, 255, 0.7)";
          test.style.backdropFilter = "blur(0.8rem)";
        } else if (ubic > onUbic && onUbic < 100) {
          test.style.position = "absolute";
          test.style.top = "auto";
          test.style.backdropFilter = "blur(0)";
          test.style.background = "#ffffff";
        }
      }
      ubic = onUbic;
    };
  }, []);

  return (
    <>
      {openModal && (
        <DefaultModal setOpenModal={setOpenModal}>
          <h1>
            Proximamente en <span>Renian</span>
          </h1>
        </DefaultModal>
      )}

      <ContactHead />
      <MobileLinksFrame
        show={show}
        setShow={setShow}
        isOpen={isOpen}
        setOpen={setOpen}
        setOpenModal={setOpenModal}
      />

      <header className={classes.header} id="navbar">
        <MainContainer>
          <div className={classes.header__container}>
            <div onClick={toggleHome}>
              <Image
                src="/svg/renian-logo.svg"
                width={160}
                height={50}
                layout="responsive"
                alt="renian-icon"
                priority
              />
            </div>
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
                    nuestra mision
                  </Link>
                  <a onClick={() => setOpenModal(true)}>intranet</a>
                  <a onClick={() => setOpenModal(true)}>preguntas frecuentes</a>
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
