import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
        alt="table full of meals"
      />
    </div>
  );
};

export { Hero };
