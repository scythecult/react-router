import React, { useContext } from "react";
import { ToggleContext } from "../../context/toggle-context";

import classes from "./Toggle.module.css";

const Toggle = () => {
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

const CompoundToggle = (props) => {
  const { handler = () => {} } = props;
  // logic

  return (
    <ToggleContext.Provider value={handler}>{props.children}</ToggleContext.Provider>
  );
};

const RenderToggle = (props) => {};

export { CompoundToggle, RenderToggle, Toggle };
