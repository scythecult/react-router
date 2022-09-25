import React from "react";

import styles from "./loading-indicatior.module.css";

const LoadingIndicatior = (props) => {
  const { config = {} } = props;
  const { size = "medium", duration = "fast" } = config;

  return (
    <div className={`${styles.loading} ${styles[size]}`}>
      Loading<span className={`${styles.dot} ${styles[duration]}`}>.</span>
      <span className={`${styles.dot} ${styles["dot--2"]}`}>.</span>
      <span className={`${styles.dot} ${styles["dot--3"]}`}>.</span>
    </div>
  );
};

export { LoadingIndicatior };
