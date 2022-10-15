import Image from "next/image";
import React from "react";
import Lottie from "react-lottie";
import circuits from "../../../../public/json/circuits.json";
import { MainContainer } from "../../";
import classes from "./coming-soon.module.scss";

export const ComingSoon = () => {
  return (
    <section className={classes.coming}>
      <Decorate />
      <MainContainer>
        <div className={classes.coming__container}>
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
              <span>&quot;Moonriver&quot;.</span>
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
          </div>
          <Banner />
        </div>
      </MainContainer>
    </section>
  );
};

const Decorate = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={classes.coming__decorate}>
      <Lottie
        isClickToPauseDisabled={true}
        style={{
          position: "absolute",
          width: "100%",
          opacity: ".2",
        }}
        options={{
          animationData: circuits,
          defaultOptions,
        }}
      />
    </div>
  );
};

const Banner = () => {
  return (
    <div className={classes.coming__banner}>
      <div className={classes.coming__bannerBg}>
        <div>
          <Image src="/img/alert-frame.png" layout="fill" />
        </div>
      </div>
      <div className={classes.coming__bannerContent}>
        <p>
          Estaremos unidos con el <span>World Animal Registry</span> con
          tecnologia blockchain y con la plataforma Firulaix.
        </p>
      </div>

      <div className={classes.coming__bannerDog}>
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
