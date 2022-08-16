import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { ContactHead } from "./components/ContactHead/ContactHead";
import classes from "./header.module.scss";

export const Header = () => {
  const router = useRouter();

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
              <a>Nosotros</a>
              <a>Microship</a>
              <a>Mision</a>
              <Link href="/news">Noticias</Link>
              <Link href="/questions">Preguntas Frecuntes</Link>
              <Link href="/contact">Contacto</Link>
            </div>
          </nav>

          <div className={classes.header__login}>
            {/* <Link href="/login"> */}
            <button onClick={() => router.push("/login")}>Ingresar</button>
            {/* </Link> */}
          </div>
        </main>
      </header>
    </>
  );
};
