import React from "react";
import { Form } from "../meal/form";
import { Meal } from "../meal/meal";
import { Card } from "../UI/card";
import styles from "./meals.module.css";

const Meals = React.memo((props) => {
  const { meals } = props;

  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <Meal key={meal.id} {...meal}>
              <Form id={meal.id} />
            </Meal>
          ))}
        </ul>
      </Card>
    </div>
  );
});

export { Meals };
