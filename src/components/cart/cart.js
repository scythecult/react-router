import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../actions/actions";
import { FIRE_DB_MEALS } from "../../constants/constants";
import { CartContext, DispatchContext } from "../../context/context";
import { setIsCartVisible } from "../../features/render/render.slice";
import { useHttp } from "../../hooks/hooks";
import { CartItem } from "../cart-item/cart-item";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";
import styles from "./cart.module.css";

const Cart = React.memo(() => {
  const dispatch2 = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { cartItems } = useContext(CartContext);
  const [fetchData, { postResponse, isError, isLoading }] = useHttp({
    url: FIRE_DB_MEALS,
    method: "POST",
  });
  const dispatch = useContext(DispatchContext);
  const hasCartItems = !!cartItems.length;
  const isSuccess = postResponse?.name;
  const totalAmount = cartItems
    .reduce((initial, current) => {
      initial += current.price * current.quantity;

      return initial;
    }, 0)
    .toFixed(2);

  let modalContent = <p>There's no meals in the cart yet...🤷‍♀️</p>;

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
    modalContent = <p>Something went wrong, try later...💩</p>;
  }

  if (isSuccess) {
    modalContent = <p>Your order has been accepted, await operator call!😎</p>;
  }

  if (!isLoggedIn) {
    modalContent = <p>Please log in to order ¯\_(ツ)_/¯</p>;
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart());
    }
  }, [isSuccess, dispatch]);

  return (
    <Modal handler={() => dispatch2(setIsCartVisible(false))}>
      {modalContent}
      <p className={styles.actions}>
        <Button
          config={{ isAlt: true, type: "button" }}
          handler={() => dispatch2(setIsCartVisible(false))}>
          Close
        </Button>
        {hasCartItems && !isError && isLoggedIn && (
          <Button
            config={{ type: "button", isDisabled: isLoading }}
            handler={() => fetchData(cartItems)}>
            Order
          </Button>
        )}
      </p>
    </Modal>
  );
});

export { Cart };
