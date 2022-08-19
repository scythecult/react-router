import React from "react";
import { Calendar } from "../calendar/calendar";
import { Card } from "../card/card";
import "./expense-item.css";

const ExpenseItem = (props) => {
  const { date, price, title } = props;

  return (
    <Card>
      <div className="expense-item">
        <div className="expense-item__date">{<Calendar date={date} />}</div>
        <div className="expense-item__description">
          <h2 className="expense-item__title">{title}</h2>
          <p className="expense-item__price">${price}</p>
        </div>
      </div>
    </Card>
  );
};

export { ExpenseItem };
