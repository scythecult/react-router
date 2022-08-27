import { useEffect, useState } from "react";

const useStoredUsers = () => {
  const uniqueId = "react-1-practice";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!users.length) return;

    localStorage.setItem(uniqueId, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (localStorage.getItem(uniqueId)) {
      setUsers(JSON.parse(localStorage.getItem(uniqueId)));
    }
  }, []);

  return [users, setUsers];
};

export { useStoredUsers };
