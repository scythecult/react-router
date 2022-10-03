import React, { useContext } from "react";
import { addMealToCart, removeMealFromCart } from "../../actions/actions";
import { DispatchContext } from "../../context/context";
import styles from "./cart-item.module.css";

const CartItem = (props) => {
  const dispatch = useContext(DispatchContext);
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
        <button onClick={() => dispatch(removeMealFromCart(id))}>−</button>
        <button onClick={() => dispatch(addMealToCart({ id, mealCount: 1 }))}>+</button>
      </div>
    </li>
  );
};

export { CartItem };
