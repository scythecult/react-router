import React, { useContext, useState } from "react";
import { CartContext } from "../../context/context";
import styles from "./login-tooltip.module.css";

const LoginTooltip = () => {
  const { currentUser, isLoggedIn, isNewUser } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(true);

  const tooltipContent = isNewUser
    ? "You're have been succesfully logged in!"
    : `Welcome back ${currentUser.loginValue}`;
  const tooltipClasses =
    isLoggedIn && isVisible ? `${styles.tooltip} ${styles.shown}` : `${styles.tooltip}`;

  return (
    <div className={tooltipClasses} onClick={() => setIsVisible(false)}>
      {tooltipContent}
    </div>
  );
};

export { LoginTooltip };
