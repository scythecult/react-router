import React from "react";
import { ExpenseItem } from "../expense-item/expense-item";
import "./expenses-list.css";

const ExpensesList = (props) => {
  const { items } = props;

  if (!items.length) {
    return <h2 className="expenses-placeholder">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem key={expense.date} {...expense} />
      ))}
    </ul>
  );
};

export { ExpensesList };
