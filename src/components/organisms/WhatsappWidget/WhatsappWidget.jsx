import classes from "./whatsapp-widget.module.scss";
import { WhatsappIcon } from "../../atoms/icons";
import Image from "next/image";
import { Fade } from "react-reveal";
import { useState } from "react";

export const WhatsappWidget = () => {
  const [openMsj, setOpenMsj] = useState();

  return (
    <>
      {openMsj && <Card openMsj={openMsj} setOpenMsj={setOpenMsj} />}
      <Button openMsj={openMsj} setOpenMsj={setOpenMsj} />
    </>
  );
};

const Button = ({ openMsj, setOpenMsj }) => {
  return (
    <div
      className={classes.button}
      onClick={() => setOpenMsj(!openMsj)}
      style={{
        background: openMsj ? "#f5f5f5" : "#27a900",
        fill: openMsj ? "#27a900" : "#fff",
      }}
    >
      <WhatsappIcon />
    </div>
  );
};

const Card = ({ setOpenMsj }) => {
  return (
    <Fade bottom>
      <div className={classes.card}>
        <div className={classes.card__header}>
          <div
            className={classes.card__headerClose}
            onClick={() => setOpenMsj(false)}
          >
            x
          </div>
          <div className={classes.card__headerImg}>
            <Image
              src="/img/default-user.png"
              layout="responsive"
              width={50}
              height={50}
              alt="default"
            />
          </div>
          <div className={classes.card__headerTitle}>
            <h3>marcela aspillaga</h3>
            <p>Asesora de Renian</p>
          </div>
        </div>

        <section className={classes.card__section}>
          <div>
            <h6>marcela aspillaga</h6>
            <p>
              ¡Hola!, soy Marcela Aspillaga asesora de RENIAN, ¿Cómo puedo
              ayudarte?
            </p>
          </div>
        </section>

        <div className={classes.card__footer}>
          <a
            href="https://bit.ly/3FnG8lJ"
            target="_blank"
            className={classes.card__footerButton}
            rel="noreferrer noopener"
            onClick={() => setOpenMsj(false)}
          >
            <div>
              <WhatsappIcon />
            </div>
            <p>empezar conversación</p>
          </a>
        </div>
      </div>
    </Fade>
  );
};
