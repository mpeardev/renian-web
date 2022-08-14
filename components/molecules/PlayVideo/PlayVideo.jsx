import React, { useState } from "react";
import classes from "./play-video.module.scss";

import ReactPlayer from "react-player/lazy";

export const PlayVideo = () => {
  const [state, setState] = useState(false);
  const [stylesButton, setStylesButton] = useState({
    background: "auto",
    color: "auto",
    border: "auto",
  });

  const openVideo = () => {
    setState(true);
    setStylesButton(null);
  };

  return (
    <section className={classes.play}>
      <div className={classes.play__container}>
        <div className={classes.play__text}>
          <p>
            <span>RENIAN</span> permite identificar, registrar y realizar un
            seguimiento a los animales de compañía y no de compañía que habitan
            en cualquier ciudad del Perú, esto mediante el{" "}
            <span>
              implante de un microchip de identificación animal de standard
              mundial.
            </span>
          </p>
        </div>
        <div className={classes.play__video}>
          {stylesButton && (
            <div
              onClick={openVideo}
              style={stylesButton}
              className={classes.play__videoPreview}
            >
              <lord-icon
                src="https://cdn.lordicon.com/ujphzprf.json"
                trigger="hover"
                colors="primary:#000000,secondary:#dd0000"
                style={{ width: "75px", height: "75px" }}
              ></lord-icon>
            </div>
          )}
          {state === true && (
            <ReactPlayer url="https://www.youtube.com/watch?v=W-yP0CYFSaU&feature=emb_title" />
          )}
        </div>
      </div>
    </section>
  );
};
