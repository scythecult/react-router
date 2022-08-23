import React, { useState } from "react";
import styles from "./app.module.css";
import { Card } from "./components/card/card";
import { UserForm } from "./components/user-form/user-form";

const App = () => {
  return (
    <div className={styles.app}>
      <Card>
        <UserForm />
      </Card>
    </div>
  );
};

export default App;
