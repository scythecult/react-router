import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/users/users-slice";

import classes from "./Counter.module.css";

const makeUpperCaseFirst = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

const Users = () => {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [isSame, setIsSame] = useState(false);
  const [wasUserAdded, setWasUserAdded] = useState(false);

  const onAddUserClick = () => {
    const value = prompt("Enter new user name", "");
    const isSame = users.some((user) => user.toLowerCase() === value.toLowerCase());

    if (isSame) {
      setIsSame(isSame);
    } else {
      setIsSame(isSame);
      dispatch(addUser(makeUpperCaseFirst(value)));
    }
  };

  const onRemoveUserClick = () => {
    const value = prompt("Enter user to remove", "");
    const wasUserFound = users.some((user) => user.toLowerCase() === value.toLowerCase());

    if (!wasUserFound) {
      setWasUserAdded(true);
    } else {
      setWasUserAdded(false);
      dispatch(removeUser(value.toLowerCase()));
    }
  };

  let infoMessage;

  if (isSame) {
    infoMessage = <p>User already exists</p>;
  }

  if (wasUserAdded) {
    infoMessage = <p>No such user in DB</p>;
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsSame(false);
      setWasUserAdded(false);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [isSame, wasUserAdded]);

  return (
    <main className={classes.counter}>
      <h1>Redux Users</h1>
      {infoMessage}
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
