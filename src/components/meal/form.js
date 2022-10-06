import React, { useState } from "react";
import styles from "./form.module.css";
import { Input } from "../UI/input";
import { useHttp } from "../../hooks/hooks";
import { FIRE_DB_CART_DATA } from "../../constants/constants";

const Form = (props) => {
  const [mealCount, setMealCount] = useState("1");
  const [postCartData] = useHttp({ url: FIRE_DB_CART_DATA, method: "POST" });
  const { id, item } = props;

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    postCartData({ ...item, quantity: Number(mealCount) });
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
