import React from "react";
import styles from "./app.module.css";
import { Cart } from "./components/cart/cart";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { MealsSummary } from "./components/meals-summary/meals-summary";
import { Meals } from "./components/meals/meals";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <MealsSummary />
      <Meals />
      <Cart totalAmount={10050} />
    </div>
  );
};

export { App };
