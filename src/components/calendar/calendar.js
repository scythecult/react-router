import React from "react";
import { formatDate } from "../../utils";
import "./calendar.css";

const Calendar = (props) => {
  const { month, day, year } = formatDate(props.date);

  return (
    <p className="calendar">
      <span className="calendar__month">{month} </span>
      <span className="calendar__year">{year} </span>
      <span className="calendar__day">{day} </span>
    </p>
  );
};

export { Calendar };
