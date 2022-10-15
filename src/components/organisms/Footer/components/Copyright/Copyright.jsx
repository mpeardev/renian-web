import React from "react";
import { MainContainer } from "../../../../";
import classes from "./copyright.module.scss";

export const Copyright = () => {
  return (
    <div className={classes.copyright}>
      <MainContainer>
        <div className={classes.copyright__container}>
          <p>Copyright &copy;2022 | Todos los derechos reservados</p>
          <p>Diseñado por Qolkrex Foundation</p>
        </div>
      </MainContainer>
    </div>
  );
};
