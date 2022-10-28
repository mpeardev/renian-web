import { useRouter } from "next/router";
import { Link } from "react-scroll";
import classes from "./mobile-links-frame.module.scss";

export const MobileLinksFrame = ({
  show,
  setShow,
  isOpen,
  setOpen,
  setOpenDefaultModal,
}) => {
  const router = useRouter();

  const linkClicked = () => {
    setShow(!show);
    setOpen(!isOpen);
  };

  return (
    <div
      className={classes.mobile}
      style={show ? { top: "0" } : { top: "-200%" }}
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
            <a
              onClick={() => {
                router.push("/faq");
                linkClicked();
              }}
            >
              preguntas frecuentes
            </a>
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
