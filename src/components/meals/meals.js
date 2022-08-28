import React from "react";
import { Meal } from "../meal/meal";
import { Card } from "../UI/card";
import styles from "./meals.module.css";

const Meals = (props) => {
  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          <Meal />
        </ul>
      </Card>
    </div>
  );
};

export { Meals };
