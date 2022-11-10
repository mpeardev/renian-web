import Image from "next/image";
import { Zoom } from "react-reveal";
import { DefaultModal, ExpandPanel } from "../../";
import { useModal } from "../../../hook/useModal";
import classes from "./faq.module.scss";

export const Faq = () => {
  const { openDefaultModal, setOpenDefaultModal } = useModal();

  return (
    <>
      {openDefaultModal && (
        <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
          <h1>
            Próximamente en <span>Renian</span>
          </h1>
        </DefaultModal>
      )}

      <section className={classes.faq}>
        <div className={classes.faq__container}>
          <div className={classes.faq__graphic}>
            <Zoom bottom>
              <div>
                <div>
                  <Image
                    src="/img/faq/graphic.png"
                    layout="responsive"
                    width={120}
                    height={90}
                  />
                </div>
              </div>
            </Zoom>
          </div>

          <div className={classes.faq__content}>
            <h1>Preguntas Frecuentes</h1>
            <div className={classes.faq__contentQuestions}>
              <ExpandPanel
                question={"¿Para que sirve el registro de mi mascota?"}
                response={
                  "El registro en RENIAN sirve para reconocer adecuadamente a un animal y los datos de contacto su propietario a cargo ante una gran población animal existente. Por ello, no solo es necesario implantar el microchip de identificación en tu mascota, sino también registrarla en un sistema seguro y formal, como lo es RENIAN."
                }
              />
              <ExpandPanel
                question={"¿Qué es el microchip de mascotas?"}
                response={
                  "El microchip es un dispositivo del tamaño de un grano de arroz que permite la identificación de tu mascota, contiene 15 dígitos únicos en el mundo y es útil para toda su vida. Es importante recordar que el microchip de identificación NO ES UN GPS."
                }
              />
              <ExpandPanel
                question={"¿De qué está fabricado el microchip?"}
                response={
                  "El microchip está fabricado de un material bio - compatible que no causará ningún tipo de daño a la salud del animal."
                }
              />
              <ExpandPanel
                question={"¿Qué información contiene el microchip?"}
                response={
                  "El microchip contiene en su interior un número único de 15 dígitos único a nivel mundial, lo cual lo hace único en el mundo."
                }
              />
              <ExpandPanel
                question={"¿Cómo funciona el microchip de identificación?"}
                response={
                  "Para conocer el número de identificación del animal, es necesario un lector especial que detecta y accede a la información contenida dentro del dispositivo, es decir, el número de 15 dígitos."
                }
              />
              <ExpandPanel
                question={"¿Puedo colocarle más de un microchip a mi mascota?"}
                response={
                  "El microchip de identificación debe aplicarse en una sola ocasión, no es necesario cambiarlo de forma periódica y está en contra de la ley querer identificarlo más de una vez."
                }
              />
              <ExpandPanel
                question={
                  "¿Cuánto tiempo dura colocar el microchip a una mascota?"
                }
                response={
                  "El procedimiento es bastante rápido y sencillo, dura menos de 1 minuto, parecido a la aplicación de una vacuna."
                }
              />
              <ExpandPanel
                question={
                  "¿Cómo se relaciona el número de microchip con la información del propietario?"
                }
                response={
                  "Para relacionar el número de microchip con la información del propietario y la mascota, contamos con un sistema especial “SRM”. Después de aplicar el microchip de identificación en la mascota, ingresamos los datos en nuestro “SRM” tales como nombre, raza, registro de vacunas, si está o no estéril; además el nombre del dueño, domicilio, teléfonos correos etc."
                }
              />
              <ExpandPanel
                question={
                  "¿Qué pasa si no ingresamos los datos de la mascota y dueño en el sistema?"
                }
                response={
                  "Si no se registran los datos de la mascota y dueño en el sistema, el microchip no habrá cumplido su función de identificación de manera completa."
                }
              />
              <ExpandPanel
                question={"¿Dónde y cómo se coloca el microchip en la mascota?"}
                response={
                  "La implantación del microchip es un procedimiento rápido y sencillo, parecido a la aplicación de una vacuna. El microchip de identificación se coloca en la zona T o lomo de la mascota."
                }
              />
              <ExpandPanel
                question={
                  "¿Todas las veterinarias del Perú cuentan con el sistema de registro?"
                }
              >
                Por lo pronto, no todos lo tienen. Sin embargo, trabajamos día a
                día para expandir nuestro proyecto a todas las veterinarias del
                Perú; ya contamos con veterinarias afiliadas que puedes
                consultar dando{" "}
                <a onClick={() => setOpenDefaultModal(true)}>click aquí.</a>
              </ExpandPanel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
