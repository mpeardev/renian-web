import { Divider } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import Title from "./Title";
import { handlePost } from "../../../utils/war/adopters";
import { Web3Context } from "../../../contexts/Web3/Web3Context";
import { Users } from "../../../utils/war/UsersSystem";
import { isObjEmpty, objectUppercase } from "../../../utils/helpers";
import { getResponsibility } from "../../../utils/war/RegisteringEntities";
import { useUbigeo } from "./useUbigeo";
import Select from "react-select";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const FormNewUser = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [sendData, setSendData] = useState();
  const [user, setUser] = useState({});
  const [userEntity, setUserEntity] = useState({});
  const [publicAddress, setPublicAddress] = useState({});
  const {
    departments,
    provinces,
    districts,
    handleDepartaments,
    handleProvinces,
    handleDistricts,
  } = useUbigeo();

  const regexNum = /^[0-9]+/;
  const regexText = /^[a-zA-Z0-9 ]+$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	const onSubmit = (data) => {
		const newPassword = Math.random().toString(36).slice(-8);

		const info = {
			_id: "",
			status: false,
			idRegisteringEntity: userEntity,
			sendEmail: true,
			privateKey: publicAddress.privateKey,
			password: newPassword,
			...objectUppercase(data),
		};
		setSendData(...objectUppercase(data));
		handlePost(info, web3.authToken, "POST");
	};

  const { web3, handleWeb3, handleAccount, handleChainId, handleToken } =
    useContext(Web3Context);

  useEffect(() => {
    handleDepartaments();
  }, []);

  useEffect(() => {
    web3.account != "" &&
      web3.wallet != null &&
      Users(web3.wallet, web3.account)
        .then((resolve) => {
          !isObjEmpty(resolve) ? setUser(resolve) : setUser({});
        })
        .catch((e) => console.log(e));
  }, [web3.account, web3.wallet, web3.chainId]);

  useEffect(() => {
    if (user?.registeringEntity != "" && user?.registeringEntity != undefined) {
      getResponsibility(web3.wallet, user?.registeringEntity).then(
        (resolve2) => {
          setUserEntity(resolve2);
        }
      );
    }
  }, [user?.registeringEntity, web3.wallet]);

	const newAddress = async () => {
		const response = await web3.wallet.eth.accounts.create();
		setPublicAddress(response);
		setValue("address", response.address);
	};

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
            <select
              className="form-select"
              {...register("country", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            >
              <option value=""></option>
              <option value="PE">Peru</option>
            </select>

            {errors.country && (
              <small className="text-danger">{errors.country.message}</small>
            )}
          </div>

          {/* TIPO-PERSONA */}
          <div className="mb-3">
            <label className="form-label">Tipo Persona</label>
            <select
              className="form-select"
              {...register("person", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            >
              <option value=""></option>
							<option value=""></option>
              <option value="natural">Natural</option>
              <option value="juridic">Juridico</option>
							<option value="juridic">Juridico</option>
            </select>
            {errors.person && (
              <small className="text-danger">{errors.person.message}</small>
            )}
						{errors.person && (
							<small className="text-danger">{errors.person.message}</small>
						)}
          </div>

					{/* DOCUMENTO-IDENTIFICACION */}
					<div className="mb-3">
						<label className="form-label">Documento de Identificacion</label>
						<select
							className="form-select"
							{...register("document", {
								required: {
									value: true,
									message: "Campo requerido",
								},
							})}
						>
							<option value=""></option>
							<option value="d.n.i.">D.N.I</option>
							<option value="c.i">C.E</option>
							<option value="r.u.c.">RUC</option>
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
            <label className="form-label">Tipo</label>
            <select
              className="form-select"
              {...register("type", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            >
              <option value="adopter">Adoptante</option>
            </select>
          </div>

					<div
						className="mb-3"
						style={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "flex-start",
						}}
					>
						<div
							style={{
								display: "flex",
								border: "1px solid rgb(191, 193, 193)",
								padding: ".5rem 1rem",
								borderRadius: "0.375rem",
								cursor: "pointer",
							}}
							onClick={() => newAddress()}
						>
							<AccountBalanceWalletIcon />
							<p style={{ margin: "0 0 0 8px" }}>Crear address</p>
						</div>
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
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>

					{/* SEGUNDO-NOMBRE*/}
					<div className="mb-3">
						<label className="form-label">Segundo Nombre</label>
						<input
							type="text"
							className="form-control"
							{...register("secondName", {
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
              {...register("lastName", {
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
            {errors.lastName && (
              <small className="text-danger">{errors.lastName.message}</small>
            )}
          </div>

          {/* SEGUNDO-APELLIDO*/}
          <div className="mb-3">
            <label className="form-label">Segundo Apellido</label>
            <input
              type="text"
              className="form-control"
              {...register("mLastName", {
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
            {errors.mLastName && (
              <small className="text-danger">{errors.mLastName.message}</small>
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
              className="form-select"
              {...register("gender", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            >
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
            </select>
          </div>

          {/* CELULAR*/}
          <div className="mb-3">
            <label className="form-label">Celular</label>
            <input
              type="number"
              className="form-control"
              {...register("phone", {
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
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
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

        <div className="form-check mt-3">
          {/* <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          /> */}
          <label className="form-check-label">
            Acepto compartir mi informacion personal en las busquedas en la
            Platafora
          </label>
        </div>

        <Divider sx={{ my: 5 }} />

        <Title>Localidad</Title>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {/* DEPARTAMENTO*/}
          <div className="mb-3">
            <label className="form-label">Departamento</label>
            <Select
              options={departments}
              value={{ label: watch("department") }}
              onChange={(target) => {
                setValue("department", target.value);
                setValue("province", "");
                setValue("district", "");
                handleProvinces(target.value);
              }}
            />
            <input
              type="hidden"
              {...register("department", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.department && (
              <small className="text-danger">{errors.department.message}</small>
            )}
          </div>

          {/* PROVINCIA*/}
          <div className="mb-3">
            <label className="form-label">Provincia</label>
            <Select
              options={provinces}
              value={{ label: watch("province") }}
              onChange={(target) => {
                setValue("province", target.value);
                setValue("district", "");
                handleDistricts(target.value);
              }}
            />
            <input
              type="hidden"
              {...register("province", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.province && (
              <small className="text-danger">{errors.province.message}</small>
            )}
          </div>

          {/* DISTRITO*/}
          <div className="mb-3">
            <label className="form-label">Distrito</label>
            <Select
              options={districts}
              value={{ label: watch("district") }}
              onChange={(target) => {
                setValue("district", target.value);
              }}
              name="district"
              id="district"
              required
            />
            <input
              type="hidden"
              {...register("district", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
            />
            {errors.district && (
              <small className="text-danger">{errors.district.message}</small>
            )}
          </div>
        </section>

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
