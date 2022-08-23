import React from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import styles from "./modal.module.css";

const Modal = (props) => {
  const { message } = props;

  return (
    <>
      <div className={styles["backdrop"]}></div>
      <div className={styles["modal"]}>
        <Card>
          <div className={styles["modal-wrap"]}>
            <h2 className={styles["title"]}>Invalid Input</h2>
            <p className={styles["message"]}>Long error message </p>
            <Button onClick={() => console.log("check")}>Okay</Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export { Modal };
