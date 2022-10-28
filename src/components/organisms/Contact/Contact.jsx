import Lottie from "react-lottie";
import classes from "./contact.module.scss";
import map from "../../../../public/json/map.json";
import Bounce from "react-reveal/Bounce";
import { DefaultModal, MainContainer, DefaultButton } from "../../";
import { useModal } from "../../../hook/useModal";
import { useForm } from "react-hook-form";
import { useSendForm } from "../../../hook/useSendForm";

export const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { openDefaultModal, setOpenDefaultModal } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const regexNum = /^[0-9]+/;
  const regexText = /^[a-zA-Z0-9 ]+$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const { dataSubmit } = useSendForm();

  const onSubmit = (data) => {
    dataSubmit(data, setOpenDefaultModal, reset);
  };

  return (
    <>
      {openDefaultModal && (
        <DefaultModal setOpenDefaultModal={setOpenDefaultModal}>
          <h1>Correo enviado exitósamente!</h1>
        </DefaultModal>
      )}
      <section className={classes.contact} id="contact">
        <MainContainer>
          <div className={classes.contact__container}>
            <div className={classes.contact__form}>
              <h4>Contáctanos</h4>
              <h1>Renian center</h1>

              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <span>Nombre:</span>
                    <input
                      type="text"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Campo requerido",
                        },
                        minLength: { value: 3, message: "Nombre muy corto" },
                        maxLength: { value: 20, message: "Nombre muy largo" },
                        pattern: {
                          value: regexText,
                          message: "Formato incorrecto",
                        },
                      })}
                    />
                    {errors.name && <small>{errors.name.message}</small>}
                  </div>

                  <div>
                    <span>Email:</span>
                    <input
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Campo requerido",
                        },
                        pattern: {
                          value: regexEmail,
                          message: "Formato incorrecto",
                        },
                      })}
                    />
                    {errors.email && <small>{errors.email.message}</small>}
                  </div>

                  <div>
                    <span>Telefono:</span>
                    <input
                      type="number"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Campo requerido",
                        },
                        minLength: { value: 9, message: "Numero invalido" },
                        maxLength: { value: 9, message: "Numero invalido" },
                        pattern: {
                          value: regexNum,
                          message: "Formato incorrecto",
                        },
                      })}
                    />
                    {errors.phone && <small>{errors.phone.message}</small>}
                  </div>

                  <div className={classes.contact__formTextarea}>
                    <span>Mensaje:</span>
                    <textarea
                      cols="80"
                      rows="10"
                      {...register("detail", {
                        required: {
                          value: true,
                          message: "Campo requerido",
                        },
                      })}
                    />
                    {errors.detail && <small>{errors.detail.message}</small>}
                  </div>

                  <div className={classes.contact__formButton}>
                    <DefaultButton type={"submit"} name={"enviar mensaje"} />
                  </div>
                </form>
              </div>
            </div>

            <div className={classes.contact__image}>
              <div>
                <Bounce right>
                  <Lottie
                    isClickToPauseDisabled={true}
                    style={{
                      width: "100%",
                      minHeight: "25rem",
                      // filter: "brightness(.5)",
                    }}
                    options={{
                      animationData: map,
                      defaultOptions,
                    }}
                  />
                </Bounce>
              </div>
            </div>
          </div>
        </MainContainer>
      </section>
    </>
  );
};
