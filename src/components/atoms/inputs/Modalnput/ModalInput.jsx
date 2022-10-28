import classes from "./modal-input.module.scss";

export const ModalInput = ({
  name = "",
  type = "text",
  placeholder = "",
  required = false,
}) => {
  return (
    <div className={classes.input}>
      <div>
        <h4>{name}</h4>
        {required && <span>(requerido)</span>}
      </div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
