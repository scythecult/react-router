import React from "react";
import styles from "./modal.module.css";

const Modal = (props) => {
  const { handler, isShown } = props;
  const backdropClasses = isShown
    ? `${styles.backdrop}`
    : `${styles.backdrop} ${styles.hidden}`;
  const modalClasses = isShown ? `${styles.modal}` : `${styles.modal} ${styles.hidden}`;

  return (
    <>
      <div className={backdropClasses} onClick={handler}></div>
      <div className={modalClasses}>{props.children}</div>
    </>
  );
};

export { Modal };
