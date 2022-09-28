import Image from "next/image";
import React from "react";
import Lottie from "react-lottie";
import circuits from "../../../../public/json/circuits.json";
import classes from "./coming-soon.module.scss";

const Background = ({ children }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <main className={classes.background}>
      <Lottie
        isClickToPauseDisabled={true}
        style={{
          position: "absolute",
          width: "100%",
          // height: "88%",
          opacity: ".2",
          // filter: "brightness(.8)",
        }}
        options={{
          animationData: circuits,
          defaultOptions,
        }}
      />
      <div className={classes.background__container}>{children}</div>
    </main>
  );
};

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__bg}>
        <div>
          <Image src="/img/alert-frame.png" layout="fill" />
        </div>
      </div>
      <div className={classes.banner__content}>
        <p>
          Estaremos unidos con el <span>World Animal Registry</span> con
          tecnologia blockchain y con la plataforma Firulaix.
        </p>
      </div>

      <div className={classes.banner__dog}>
        <Image
          src="/img/dog-banner.png"
          layout="responsive"
          width={130}
          height={200}
          alt="image"
        />
      </div>
    </div>
  );
};

export const ComingSoon = () => {
  return (
    <Background>
      <section className={classes.coming}>
        <div className={classes.coming__logo}>
          <Image
            src="/svg/renian-logo.svg"
            layout="responsive"
            width={80}
            height={30}
            alt="image"
          />
        </div>

        <div className={classes.coming__text}>
          <h3>
            Estamos reconstruyendo nuestra web y conectandonos a la red de{" "}
            <span>"Moonriver".</span>
          </h3>

          <div className={classes.coming__textImg}>
            <div>
              <Image
                src="/img/blockchain-icon.png"
                layout="responsive"
                width={50}
                height={50}
              />
            </div>
          </div>

          <h3>
            Ahora estaremos en <span>renian.pe</span>
          </h3>

          {/* <h3>
            Nos mudaremos a la <span>WEB3.</span>
          </h3> */}
        </div>

        <Banner />
      </section>
    </Background>
  );
};
