import React from "react";
import { UserIcon } from "./user-icon";

import styles from "./login-button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginShown } from "../../features/auth/user-auth";

const LoginButton = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const loginButtonClasses = isLoggedIn
    ? `${styles["login-button"]} ${styles["logged-in"]}`
    : `${styles["login-button"]}`;

  return (
    <button
      className={loginButtonClasses}
      onClick={() => dispatch(setIsLoginShown(true))}>
      <UserIcon />
    </button>
  );
};

export { LoginButton };
