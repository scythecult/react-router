import React from "react";
import styles from "./cart-button.module.css";
import { CartIcon } from "./cart-icon";

const CartButton = (props) => {
  const { cartCount } = props;

  return (
    <button className={styles.button}>
      <CartIcon className={styles.icon} />
      Your Cart
      <span className={styles.badge}>{cartCount}</span>
    </button>
  );
};

export { CartButton };
