import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  const { handler = () => {}, value, config } = props;

  return (
    <div className={styles.input}>
      <label htmlFor={config.id}>Amount</label>
      <input {...config} onChange={(evt) => handler(evt.target.value)} value={value} />
    </div>
  );
};

export { Input };
