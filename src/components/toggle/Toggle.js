import React, { useContext, useMemo } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import classes from "./Toggle.module.css";

const ToggleContext = createContext();

const ToggleTitle = ({ children }) => {
  return <p className={classes.title}>{children}</p>;
};

const On = ({ children }) => {
  const { isLight } = useContext(ToggleContext);

  if (!isLight) return null;

  return <p className={classes.title}>{children}</p>;
};

const Off = ({ children }) => {
  const { isLight } = useContext(ToggleContext);

  if (isLight) return null;

  return <p className={classes.title}>{children}</p>;
};

const ToggleButton = () => {
  const context = useContext(ToggleContext);
  const uniqueId = Date.now();

  return (
    <>
      <input
        className={`${classes.vh} ${classes.input}`}
        type="checkbox"
        id={`toggle-${uniqueId}`}
        onChange={context.handler}
      />
      <label className={classes.toggle} htmlFor={`toggle-${uniqueId}`}></label>
    </>
  );
};

const Toggle = (props) => {
  const { handler } = props;
  const { isLight } = useSelector((state) => state.theme);

  const context = useMemo(() => {
    return { isLight, handler };
  }, [isLight, handler]);

  return (
    <ToggleContext.Provider value={context}>{props.children}</ToggleContext.Provider>
  );
};

Toggle.Button = ToggleButton;
Toggle.Title = ToggleTitle;
Toggle.On = On;
Toggle.Off = Off;

export { Toggle };
