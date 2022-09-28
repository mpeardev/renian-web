import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { ContactHead } from "./components/ContactHead/ContactHead";
import classes from "./header.module.scss";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

export const Header = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <ContactHead />
      <header className={classes.header}>
        <main className={classes.header__container}>
          <div onClick={toggleHome}>
            <Image
              src="/svg/renian-logo.svg"
              width={160}
              height={50}
              alt="renian-icon"
            />
          </div>

          <nav className={classes.header__links}>
            <div>
              <a href="http://registro.firulaixcoin.finance/" target="_blank">
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

          {/* <div className={classes.header__login}>
            <button>Ingresar</button>
          </div> */}
        </main>
      </header>
    </>
  );
};
