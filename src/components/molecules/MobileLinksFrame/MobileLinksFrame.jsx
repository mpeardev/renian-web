import { Link } from "react-scroll";
import classes from "./mobile-links-frame.module.scss";

export const MobileLinksFrame = ({ show, setShow, isOpen, setOpen }) => {
  const linkClicked = () => {
    setShow(!show);
    setOpen(!isOpen);
  };

  return (
    <div
      className={classes.mobile}
      style={show ? { top: "0" } : { top: "-100%" }}
    >
      <section>
        <div>
          <p>
            <a
              onClick={linkClicked}
              href="http://registro.firulaixcoin.finance/"
              target="_blank"
              rel="noreferrer noShower"
            >
              Registro mundial
            </a>
          </p>
        </div>
        <div>
          <p>
            <Link
              onClick={linkClicked}
              to="news"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              // offset={-80}
            >
              noticias
            </Link>
          </p>
        </div>
        <div>
          <p>
            <Link
              onClick={linkClicked}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              nosotros
            </Link>
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
              contacto
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};
