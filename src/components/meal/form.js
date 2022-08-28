import React from "react";
import styles from "./form.module.css";
import { Input } from "./input";

const Form = () => {
  return (
    <form className={styles.form}>
      <Input label="meal-amount" type="number" value="1" />
      <button>+ Add</button>
    </form>
  );
};

export { Form };
