import Lottie from "react-lottie";
import classes from "./contact.module.scss";
import map from "../../../../public/json/map.json";

const Background = ({ children }) => {
  return (
    <div className={classes.background}>
      <div className={classes.backgroundDecorate}></div>

      <div className={classes.background__container}>{children}</div>
    </div>
  );
};

export const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Background>
      <section className={classes.contact} id="contact">
        <div className={classes.contact__form}>
          <h4>Contactanos</h4>
          <h1>Renian center</h1>
        </div>

        <div className={classes.contact__image}>
          <Lottie
            isClickToPauseDisabled={true}
            style={{
              // position: "absolute",
              width: "100%",
              minHeight: "25rem",
              // opacity: ".4",
              filter: "brightness(.5)",
              // filter: "invert(5%)",
            }}
            options={{
              animationData: map,
              defaultOptions,
            }}
          />
        </div>
      </section>
    </Background>
  );
};
