import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIRE_DB_RECENT_MEALS } from "../../constants/constants";
import { clearCart } from "../../features/products/product-slice";
import { setIsCartVisible } from "../../features/render/render.slice";
import { useHttp } from "../../hooks/hooks";
import { CartItem } from "../cart-item/cart-item";
import { Modal } from "../modal/modal";
import { Button } from "../UI/button";
import styles from "./cart.module.css";

const Cart = React.memo(() => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { cartProducts } = useSelector((state) => state.products);
  const [setRecentData, { postResponse, isError, isLoading }] = useHttp({
    // отправляем в recent, после отправки удаляем данные о корзине из fireDb
    url: FIRE_DB_RECENT_MEALS,
    method: "POST",
  });

  const hasCartItems = !!cartProducts.length;
  const isSuccess = postResponse?.name;
  const totalAmount = cartProducts
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
          {cartProducts.map((item, index) => (
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
    <Modal handler={() => dispatch(setIsCartVisible(false))}>
      {modalContent}
      <p className={styles.actions}>
        <Button
          config={{ isAlt: true, type: "button" }}
          handler={() => dispatch(setIsCartVisible(false))}>
          Close
        </Button>
        {hasCartItems && !isError && isLoggedIn && (
          <Button
            config={{ type: "button", isDisabled: isLoading }}
            handler={() => setRecentData(cartProducts)}>
            Order
          </Button>
        )}
      </p>
    </Modal>
  );
});

export { Cart };
