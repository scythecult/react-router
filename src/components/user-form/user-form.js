import React from "react";
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
        <button className={styles["user-form__submit"]} type={"submit"}>
          Add User
        </button>
      </form>
    </Card>
  );
};

export { UserForm };
