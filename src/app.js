import React, { useState } from "react";
import { Expenses } from "./components/expenses/expenses";
import { NewExpense } from "./components/new-expense/new-expense";
import "./index.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <NewExpense onUpdateExpenses={setExpenses} />
      <Expenses expenses={expenses} />;
    </>
  );
};

export { App };
