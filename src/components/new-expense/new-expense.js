import React, { useState } from "react";
import { NewExpenseToggler } from "../new-expense-toggler/new-expense-toggler";
import { ExpenseForm } from "./expense-form";
import "./new-expense.css";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const newExpenseView = formVisible ? (
    <ExpenseForm {...props} onButtonClick={setFormVisible} />
  ) : (
    <NewExpenseToggler onButtonClick={setFormVisible} />
  );

  return <div className="new-expense">{newExpenseView}</div>;
};

export { NewExpense };
