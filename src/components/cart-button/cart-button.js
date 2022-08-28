import React, { useContext } from "react";
import { CartContext } from "../../cart-context/cart-context";
import styles from "./cart-button.module.css";
import { CartIcon } from "./cart-icon";

const CartButton = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <button className={styles.button}>
      <CartIcon className={styles.icon} />
      Your Cart
      <span className={styles.badge}>{cartCount}</span>
    </button>
  );
};

export { CartButton };
