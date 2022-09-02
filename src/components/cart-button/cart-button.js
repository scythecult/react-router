import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../cart-context/cart-context";
import { getCartQuantity } from "../../utils/utils";
import styles from "./cart-button.module.css";
import { CartIcon } from "./cart-icon";

const CartButton = () => {
  const { cartItems, setIsCartShown } = useContext(CartContext);
  const [animationClass, setAnimationClass] = useState("");
  const cartCount = getCartQuantity(cartItems);

  useEffect(() => {
    if (cartItems.length) {
      setAnimationClass(styles.bump);
    }

    const timerId = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => clearTimeout(timerId);
  }, [cartItems]);

  return (
    <button
      className={`${styles.button} ${animationClass}`}
      onClick={() => setIsCartShown(true)}>
      <CartIcon className={styles.icon} />
      Your Cart
      <span className={styles.badge}>{cartCount}</span>
    </button>
  );
};

export { CartButton };
