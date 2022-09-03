import React, { useContext } from "react";
import { CartContext } from "../../context/context";
import styles from "./modal.module.css";

const Modal = (props) => {
  const { setIsCartShown } = useContext(CartContext);

  return (
    <>
      <div className={styles.backdrop} onClick={() => setIsCartShown(false)}></div>
      <div className={styles.modal}>{props.children}</div>
    </>
  );
};

export { Modal };
