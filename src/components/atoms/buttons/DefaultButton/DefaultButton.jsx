import classes from "./default-button.module.scss";

export const DefaultButton = ({
  type = "button",
  name = "default",
  background = "#bf0303",
  onClick = () => false,
}) => {
  return (
    <button
      className={classes.button}
      type={type}
      style={{ background }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
