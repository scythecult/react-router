import React from "react";
import styles from "./user-form.module.css";

const UserForm = () => {
  return (
    <form className={styles["user-form"]}>
      <label className={styles["user-form__label"]}>
        <span className={styles["user-form__title"]}>Username</span>
        <input className={styles["user-form__name-input"]} type={"text"} />
      </label>

      <label className={styles["user-form__label"]}>
        <span className={styles["user-form__title"]}>Age (Years)</span>
        <input className={styles["user-form__name-input"]} type={"number"} />
      </label>
      <button className={styles["user-form__submit"]} tyoe={"submit"}>
        Add User
      </button>
    </form>
  );
};

export { UserForm };
