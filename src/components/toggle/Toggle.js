import React, { useContext } from "react";
import { createContext } from "react";
import classes from "./Toggle.module.css";

const ToggleContext = createContext();

const ToggleTitle = ({ children }) => {
  return <p className={classes.title}>{children}</p>;
};

const ToggleButton = () => {
  const handler = useContext(ToggleContext);
  const uniqueId = Date.now();

  return (
    <>
      <input
        className={`${classes.vh} ${classes.input}`}
        type="checkbox"
        id={`toggle-${uniqueId}`}
        onChange={handler}
      />
      <label className={classes.toggle} htmlFor={`toggle-${uniqueId}`}></label>
    </>
  );
};

const Toggle = (props) => {
  const { handler = () => {} } = props;
  // logic

  return (
    <ToggleContext.Provider value={handler}>{props.children}</ToggleContext.Provider>
  );
};

Toggle.Button = ToggleButton;
Toggle.Title = ToggleTitle;

export { Toggle };
