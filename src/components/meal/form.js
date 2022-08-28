import React, { useContext, useState } from "react";
import { CartContext } from "../../cart-context/cart-context";
import styles from "./form.module.css";
import { Input } from "./input";

const Form = (props) => {
  const [mealCount, setMealCount] = useState("1");
  const { mealId } = props;
  const { mealHandler } = useContext(CartContext);

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    mealHandler({ mealId, mealCount: Number(mealCount) });
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <Input
        label={`meal-amount-${mealId}`}
        type="number"
        value={mealCount}
        handler={setMealCount}
      />
      <button>+ Add</button>
    </form>
  );
};

export { Form };
