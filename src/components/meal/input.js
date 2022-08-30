import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  const { label, type, handler = () => {}, value } = props;

  return (
    <div className={styles.input}>
      <label htmlFor={label}>Amount</label>
      <input
        id={label}
        type={type}
        min={type === "number" ? "0" : ""}
        onChange={(evt) => handler(evt.target.value)}
        value={value}
      />
    </div>
  );
};

export { Input };
