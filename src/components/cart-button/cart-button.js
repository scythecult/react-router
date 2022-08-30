import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../cart-context/cart-context";
import styles from "./cart-button.module.css";
import { CartIcon } from "./cart-icon";

const CartButton = () => {
  const { cartCount } = useContext(CartContext);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass(styles.bump);

    const timerId = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => clearTimeout(timerId);
  }, [cartCount]);

  return (
    <button className={`${styles.button} ${animationClass}`}>
      <CartIcon className={styles.icon} />
      Your Cart
      <span className={styles.badge}>{cartCount}</span>
    </button>
  );
};

export { CartButton };
