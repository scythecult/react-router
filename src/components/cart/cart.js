import React from "react";
import { CartItem } from "../cart-item/cart-item";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";
import styles from "./cart.module.css";

const Cart = (props) => {
  const { totalAmount } = props;

  return (
    <Modal>
      <ul className={styles.cart}>
        <CartItem />
      </ul>
      <p className={styles.total}>
        <span>Total Amount:</span>
        <span>${totalAmount}</span>
      </p>
      <p className={styles.actions}>
        <Button text="Close" />
        <Button text="Order" className="button--alt" />
      </p>
    </Modal>
  );
};

export { Cart };
