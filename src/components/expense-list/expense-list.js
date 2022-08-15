import React from "react";
import { ExpenseItem } from "../expense-item/expense-item";
import "./expense-list.css";

const ExpenseList = (props) => {
  const { expenses } = props;

  if (!expenses.length) {
    return <p className="expense-list-placeholder">No expenses yet :)</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.date} {...expense} />
      ))}
    </ul>
  );
};

export { ExpenseList };
