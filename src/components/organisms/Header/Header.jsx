import Image from "next/image";
import { useEffect, useState } from "react";
import { ContactHead } from "./components/ContactHead/ContactHead";
import classes from "./header.module.scss";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { MobileLinksFrame, MainContainer } from "../../";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

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
          test.style.background = "rgba(196, 150, 150, 0.7)";
          test.style.backdropFilter = "blur(0.8rem)";
        } else if (ubic > onUbic && onUbic < 100) {
          test.style.position = "absolute";
          test.style.top = "auto";
          test.style.background = "transparent";
        }
      }
      ubic = onUbic;
    };
  }, []);

  return (
    <>
      <ContactHead />
      <MobileLinksFrame
        show={show}
        setShow={setShow}
        isOpen={isOpen}
        setOpen={setOpen}
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
                  <a
                    href="http://registro.firulaixcoin.finance/"
                    target="_blank"
                    rel="noreferrer noShower"
                  >
                    registro mundial
                  </a>
                  <Link
                    to="news"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    // offset={-80}
                  >
                    noticias
                  </Link>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    // offset={-80}
                  >
                    nosotros
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    contacto
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
