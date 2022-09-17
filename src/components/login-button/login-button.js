import React, { useContext } from "react";
import { UserIcon } from "./user-icon";

import styles from "./login-button.module.css";
import { CartContext } from "../../context/context";

const LoginButton = () => {
  const { setIsLoginShown } = useContext(CartContext);

  return (
    <button className={styles["login-button"]} onClick={() => setIsLoginShown(true)}>
      <UserIcon />
    </button>
  );
};

export { LoginButton };
