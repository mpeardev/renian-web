import Image from "next/image";
import classes from "./advantage.module.scss";
import Bounce from "react-reveal/Bounce";
import { MainContainer } from "../..";

export const Advantage = () => {
  return (
    <section className={classes.advantage} id="about">
      <MainContainer>
        <div className={classes.advantage__container}>
          <div className={classes.advantage__image}>
            <Bounce left>
              <div>
                <Image
                  src="/img/renian-about.jpg"
                  layout="responsive"
                  width={120}
                  height={80}
                  href="image"
                />
              </div>
            </Bounce>
          </div>

          <div className={classes.advantage__text}>
            <h2>Ventajas de Identificar a tu mascota</h2>
            <ul>
              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/euyxudqt.json"
                  trigger="loop"
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "45px", height: "45px" }}
                ></lord-icon>
                <p>Serás el propietario legal de la mascota</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/euyxudqt.json"
                  trigger="loop"
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "45px", height: "45px" }}
                ></lord-icon>
                <p>Tendrá una identidad única de por vida</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/euyxudqt.json"
                  trigger="loop"
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "45px", height: "45px" }}
                ></lord-icon>
                <p>Se convertirá en un ciudadano formal</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/euyxudqt.json"
                  trigger="loop"
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "45px", height: "45px" }}
                ></lord-icon>
                <p>Mayor facilidad de encontrarlo si se extravía</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/euyxudqt.json"
                  trigger="loop"
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "45px", height: "45px" }}
                ></lord-icon>
                <p>Información sanitaria en un sólo lugar</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/euyxudqt.json"
                  trigger="loop"
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "45px", height: "45px" }}
                ></lord-icon>
                <p>Cumples con la ley de tenencia responsable</p>
              </li>

              <li>
                <lord-icon
                  src="https://cdn.lordicon.com/euyxudqt.json"
                  trigger="loop"
                  colors="primary:#bf002a,secondary:#bf002a"
                  style={{ width: "45px", height: "45px" }}
                ></lord-icon>
                <p>Podrá viajar al extranjero</p>
              </li>
            </ul>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
