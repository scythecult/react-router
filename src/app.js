import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import { Modal } from "./components/modal/modal";
import { UserForm } from "./components/user-form/user-form";
import { UserList } from "./components/user-list/user-list";

const uniqueId = "react-1-practice";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const updateUsers = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  useEffect(() => {
    if (!users.length) return;

    localStorage.setItem(uniqueId, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (localStorage.getItem(uniqueId)) {
      setUsers(JSON.parse(localStorage.getItem(uniqueId)));
    }
  }, []);

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
