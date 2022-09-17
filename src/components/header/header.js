import React from "react";
import { CartButton } from "../cart-button/cart-button";
import { LoginButton } from "../login-button/login-button";
import styles from "./header.module.css";
import { Logo } from "./logo";

const Header = React.memo(() => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles["header-user-actions"]}>
        <LoginButton />
        <CartButton />
      </div>
    </header>
  );
});

export { Header };
