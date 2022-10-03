import React from "react";
import styles from "./logo.module.css";

const Logo = React.memo(() => {
  return <p className={styles.logo}>ReactMeals </p>;
});

export { Logo };
