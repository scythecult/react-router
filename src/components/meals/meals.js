import React from "react";
import { Meal } from "../meal/meal";
import { Card } from "../UI/card";
import styles from "./meals.module.css";

const Meals = (props) => {
  const { meals } = props;

  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <Meal key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export { Meals };
