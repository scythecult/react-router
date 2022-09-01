import React from "react";
import { Form } from "./form";
import styles from "./meal.module.css";

const Meal = (props) => {
  const { id, name, description, price } = props;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price} </p>
      </div>
      <Form id={id} />
    </li>
  );
};

export { Meal };
