import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase } from "../../features/cart/cart-slice";
import styles from "./cart-item.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, price, quantity } = props;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price?.toFixed(2)}</span>
          <span className={styles.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => dispatch(decrease({ id }))}>−</button>
        <button onClick={() => dispatch(increase({ id, quantity: 1 }))}>+</button>
      </div>
    </li>
  );
};

export { CartItem };
