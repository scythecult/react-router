import React from "react";

import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <span className={styles["spinner-wrap"]}>
      <span className={styles.spinner}>
        <span></span>
        <span></span>
      </span>
    </span>
  );
};

export { Spinner };
