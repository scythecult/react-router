import React, { useCallback } from "react";
import { Toggle } from "../toggle/Toggle";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../features/theme-slice";

const Home = () => {
  const dispatch = useDispatch();
  // сделать разные тогглы 3
  // 1. меняет цветовую тему
  // 2. меняет местами элементы в хедере
  // 3. меняет местам хедер и главную
  const themeHandler = useCallback(() => {
    dispatch(switchTheme());
  }, [dispatch]);

  return (
    <>
      <p>Welcome to the Quotes</p>
      <p>Render Props and Compound components</p>
      <Toggle handler={themeHandler}>
        <Toggle.Title>Theme Switcher</Toggle.Title>
        <Toggle.Off>Switch to light</Toggle.Off>
        <Toggle.On>Switch to dark</Toggle.On>
        <Toggle.Button />
      </Toggle>
    </>
  );
};

export { Home };
