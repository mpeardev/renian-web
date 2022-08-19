import React, { useState } from "react";
import classes from "./login-owner.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "../../atoms/ConnectButton/ConnectButton";
import { Sign } from "../../atoms/Sign/Sign";

export const LoginOwner = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={classes.owner}>
      <div className={classes.owner__form}>
        <h3>Ingresar</h3>
        <h6>Bienvenido! Porfavor ingrese sus datos.</h6>

        <main>
          <div className={classes.owner__formBox}>
            <h5>Usuario</h5>
            <input type="text" placeholder="Usuario" />
            {/* <small>Usuario incorrecto</small> */}
          </div>

          <div className={classes.owner__formBox}>
            <h5>Contraseña</h5>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className={classes.owner__formButton}>
            <button></button>
          </div>
        </main>

        <div>
          <p style={{ color: "black" }}>Inicia sesion con:</p>
          <ConnectButton setOpen={setOpen} open={open} />
        </div>
      </div>

      <div className={classes.owner__decorate}>
        <span>
          <Image
            src="/svg/war-logo.svg"
            layout="responsive"
            width={50}
            height={50}
            alt="fb-icon"
          />
        </span>
        <div>
          <p>
            *Solo para entidades registradoras{" "}
            {/* <Link href="/cpanel">Registrar</Link> */}
          </p>
          <Sign />
        </div>
        <span>
          <Image
            src="/img/firulaix-logo.png"
            layout="responsive"
            width={160}
            height={40}
            alt="firulaix-logo"
            priority
          />
        </span>
      </div>
    </section>
  );
};
