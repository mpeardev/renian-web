import classes from "./modal-checkbox.module.scss";

export const ModalCheckbox = ({ onClick = () => false, show = false }) => {
  return (
    <div className={classes.checkbox}>
      <div onClick={onClick}>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/lbsajkny.json"
            trigger="click"
            colors="primary:#bf002a,secondary:#bf002a"
            style={{
              width: "3rem",
              height: "3rem",
              transition: ".3s",
              opacity: show ? "1" : "0",
            }}
          ></lord-icon>
        </div>
      </div>
    </div>
  );
};
