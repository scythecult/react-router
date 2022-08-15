import React, { useState } from "react";
import { Calendar } from "../calendar/calendar";
import { Card } from "../card/card";
import "./expense-item.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const { date, price } = props;

  return (
    <Card>
      <div className="expense-item">
        <div className="expense-item__date">{<Calendar date={date} />}</div>
        <div className="expense-item__description">
          <h2 className="expense-item__title">{title}</h2>
          <p className="expense-item__price">${price}</p>
        </div>
        <button onClick={() => setTitle(prompt("Enter the new title", ""))}>
          Change Title
        </button>
      </div>
    </Card>
  );
};

export { ExpenseItem };
