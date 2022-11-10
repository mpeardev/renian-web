import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "../../atoms/icons";
import classes from "./expand-panel.module.scss";

export const ExpandPanel = ({ question, response, children }) => {
  const [activate, setActivate] = useState();

  return (
    <>
      <div className={classes.expand}>
        <div
          className={classes.expand__panel}
          onClick={() => setActivate(!activate)}
        >
          <h4 style={{ color: activate ? "#bf002a" : "#757575" }}>
            {question}
          </h4>
          <div
            style={{
              transform: activate ? "rotate(180deg)" : "rotate(0)",
              fill: activate ? "#bf002a" : "#757575",
            }}
          >
            <ArrowIcon />
          </div>
        </div>

        <div
          className={classes.expand__question}
          style={{
            boxShadow: activate ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none",
            padding: activate ? "1.5rem 2rem" : "0 2rem",
            height: activate ? "auto" : "0",
            marginBottom: activate ? "1.5rem" : "0",
          }}
          onClick={() => setActivate(!activate)}
        >
          {children && <p>{children}</p>}
          {response && <p>{response}</p>}
        </div>
      </div>
    </>
  );
};
