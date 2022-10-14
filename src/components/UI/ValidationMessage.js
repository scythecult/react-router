import React from "react";

import classes from "./ValidationMessage.module.css";

const ValidationMessage = ({ minValue = 4, value = 0 }) => {
  const remainingLength = minValue - value;
  const message = remainingLength ? `${remainingLength} more chars to type` : "ok!";
  const messageClasses =
    value >= minValue ? `${classes.message}` : `${classes.message} ${classes.visible}`;

  return <p className={messageClasses}>{message}</p>;
};

export { ValidationMessage };
