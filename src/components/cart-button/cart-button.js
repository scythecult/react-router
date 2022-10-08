import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartVisible } from "../../features/render/render.slice";
import { getCartQuantity } from "../../utils/utils";
import styles from "./cart-button.module.css";
import { CartIcon } from "./cart-icon";

const CartButton = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.products);
  const [animationClass, setAnimationClass] = useState("");
  const cartCount = getCartQuantity(cartProducts);

  useEffect(() => {
    if (cartProducts.length) {
      setAnimationClass(styles.bump);
    }

    const timerId = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => clearTimeout(timerId);
  }, [cartProducts]);

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
