import React from "react";
import classes from "./login-owner.module.scss";
import Image from "next/image";
import Link from "next/link";

export const LoginOwner = () => {
  return (
    <section className={classes.owner}>
      <div className={classes.owner__form}>
        <h3>Ingresar</h3>
        <h6>Bienvenido! Porfavor ingrese sus datos.</h6>

        <main>
          <div className={classes.owner__formBox}>
            <h5>Usuario</h5>
            <input type="text" placeholder="Usuario" />
            <small>Usuario incorrecto</small>
          </div>

          <div className={classes.owner__formBox}>
            <h5>Contraseña</h5>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className={classes.owner__formButton}>
            <button>Ingresa</button>
          </div>
        </main>

        <div>
          <p>
            *Solo para entidades registradoras{" "}
            <Link href="/cpanel">Registrar</Link>
          </p>
        </div>
      </div>

      <div className={classes.owner__decorate}>
        <div>
          <Image
            src="/svg/renian-logo.svg"
            layout="responsive"
            width={160}
            height={50}
            alt="fb-icon"
          />
        </div>
      </div>
    </section>
  );
};
