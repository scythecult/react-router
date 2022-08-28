import React from "react";
import { CartButton } from "../cart-button/cart-button";
import styles from "./header.module.css";
import { Logo } from "./logo";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Logo />
      <CartButton cartCount={20} />
    </header>
  );
};

export { Header };
