import React, { useState } from "react";
import { Filter } from "../filter/filter";
import { ExpensesList } from "../expenses-list/expenses-list";
import "./expenses.css";
import { Placeholder } from "../placeholder/placeholder";

const filterByYear = (expenses, selectedYear) => {
  if (selectedYear) {
    return expenses.filter((expense) => expense.date.getFullYear() === selectedYear);
  }

  return expenses;
};

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2022);
  const { expenses } = props;
  const filteredExpenses = filterByYear(expenses, selectedYear);

  return (
    <div className="expenses">
      {!expenses.length ? (
        <Placeholder />
      ) : (
        <>
          <Filter onSelectedYearChange={setSelectedYear} selectedYear={selectedYear} />
          <ExpensesList items={filteredExpenses} />
        </>
      )}
    </div>
  );
};

export { Expenses };
