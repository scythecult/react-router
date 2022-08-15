import React from "react";
import { ExpenseForm } from "./expense-form";
import "./new-expense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm {...props} />
    </div>
  );
};

export { NewExpense };
