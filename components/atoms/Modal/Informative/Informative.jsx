import classes from "./informative.module.css";

export const Informative = ({
  children,
  w = 0,
  transparent = false,
  handleClose,
}) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalDialog} onClick={handleClose}></div>
      <div className={classes.flex}>
        <div
          className={classes.content}
          style={{
            background: `${transparent ? "transparent" : "#fff"}`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
