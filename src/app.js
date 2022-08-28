import React from "react";
import styles from "./app.module.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { MealsSummary } from "./components/meals-summary/meals-summary";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <MealsSummary />
    </div>
  );
};

export { App };
