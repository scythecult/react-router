import React, { useCallback, useState } from "react";
import { Toggle } from "../toggle/Toggle";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../features/theme-slice";

const DescribeButton = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const visibilityStyle = isVisible
    ? { opacity: 1, transition: "opacity, 0.2s ease", pointerEvents: "all" }
    : {
        opacity: 0,
        transition: "opacity, 0.2s ease",
        pointerEvents: "none",
      };

  return (
    <>
      <div style={visibilityStyle}>
        <p>Render props in action:</p>
        {children}
      </div>
      <hr />
      <button onClick={() => setIsVisible((isVisible) => !isVisible)}>
        toggle visibility
      </button>
    </>
  );
};

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
      {/* <Toggle handler={themeHandler}>
        <Toggle.Title>Theme Switcher</Toggle.Title>
        <Toggle.Off>Switch to light</Toggle.Off>
        <Toggle.On>Switch to dark</Toggle.On>
        <Toggle.Button />
      </Toggle> */}
      <Toggle handler={() => console.log("checked")}>
        {(props) => {
          return (
            <>
              <div>
                <p>Render props in action:</p>
                <Toggle.Button />
              </div>
              <hr />
              <button onClick={props.handler}>toggle visibility</button>
            </>
          );
          // return (
          //   <DescribeButton>
          //     <Toggle.Button />
          //   </DescribeButton>
          // );
        }}
      </Toggle>
    </>
  );
};

export { Home };
