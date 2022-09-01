import React, { useContext, useState } from "react";
import { CartContext } from "../../cart-context/cart-context";
import styles from "./form.module.css";
import { Input } from "../UI/input";

const Form = (props) => {
  const [mealCount, setMealCount] = useState("1");
  const { onAdd } = useContext(CartContext);
  const { id } = props;

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    onAdd({ id, mealCount: Number(mealCount) });
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
