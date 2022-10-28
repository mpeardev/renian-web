import classes from "./modal-file.module.scss";

export const ModalFile = ({ name = "" }) => {
  return (
    <label className={classes.file}>
      <input type="file" />
      <lord-icon
        src="https://cdn.lordicon.com/qierxeeb.json"
        trigger="hover"
        colors="primary:#3a3347,secondary:#646e78,quaternary:#bf002a,quinary:#bf002a,senary:#ebe6ef"
      ></lord-icon>{" "}
      {name}
    </label>
  );
};
