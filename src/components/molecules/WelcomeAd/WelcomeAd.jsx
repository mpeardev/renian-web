import { MainContainer } from "../../";
import classes from "./welcome-ad.module.scss";

export const WelcomeAd = () => {
  return (
    <div className={classes.welcome}>
      <MainContainer>
        <div className={classes.welcome__slider}>
          <ul>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
            <li>RENIAN les da la bienvenida</li>
          </ul>
        </div>
      </MainContainer>
    </div>
  );
};
