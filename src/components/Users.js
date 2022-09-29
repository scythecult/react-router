import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/users/users-slice";

import classes from "./Counter.module.css";

const Users = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const onAddUserClick = () => {
    const value = prompt("Enter new user name", "");

    dispatch(addUser(value));
  };

  const onRemoveUserClick = () => {
    const value = prompt("Enter user to remove", "");

    dispatch(removeUser(value.toLowerCase()));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Users</h1>
      <ul className={`${classes.list} ${classes.value}`}>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
      <div className={classes.buttons}>
        <button onClick={onRemoveUserClick}>Remove specific user</button>
        <button onClick={onAddUserClick}>Add user</button>
      </div>
      <div className={classes.buttons}></div>
    </main>
  );
};

export { Users };
