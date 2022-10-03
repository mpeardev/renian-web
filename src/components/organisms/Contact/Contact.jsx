import Lottie from "react-lottie";
import classes from "./contact.module.scss";
import map from "../../../../public/json/map.json";
import Bounce from "react-reveal/Bounce";

const Background = ({ children }) => {
  return (
    <div className={classes.background}>
      <div className={classes.backgroundDecorate}></div>

      <div className={classes.background__container}>{children}</div>
    </div>
  );
};

export const Contact = ({ setAlertActive }) => {
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

          <div>
            <form>
              {/* <Bounce top cascade> */}
              <div>
                <span>Nombre:</span>
                <input type="text" readOnly />
              </div>

              <div>
                <span>Email:</span>
                <input type="email" readOnly />
              </div>

              <div>
                <span>Telefono:</span>
                <input type="number" readOnly />
              </div>

              <div className={classes.contact__formTextarea}>
                <span>Mensaje:</span>
                <div style={{ textAlign: "end", color: "red" }}>
                  {/* <p>Puedes dejar los datos en esta casilla para registrar a tu
                  mascota</p> */}
                </div>
                <textarea cols="80" rows="10" readOnly />
              </div>

              <div className={classes.contact__formButton}>
                <button type="button">Enviar Mensaje</button>
              </div>
              {/* </Bounce> */}
            </form>
          </div>
        </div>

        <div className={classes.contact__image}>
          <div>
            <Bounce right>
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
            </Bounce>
          </div>
        </div>
      </section>
    </Background>
  );
};
