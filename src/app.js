import React from "react";
import { useSelector } from "react-redux";
import { Auth } from "./components/Auth";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { Users } from "./components/Users";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      <Counter />
      <Users />
    </>
  );
};

export { App };
