import classes from "./welcome-ad.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

export const WelcomeAd = () => {
  return (
    <div className={classes.welcome}>
      <div className={classes.welcome__container}>
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
      </div>
    </div>
  );
};
