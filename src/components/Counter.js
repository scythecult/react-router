import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state);

  // const counterValue = counter ? counter : "-- COUNTER VALUE --";

  const toggleCounterHandler = () => {
    // dispatch({ type: "INCREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.buttons}>
        <button onClick={() => dispatch({ type: "DECREMENT" })} type="button">
          decrement
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })} type="button">
          increment
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export { Counter };
