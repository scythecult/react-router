import React from "react";
import styles from "./modal.module.css";

const Modal = (props) => {
  const { handler } = props;

  return (
    <>
      <div className={styles.backdrop} onClick={handler}></div>
      <div className={styles.modal}>{props.children}</div>
    </>
  );
};

export { Modal };
