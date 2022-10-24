import classes from "./cards-button.module.scss";

export const CardsButton = ({
  type = "button",
  name = "default",
  background = "white",
}) => {
  return (
    <button className={classes.button} type={type} style={{ background }}>
      {name}
    </button>
  );
};
