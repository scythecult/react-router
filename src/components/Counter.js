import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseBy, increment } from "../features/counter/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  const toggleCounterHandler = () => {};

  const openModal = () => {
    const value = prompt("enter your value", "");

    dispatch(increaseBy(+value));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.buttons}>
        <button onClick={() => dispatch(decrement())} type="button">
          decrement
        </button>
        <button onClick={() => dispatch(increment())} type="button">
          increment
        </button>
      </div>
      <div className={classes.buttons}>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={openModal}>Increase by</button>
      </div>
    </main>
  );
};

export { Counter };
