import classes from "./modal-button.module.scss";

export const ModalButton = ({
  type = "button",
  name = "default",
  background = "#bf002a",
  disabled = false,
  onClick = () => false,
}) => {
  return (
    <button
      className={classes.button}
      type={type}
      style={{
        background: disabled ? "#bf002a80" : background,
        color: disabled ? "#e1e1e1" : "#fff",
        boxShadow: disabled ? "none" : "",
        cursor: disabled ? "auto" : "pointer",
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
