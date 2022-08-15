import React, { useState } from "react";
import { ExpenseList } from "./components/expense-list/expense-list";
import { NewExpense } from "./components/new-expense/new-expense";
import "./index.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <NewExpense updateExpenses={setExpenses} />
      <ExpenseList expenses={expenses} />;
    </>
  );
};

export { App };
