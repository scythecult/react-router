import React from "react";

import styles from "./login-button.module.css";
import { UserIcon } from "./user-icon";
const LoginButton = () => {
  return (
    <button className={styles["login-button"]}>
      <UserIcon />
    </button>
  );
};

export { LoginButton };
