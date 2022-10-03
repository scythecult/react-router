import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartContext } from "../../context/context";
import styles from "./login-tooltip.module.css";

const LoginTooltip = React.memo(() => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { currentUser, isNewUser } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(true);

  const tooltipContent = isNewUser
    ? "You're have been succesfully logged in!"
    : `Welcome back ${currentUser.loginValue}`;
  const tooltipClasses =
    isLoggedIn && isVisible ? `${styles.tooltip} ${styles.shown}` : `${styles.tooltip}`;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timerId);
  });

  return (
    <div className={tooltipClasses} onClick={() => setIsVisible(false)}>
      {tooltipContent}
    </div>
  );
});

export { LoginTooltip };
