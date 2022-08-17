import React, { useState } from "react";
import { ExpenseFiler } from "../expense-filter/expense-filter";
import { ExpenseItem } from "../expense-item/expense-item";
import { Placeholder } from "../placeholder/placeholder";
import "./expense-list.css";

const filterByYear = (expenses, selectedYear) => {
  if (selectedYear) {
    return expenses.filter((expense) => expense.date.getFullYear() === selectedYear);
  }

  return expenses;
};

const ExpenseList = (props) => {
  const [selectedYear, setSelectedYear] = useState("");
  const { expenses } = props;
  const expensesView = filterByYear(expenses, selectedYear);

  return (
    <div className="expense-container">
      <ExpenseFiler setSelectedYear={setSelectedYear} />
      <ul className="expense-list">
        {!expenses.length ? (
          <Placeholder />
        ) : (
          expensesView.map((expense) => <ExpenseItem key={expense.date} {...expense} />)
        )}
      </ul>
    </div>
  );
};

export { ExpenseList };
