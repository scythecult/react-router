import React from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import styles from "./user-form.module.css";

const UserForm = () => {
  return (
    <Card>
      <form className={styles["user-form"]}>
        <label className={styles["user-form__label"]}>
          <span className={styles["user-form__title"]}>Username</span>
          <input className={styles["user-form__name-input"]} type={"text"} />
        </label>

        <label className={styles["user-form__label"]}>
          <span className={styles["user-form__title"]}>Age (Years)</span>
          <input className={styles["user-form__name-input"]} type={"number"} />
        </label>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export { UserForm };
