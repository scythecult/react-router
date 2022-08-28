import React from "react";

const Button = (props) => {
  const { type = "button", text, handler, className = "" } = props;
  return (
    <button className={`button ${className}`} type={type} onClick={handler}>
      {text}
    </button>
  );
};

export { Button };
