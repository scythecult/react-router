import React, { useContext } from "react";
import { CartContext } from "../../cart-context/cart-context";
import styles from "./cart-item.module.css";

const CartItem = (props) => {
  const { onRemove, onAdd } = useContext(CartContext);
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
        <button onClick={() => onRemove(id)}>−</button>
        <button onClick={() => onAdd({ id, mealCount: 1 })}>+</button>
      </div>
    </li>
  );
};

export { CartItem };
