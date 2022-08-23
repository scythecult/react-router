import React from "react";
import styles from "./user-item.module.css";

const UserItem = (props) => {
  const { userName, userAge } = props;

  return (
    <p className={styles["user-item"]}>
      {userName} ({userAge} year old)
    </p>
  );
};

export { UserItem };
