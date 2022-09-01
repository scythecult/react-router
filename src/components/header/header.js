import React from "react";
import { CartButton } from "../cart-button/cart-button";
import styles from "./header.module.css";
import { Logo } from "./logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <CartButton />
    </header>
  );
};

export { Header };
