import React, { useState } from "react";
import styles from "./form.module.css";
import { Input } from "../UI/input";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/products/product-slice";

const Form = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("1");
  const { id } = props;

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(addProduct({ id, quantity: Number(quantity) }));
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
        value={quantity}
        handler={setQuantity}
      />
      <button>+ Add</button>
    </form>
  );
};

export { Form };
