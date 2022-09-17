import React from "react";
import { Spinner } from "../spinner/spinner";
import styles from "./button.module.css";

const Button = React.memo((props) => {
  const { handler, children, config = {} } = props;
  const { isAlt = "", type = "button", isDisabled = false, className = "" } = config;

  return (
    <button
      className={`${styles.button} ${isAlt && styles["button--alt"]} ${className}`}
      type={type}
      onClick={handler}
      disabled={isDisabled}>
      {isDisabled ? <Spinner /> : children}
    </button>
  );
});

export { Button };
