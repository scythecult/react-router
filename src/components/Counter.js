import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state);

  const counterValue = counter ? counter : "-- COUNTER VALUE --";

  const toggleCounterHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export { Counter };
