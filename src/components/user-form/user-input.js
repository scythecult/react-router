import React from "react";
import styles from "./user-input.module.css";

const UserInput = (props) => {
  const { label, inputValue, handler, type } = props;

  return (
    <label className={styles["user-input__label"]}>
      <span className={styles["user-input__title"]}>{label}</span>
      <input
        className={styles["user-input__input"]}
        type={type}
        onChange={(evt) => handler(evt.target.value.trim())}
        value={inputValue}
      />
    </label>
  );
};
export { UserInput };
