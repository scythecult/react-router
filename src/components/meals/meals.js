import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIRE_DB_STORED_MEALS } from "../../constants/constants";
import { getProducts } from "../../features/products/product-slice";
import { useHttp } from "../../hooks/hooks";
import { transformObject } from "../../utils/utils";
import { ErrorIndicatior } from "../error-indicator/error-indicator";
import { LoadingIndicatior } from "../loading-indicatior/loading-indicatior";
import { Form } from "../meal/form";
import { Meal } from "../meal/meal";
import { Card } from "../UI/card";
import styles from "./meals.module.css";

const Meals = React.memo(() => {
  const dispatch = useDispatch();
  const { products: meals } = useSelector((state) => state.products);
  const [getMeals, { isLoading, isError }] = useHttp({
    url: FIRE_DB_STORED_MEALS,
  });

  useEffect(() => {
    getMeals().then((response) => {
      if (response) {
        const data = transformObject(response);

        if (!data.length) return;
        dispatch(getProducts(data));
      }
    });
  }, []);

  if (isLoading) {
    return <LoadingIndicatior config={{ size: "small", duration: "fast" }} />;
  }

  if (isError) {
    return <ErrorIndicatior />;
  }

  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {meals?.map((meal) => {
            return (
              <Meal key={meal.id} {...meal}>
                <Form id={meal.id} item={meal} />
              </Meal>
            );
          })}
        </ul>
      </Card>
    </div>
  );
});

export { Meals };
