import { Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Title from "./Title";

export const FormNewUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sendData, setSendData] = useState();

  const regexNum = /^[0-9]+/;
  const regexText = /^[a-zA-Z0-9 ]+$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const onSubmit = (data) => setSendData(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Identificacion</Title>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {/* PAIS */}
          <div className="mb-3">
            <label className="form-label">Pais</label>
            <select class="form-select" {...register("country")} disabled>
              <option value="peru" selected>
                Peru
              </option>
              <option value="colombia">Colombia</option>
              <option value="chile">Chile</option>
            </select>
          </div>

          {/* TIPO-PERSONA */}
          <div className="mb-3">
            <label className="form-label">Tipo Persona</label>
            <select
              class="form-select"
              {...register("personType", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            >
              <option value="natural" selected>
                Natural
              </option>
              <option value="juridic">Juridico</option>
            </select>
            {errors.personType && (
              <small className="text-danger">{errors.personType.message}</small>
            )}
          </div>

          {/* DOCUMENTO-IDENTIFICACION */}
          <div className="mb-3">
            <label className="form-label">Documento de Identificacion</label>
            <select
              class="form-select"
              {...register("document", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            >
              <option value="dni" selected>
                DNI
              </option>
              <option value="ruc">RUC</option>
            </select>

            {errors.document && (
              <small className="text-danger">{errors.document.message}</small>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Numero Documento</label>
            <input
              type="number"
              className="form-control"
              {...register("documentNumber", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: { value: 8, message: "Formato incorrecto" },
                maxLength: { value: 11, message: "Formato incorrecto" },
                pattern: {
                  value: regexNum,
                  message: "Formato incorrecto",
                },
              })}
            />

            {errors.documentNumber && (
              <small className="text-danger">
                {errors.documentNumber.message}
              </small>
            )}
          </div>

          {/* ADOPTER*/}
          <div className="mb-3">
            <label className="form-label">Rol</label>
            <select
              class="form-select"
              aria-label="Default select example"
              disabled
            >
              <option value="1" selected>
                Adoptante
              </option>
              <option value="2">Entidad</option>
            </select>
            {/* {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )} */}
          </div>
        </section>

        {/* ADDRESS*/}
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            placeholder="0x..."
            className="form-control"
            {...register("address", {
              required: {
                value: true,
                message: "Campo requerido",
              },
              minLength: { value: 42, message: "Formato incorrecto" },
              maxLength: { value: 42, message: "Formato incorrecto" },
              pattern: {
                value: regexText,
                message: "Formato incorrecto",
              },
            })}
          />
          {errors.address && (
            <small className="text-danger">{errors.address.message}</small>
          )}
        </div>

        <Divider sx={{ my: 5 }} />

        <Title>Datos Personales</Title>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {/* PRIMER-NOMBRE*/}
          <div className="mb-3">
            <label className="form-label">Primer Nombre</label>
            <input
              type="text"
              className="form-control"
              {...register("firstName", {
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
            {errors.firstName && (
              <small className="text-danger">{errors.firstName.message}</small>
            )}
          </div>

          {/* SEGUNDO-NOMBRE*/}
          <div className="mb-3">
            <label className="form-label">Segundo Nombre</label>
            <input
              type="text"
              className="form-control"
              {...register("secondName", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: { value: 3, message: "Apellido muy corto" },
                maxLength: { value: 20, message: "Apellido muy largo" },
                pattern: {
                  value: regexText,
                  message: "Formato incorrecto",
                },
              })}
            />
            {errors.secondName && (
              <small className="text-danger">{errors.secondName.message}</small>
            )}
          </div>

          {/* PRIMER-APELLIDO*/}
          <div className="mb-3">
            <label className="form-label">Primer Apellido</label>
            <input
              type="text"
              className="form-control"
              {...register("firstLastName", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: { value: 3, message: "Apellido muy corto" },
                maxLength: { value: 20, message: "Apellido muy largo" },
                pattern: {
                  value: regexText,
                  message: "Formato incorrecto",
                },
              })}
            />
            {errors.firstLastName && (
              <small className="text-danger">
                {errors.firstLastName.message}
              </small>
            )}
          </div>

          {/* SEGUNDO-APELLIDO*/}
          <div className="mb-3">
            <label className="form-label">Segundo Apellido</label>
            <input
              type="text"
              className="form-control"
              {...register("secondLastName", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: { value: 3, message: "Apellido muy corto" },
                maxLength: { value: 20, message: "Apellido muy largo" },
                pattern: {
                  value: regexText,
                  message: "Formato incorrecto",
                },
              })}
            />
            {errors.secondLastName && (
              <small className="text-danger">
                {errors.secondLastName.message}
              </small>
            )}
          </div>

          {/* FECHA-NACIMIENTO*/}
          <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              {...register("date", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.date && (
              <small className="text-danger">{errors.date.message}</small>
            )}
          </div>

          {/* GENERO*/}
          <div className="mb-3">
            <label className="form-label">Genero</label>
            <select
              class="form-select"
              {...register("gender", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            >
              <option value="male" selected>
                Hombre
              </option>
              <option value="female">Mujer</option>
            </select>
            {errors.gender && (
              <small className="text-danger">{errors.gender.message}</small>
            )}
          </div>

          {/* CELULAR*/}
          <div className="mb-3">
            <label className="form-label">Celular</label>
            <input
              type="number"
              className="form-control"
              {...register("cellphone", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: { value: 9, message: "Formato incorrecto" },
                maxLength: { value: 9, message: "Formato incorrecto" },
                pattern: {
                  value: regexNum,
                  message: "Formato incorrecto",
                },
              })}
            />
            {errors.cellphone && (
              <small className="text-danger">{errors.cellphone.message}</small>
            )}
          </div>

          {/* CORREO*/}
          <div className="mb-3">
            <label className="form-label">Correo Electronico</label>
            <input
              type="text"
              className="form-control"
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
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
        </section>

        <div class="form-check mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Acepto compartir mi informacion personal en las busquedas en la
            Platafora
          </label>
        </div>

        <Divider sx={{ my: 5 }} />

        <Title>Localidad</Title>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            columnGap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {/* DIRECCION*/}
          <div className="mb-3">
            <label className="form-label">Direccion</label>
            <input
              type="text"
              className="form-control"
              {...register("direction", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: { value: 5, message: "Direccion muy corta" },
                maxLength: { value: 100, message: "Direccion muy larga" },
                pattern: {
                  value: regexText,
                  message: "Formato incorrecto",
                },
              })}
            />
            {errors.direction && (
              <small className="text-danger">{errors.direction.message}</small>
            )}
          </div>
        </section>

        <Divider sx={{ my: 5 }} />

        {/* BUTTON */}
        <div
          className="mb-3 mt-5"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            className="btn btn-dark"
            type="submit"
            style={{ width: "100%" }}
          >
            Guardar
          </button>
        </div>
      </form>

      <div className="alert alert-warning">
        <code>
          Data sent: <br />
          {JSON.stringify(sendData)}
        </code>
      </div>
    </div>
  );
};
