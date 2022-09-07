import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContactHead } from "./components/ContactHead/ContactHead";
import classes from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <ContactHead />
      <header className={classes.header}>
        <main className={classes.header__container}>
          <Link href="/">
            <a>
              <Image
                src="/svg/renian-logo.svg"
                width={160}
                height={50}
                alt="renian-icon"
              />
            </a>
          </Link>

          <nav className={classes.header__links}>
            <div>
              <a>nosotros</a>
              <a>microship</a>
              <a>mision</a>
              <a>noticias</a>
              <a>preguntas frecuentes</a>
              <a>contacto</a>
            </div>
          </nav>

          <div className={classes.header__login}>
            <button>Ingresar</button>
          </div>
        </main>
      </header>
    </>
  );
};
