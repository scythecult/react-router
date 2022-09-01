import React, { useContext } from "react";
import { CartContext } from "../../cart-context/cart-context";
import { CartItem } from "../cart-item/cart-item";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";
import styles from "./cart.module.css";

const Cart = React.memo(() => {
  const { cartItems, setIsCartShown } = useContext(CartContext);
  const totalAmount = cartItems
    .reduce((initial, current) => {
      initial += current.price * current.quantity;

      return initial;
    }, 0)
    .toFixed(2);

  const modalContent = cartItems.length ? (
    <>
      <ul className={styles.cart}>
        {cartItems.map((item, index) => (
          <CartItem key={item.id + index} {...item} />
        ))}
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
        <Button handler={() => setIsCartShown(false)}>Close</Button>
        {!!cartItems.length && <Button className="button--alt">Order</Button>}
      </p>
    </Modal>
  );
});

export { Cart };
