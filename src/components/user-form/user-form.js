import React, { useState } from "react";
import { Button } from "../button/button";
import { Card } from "../card/card";
import styles from "./user-form.module.css";
import { UserInput } from "./user-input";

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
        <UserInput
          label={"Username"}
          inputValue={userName}
          handler={setUserName}
          type={"text"}
        />
        <UserInput
          label={"Age (Years)"}
          inputValue={userAge}
          handler={setUserAge}
          type={"number"}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export { UserForm };
