import classes from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.loader__background}>
        <div className={classes.loader__container}>
          <div className={classes.loader__content}>
            <lord-icon
              src="https://cdn.lordicon.com/ridbdkcb.json"
              trigger="loop"
              colors="primary:#000000,secondary:#dd0000"
              style={{ width: "10rem", height: "10rem" }}
            ></lord-icon>
            <h3>Cargando...</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
