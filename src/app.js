import React, { useState } from "react";
import styles from "./app.module.css";
import { Modal } from "./components/modal/modal";
import { UserForm } from "./components/user-form/user-form";
import { UserList } from "./components/user-list/user-list";
import { useStoredUsers } from "./hooks";

const App = () => {
  const [users, setUsers] = useStoredUsers();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateUsers = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const modal = isError ? (
    <Modal toggleModal={setIsError} message={errorMessage} />
  ) : null;

  return (
    <div className={styles.app}>
      <UserForm
        updateUsers={updateUsers}
        toggleModal={setIsError}
        updateErrorMessage={setErrorMessage}
      />
      <UserList items={users} />
      {modal}
    </div>
  );
};

export default App;
