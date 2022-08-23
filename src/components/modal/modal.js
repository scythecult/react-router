import React from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import styles from "./modal.module.css";

const Modal = (props) => {
  const { message, toggleModal } = props;

  return (
    <>
      <div className={styles["backdrop"]} onClick={() => toggleModal(false)}></div>
      <div className={styles["modal"]}>
        <Card>
          <div className={styles["modal-wrap"]}>
            <h2 className={styles["title"]}>Invalid Input</h2>
            <p className={styles["message"]}>{message} </p>
            <Button onClick={() => toggleModal(false)}>Okay</Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export { Modal };
