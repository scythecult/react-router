import React from "react";
import { Auth } from "./components/Auth";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";
import { Users } from "./components/Users";

const App = () => {
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
