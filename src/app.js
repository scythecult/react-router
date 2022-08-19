import React, { useState } from "react";
import { Expenses } from "./components/expenses/expenses";
import { NewExpense } from "./components/new-expense/new-expense";
import "./index.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <NewExpense updateExpenses={setExpenses} />
      <Expenses expenses={expenses} />;
    </>
  );
};

export { App };
