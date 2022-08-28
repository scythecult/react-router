import React from "react";
import { Form } from "./form";
import styles from "./meal.module.css";

const Meal = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>Sushi</h3>
        <p className={styles.description}>check it out</p>
        <p className={styles.price}>$200.22 </p>
      </div>
      <Form />
    </li>
  );
};

export { Meal };
