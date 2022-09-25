import React from "react";
import { ErrorIcon } from "./error-icon";

import styles from "./error-indicator.module.css";

const ErrorIndicatior = () => {
  return (
    <div className={`${styles.error} `}>
      <ErrorIcon />
      <h2>Something went wrong...</h2>
    </div>
  );
};

export { ErrorIndicatior };
