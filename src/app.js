import React, { useState } from "react";
import styles from "./app.module.css";
import { Modal } from "./components/modal/modal";
import { UserForm } from "./components/user-form/user-form";
import { UserList } from "./components/user-list/user-list";

const users = [
  { name: "Ale", age: 35 },
  { name: "Nataly", age: 30 },
];

const App = () => {
  return (
    <div className={styles.app}>
      <UserForm />
      <UserList items={users} />
      <Modal />
    </div>
  );
};

export default App;
