import { Link } from "react-scroll";
import classes from "./mobile-links-frame.module.scss";

export const MobileLinksFrame = ({
  show,
  setShow,
  isOpen,
  setOpen,
  setOpenModal,
}) => {
  const linkClicked = () => {
    setShow(!show);
    setOpen(!isOpen);
  };

  const linkComing = () => {
    linkClicked();
    setOpenModal(true);
  };

  return (
    <div
      className={classes.mobile}
      style={show ? { top: "0" } : { top: "-100%" }}
    >
      <section>
        <div>
          <p>
            <Link
              onClick={linkClicked}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              // offset={-80}
            >
              ¿qué es renian?
            </Link>
          </p>
        </div>
        <div>
          <p>
            <Link
              onClick={linkClicked}
              to="microchip"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              el microchip
            </Link>
          </p>
        </div>
        <div>
          <p>
            <Link
              onClick={linkClicked}
              to="mission"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              nuestra mision
            </Link>
          </p>
        </div>
        <div>
          <p>
            <a onClick={linkComing}>intranet</a>
          </p>
        </div>
        <div>
          <p>
            <a onClick={linkComing}>preguntas frecuentes</a>
          </p>
        </div>
        <div>
          <p>
            <Link
              onClick={linkClicked}
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              contáctanos
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};
