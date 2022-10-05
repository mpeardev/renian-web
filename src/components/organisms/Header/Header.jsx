import Image from "next/image";
import React, { useEffect } from "react";
import { ContactHead } from "./components/ContactHead/ContactHead";
import classes from "./header.module.scss";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";

export const Header = ({ show, setShow, isOpen, setOpen }) => {
  const router = useRouter();

  console.log(router.asPath);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const linkClicked = () => {
    setShow(!show);
    setOpen(!isOpen);
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
      <div
        className={classes.mobile}
        style={show ? { top: "0" } : { top: "-100%" }}
      >
        <section>
          <div>
            <p>
              <a
                onClick={linkClicked}
                href="http://registro.firulaixcoin.finance/"
                target="_blank"
                rel="noreferrer noShower"
              >
                Registro mundial
              </a>
            </p>
          </div>
          <div>
            <p>
              <Link
                onClick={linkClicked}
                to="news"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                // offset={-80}
              >
                noticias
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link
                onClick={linkClicked}
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                nosotros
              </Link>
            </p>
          </div>
          <div>
            <p>
              <Link
                onClick={linkClicked}
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                contacto
              </Link>
            </p>
          </div>
        </section>
      </div>

      <header className={classes.header} id="navbar">
        <main className={classes.header__container}>
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
        </main>
      </header>
    </>
  );
};
