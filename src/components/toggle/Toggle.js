import React, { useContext, useMemo, useState } from "react";
import { createContext } from "react";
import classes from "./Toggle.module.css";

const ToggleContext = createContext();

const ToggleTitle = ({ children }) => {
  return <p className={classes.title}>{children}</p>;
};

const On = ({ children }) => {
  const { isOn } = useContext(ToggleContext);

  return isOn ? null : <p className={classes.title}>{children}</p>;
};

const Off = ({ children }) => {
  const { isOn } = useContext(ToggleContext);

  return isOn ? <p className={classes.title}>{children}</p> : null;
};

const ToggleButton = () => {
  const { isOn, handler, setIsOn } = useContext(ToggleContext);
  const uniqueId = Date.now();

  return (
    <>
      <input
        className={`${classes.vh} ${classes.input}`}
        type="checkbox"
        id={`toggle-${uniqueId}`}
        onChange={() => {
          handler();
          setIsOn((isOn) => !isOn);
        }}
        checked={isOn}
      />
      <label className={classes.toggle} htmlFor={`toggle-${uniqueId}`}></label>
    </>
  );
};

const Toggle = ({ handler, children }) => {
  const [isOn, setIsOn] = useState(false);

  const context = useMemo(() => {
    return { isOn, handler, setIsOn };
  }, [isOn, handler]);
  // отличие от реализации compound, то что children вызывается
  return (
    <>
      <ToggleContext.Provider value={context}>{children(context)}</ToggleContext.Provider>
    </>
  );
};

Toggle.Button = ToggleButton;
Toggle.Title = ToggleTitle;
Toggle.On = On;
Toggle.Off = Off;

export { Toggle };
