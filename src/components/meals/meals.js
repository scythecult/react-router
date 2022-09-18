import React, { useEffect, useState } from "react";
import { FIRE_DB_STORED_MEALS } from "../../constants/constants";
import { useHttp } from "../../hooks/hooks";
import { transformObject } from "../../utils/utils";
import { Form } from "../meal/form";
import { Meal } from "../meal/meal";
import { Card } from "../UI/card";
import styles from "./meals.module.css";

const Meals = React.memo(() => {
  const [meals, setMeals] = useState([]);
  const [fetchData] = useHttp({
    url: FIRE_DB_STORED_MEALS,
  });

  useEffect(() => {
    fetchData().then((response) => {
      if (response) {
        const data = transformObject(response);

        if (!data.length) return;

        setMeals(data);
      }
    });
  }, []);

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
