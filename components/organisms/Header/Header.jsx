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
                alt="fb-icon"
              />
            </a>
          </Link>

          <nav className={classes.header__links}>
            <div>
              <a>Nosotros</a>
              <a>Microship</a>
              <a>Mision</a>
              <Link href="/questions">Preguntas Frecuntes</Link>
              <Link href="/contact">Contacto</Link>
            </div>
          </nav>

          <div className={classes.header__login}>
            <Link href="/login">
              <button>Ingresar</button>
            </Link>
          </div>
        </main>
      </header>
    </>
  );
};
