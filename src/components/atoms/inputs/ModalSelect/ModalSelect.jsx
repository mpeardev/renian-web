import Select from "react-select";
import classes from "./modal-select.module.scss";

export const ModalSelect = ({ name = "", required = false, options = [] }) => {
  const customStyles = {
    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "6px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#fff",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#bf002a",
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#bf002a",
      },
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "Quicksand-Light",
    }),
    control: (base) => ({
      ...base,
      fontFamily: "Quicksand-Regular",
      fontSize: 14,
      height: 12,
    }),
  };
  return (
    <div className={classes.select}>
      <div>
        <h4>{name}</h4>
        {required && <span>(requerido)</span>}
      </div>
      <Select
        options={options}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#e1e1e1",
            primary50: "#bf002a20",
            primary: "#bf002a",
          },
        })}
      />
    </div>
  );
};
