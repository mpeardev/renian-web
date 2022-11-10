import classes from "./cards-button.module.scss";

export const CardsButton = ({
  type = "button",
  name = "default",
  background = "white",
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
