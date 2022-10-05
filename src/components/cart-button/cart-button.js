import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CartContext } from "../../context/context";
import { setIsCartVisible } from "../../features/render/render.slice";
import { getCartQuantity } from "../../utils/utils";
import styles from "./cart-button.module.css";
import { CartIcon } from "./cart-icon";

const CartButton = () => {
  const dispatch = useDispatch();
  const { cartItems } = useContext(CartContext);
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
      onClick={() => dispatch(setIsCartVisible(true))}>
      <CartIcon />
      Your Cart
      <span className={styles.badge}>{cartCount}</span>
    </button>
  );
};

export { CartButton };
