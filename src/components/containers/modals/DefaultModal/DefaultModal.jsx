import classes from "./default-modal.module.scss";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export const DefaultModal = ({ children, setOpenModal, width = "30rem" }) => {
  return (
    <div className={classes.modal}>
      <div
        className={classes.modal__background}
        onClick={() => setOpenModal(false)}
      >
        <div className={classes.modal__container}>
          <Fade>
            <div className={classes.modal__content} style={{ width }}>
              <Decorate />
              {children}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

const Decorate = () => {
  return (
    <div className={classes.modal__contentDecorate}>
      <Image
        src="/img/renian-img.png"
        layout="responsive"
        width={50}
        height={58}
      />
    </div>
  );
};
