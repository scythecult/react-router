import React from "react";
import "./card.css";

const Card = (props) => {
  return <li className="card">{props.children}</li>;
};

export { Card };
