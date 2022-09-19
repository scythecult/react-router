import React, { useContext } from "react";
import { UserIcon } from "./user-icon";

import styles from "./login-button.module.css";
import { CartContext } from "../../context/context";

const LoginButton = () => {
  const { isLoggedIn } = useContext(CartContext);
  const { setIsLoginShown } = useContext(CartContext);
  const loginButtonClasses = isLoggedIn
    ? `${styles["login-button"]} ${styles["logged-in"]}`
    : `${styles["login-button"]}`;

  return (
    <button className={loginButtonClasses} onClick={() => setIsLoginShown(true)}>
      <UserIcon />
    </button>
  );
};

export { LoginButton };
