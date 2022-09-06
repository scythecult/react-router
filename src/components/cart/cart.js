import React, { useContext, useEffect } from "react";
import { clearCart } from "../../actions/actions";
import { CartContext, DispatchContext } from "../../context/context";
import { usePostData } from "../../hooks/hooks";
import { CartItem } from "../cart-item/cart-item";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";
import styles from "./cart.module.css";

const Cart = React.memo(() => {
  const { cartItems, setIsCartShown } = useContext(CartContext);
  const { responseDb, isError, isLoading, postData } = usePostData();
  const dispatch = useContext(DispatchContext);
  const hasCartItems = !!cartItems.length;
  const totalAmount = cartItems
    .reduce((initial, current) => {
      initial += current.price * current.quantity;

      return initial;
    }, 0)
    .toFixed(2);

  let modalContent = <p>There's no meals in the cart yet...</p>;

  if (hasCartItems) {
    modalContent = (
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
    );
  }

  if (isError) {
    modalContent = <p>Something went wrong, try later...</p>;
  }

  useEffect(() => {
    if (responseDb?.name) {
      setIsCartShown(false);
      dispatch(clearCart());
    }
  }, [responseDb, setIsCartShown, dispatch]);
  console.log("is error", !!isError);
  return (
    <Modal>
      {modalContent}
      <p className={styles.actions}>
        <Button
          config={{ isAlt: true, type: "button" }}
          handler={() => setIsCartShown(false)}>
          Close
        </Button>
        {hasCartItems && !isError && (
          <Button
            config={{ type: "button", isDisabled: isLoading }}
            handler={() => postData(cartItems)}>
            Order
          </Button>
        )}
      </p>
    </Modal>
  );
});

export { Cart };
