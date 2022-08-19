import React from "react";
import { Copyright } from "./components/Copyright/Copyright";
import Image from "next/image";
import classes from "./footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer__container}>
          <div className={classes.footer__description}>
            <div className={classes.footer__descriptionImage}>
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
                <lord-icon
                  src="https://cdn.lordicon.com/gwklwoti.json"
                  // trigger="loop"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                <p>Av. Mariategui 1030, Jesus Maria</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/iguuenru.json"
                  // trigger="loop"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                <p>(+51) 759-4451</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/egpbfgcp.json"
                  // trigger="loop"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                <p>info@renian.org</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/uutnmngi.json"
                  // trigger="loop"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                <p>Lun-Vie 09:00 am | 6:00 pm</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Copyright />
    </>
  );
};
