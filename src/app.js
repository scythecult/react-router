import React from "react";
import { useSelector } from "react-redux";
import { Auth } from "./components/Auth";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { Users } from "./components/Users";

const App = () => {
  useSelector((state) => console.log(state));

  return (
    <>
      <Header />
      <Auth />
      <Counter />
      <Users />
    </>
  );
};

export { App };
