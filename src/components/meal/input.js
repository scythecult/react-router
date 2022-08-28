import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  const { label, type, handler = () => {}, value } = props;

  return (
    <div className={styles.input}>
      <label htmlFor={label}>Amount</label>
      <input id={label} type={type} onChange={handler} value={value} />
    </div>
  );
};

export { Input };