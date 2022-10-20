import classes from "./default-button.module.scss";

export const DefaultButton = ({
  type = "button",
  name = "default",
  background = "#bf0303",
}) => {
  return (
    <button className={classes.button} type={type} style={{ background }}>
      {name}
    </button>
  );
};
