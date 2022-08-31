import React, { useContext } from "react";
import { CartContext } from "../../cart-context/cart-context";
import { CartItem } from "../cart-item/cart-item";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";
import styles from "./cart.module.css";

const Cart = (props) => {
  const { cartItems, setIsCartShown } = useContext(CartContext);
  const { totalAmount } = props;
  const modalContent = cartItems.length ? (
    <>
      <ul className={styles.cart}>
        <CartItem />
      </ul>
      <p className={styles.total}>
        <span>Total Amount:</span>
        <span>${totalAmount}</span>
      </p>
    </>
  ) : (
    <p>There's no meals in the cart yet...</p>
  );
  return (
    <Modal>
      {modalContent}

      <p className={styles.actions}>
        <Button handler={() => setIsCartShown(false)} text="Close" />
        {!!cartItems.length && <Button text="Order" className="button--alt" />}
      </p>
    </Modal>
  );
};

export { Cart };
