import React, { useState } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import styles from "./user-form.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const { updateUsers, toggleModal, updateErrorMessage } = props;

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (!userName.length && !userAge.length) {
      toggleModal(true);
      updateErrorMessage("Please enter a valid name and age (non-empy values).");
      return;
    }

    if (userAge.startsWith("-")) {
      toggleModal(true);
      updateErrorMessage("Please enter a valid age (>0).");
      return;
    }

    updateUsers({ userName, userAge });
    setUserName("");
    setUserAge("");
  };

  return (
    <Card>
      <form className={styles["user-form"]} onSubmit={onFormSubmit}>
        <label className={styles["user-form__label"]}>
          <span className={styles["user-form__title"]}>Username</span>
          <input
            className={styles["user-form__name-input"]}
            type={"text"}
            onChange={(evt) => setUserName(evt.target.value.trim())}
            value={userName}
          />
        </label>

        <label className={styles["user-form__label"]}>
          <span className={styles["user-form__title"]}>Age (Years)</span>
          <input
            className={styles["user-form__name-input"]}
            type={"number"}
            onChange={(evt) => setUserAge(evt.target.value.trim())}
            value={userAge}
          />
        </label>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export { UserForm };
