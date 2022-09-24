import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import { CartButton } from "../cart-button/cart-button";
import { LoginButton } from "../login-button/login-button";
import { LoginTooltip } from "../login-button/login-tooltip";
import styles from "./header.module.css";
import { Logo } from "./logo";

const Header = React.memo(() => {
  const { isLoggedIn } = useContext(CartContext);
  const actionsClasses = isLoggedIn
    ? `${styles["header-user-actions"]} ${styles["logged-in"]}`
    : `${styles["header-user-actions"]}`;

  return (
    <header className={styles.header}>
      <Logo />
      <div className={actionsClasses}>
        {isLoggedIn && <LoginTooltip />}
        <LoginButton />
        <CartButton />
      </div>
    </header>
  );
});

export { Header };
