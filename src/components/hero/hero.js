import React from "react";
import { MealsSummary } from "../meals-summary/meals-summary";
import styles from "./hero.module.css";

const Hero = React.memo(() => {
  return (
    <div className={styles.hero}>
      <img
        src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
        alt="table full of meals"
      />
      <MealsSummary />
    </div>
  );
});

export { Hero };
