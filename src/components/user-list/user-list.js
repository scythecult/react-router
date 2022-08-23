import React from "react";
import { Card } from "../card/card";
import { UserItem } from "./user-item";
import styles from "./user-list.module.css";

const UserList = (props) => {
  const { items } = props;

  if (!items?.length) {
    return;
  }

  return (
    <Card>
      <ul className={styles["user-list"]}>
        {items.map((item, index) => {
          return <UserItem key={item + index} {...item} />;
        })}
      </ul>
    </Card>
  );
};

export { UserList };
