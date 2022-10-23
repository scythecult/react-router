import React from "react";
import { CompoundToggle, Toggle } from "../toggle/Toggle";

export const Home = () => {
  // сделать разные тогглы 3
  // 1. меняет цветовую тему
  // 2. меняет местами элементы в хедере
  // 3. меняет местам хедер и главную
  return (
    <>
      <p>Welcome to the Quotes</p>
      <p>Render Props and Compound components</p>
      <CompoundToggle handler={() => console.log("ohuena")}>
        <Toggle />
      </CompoundToggle>
    </>
  );
};
