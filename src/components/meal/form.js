import React, { useState } from "react";
import styles from "./form.module.css";
import { Input } from "../UI/input";
import { useHttp } from "../../hooks/hooks";
import { FIRE_DB_CART_DATA } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../../features/cart/cart-slice";

const Form = (props) => {
  const dispatch = useDispatch();
  const [mealCount, setMealCount] = useState("1");
  const [postCartData] = useHttp({ url: FIRE_DB_CART_DATA, method: "POST" });
  const [getCartData] = useHttp({ url: FIRE_DB_CART_DATA });
  const { id, item } = props;

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    postCartData({ ...item, quantity: Number(mealCount) }).then((response) => {
      if (response?.name) {
        getCartData().then((response) => {
          if (response) {
            dispatch(addItems(response));
          }
        });
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <Input
        config={{
          id: `meal-amount-${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
        }}
        value={mealCount}
        handler={setMealCount}
      />
      <button>+ Add</button>
    </form>
  );
};

export { Form };
