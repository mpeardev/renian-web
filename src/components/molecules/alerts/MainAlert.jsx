import classes from "./main-alert.module.scss";

export const MainAlert = ({ setAlertActive }) => {
  return (
    <section className={classes.alert}>
      <div>
        <button onClick={() => setAlertActive(false)}></button>
      </div>
    </section>
  );
};
