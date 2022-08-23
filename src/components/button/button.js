import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  const { children, type, onClick } = props;

  return (
    <button className={styles["button"]} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export { Button };
