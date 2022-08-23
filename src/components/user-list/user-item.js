import React from "react";
import styles from "./user-item.module.css";

const UserItem = (props) => {
  const { name, age } = props;

  return (
    <p className={styles["user-item"]}>
      {name} ({age} year old)
    </p>
  );
};

export { UserItem };
