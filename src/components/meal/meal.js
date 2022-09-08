import React from "react";
import styles from "./meal.module.css";

const Meal = (props) => {
  const { name, description, price, children } = props;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price} </p>
      </div>
      {children}
    </li>
  );
};

export { Meal };
