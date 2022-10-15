import classes from "./main-container.module.scss";

export const MainContainer = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
