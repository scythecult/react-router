import React from "react";

const NewExpenseToggler = (props) => {
  const { onButtonClick } = props;
  return (
    <button className="button" onClick={() => onButtonClick(true)} type="button">
      Add New Expense
    </button>
  );
};

export { NewExpenseToggler };
