import React from "react";

import classes from "./Sorting.module.css";

const Sorting = ({ handler, text }) => {
  return (
    <div className={classes.sorting}>
      <button className="btn" onClick={handler}>
        {text}
      </button>
    </div>
  );
};

export { Sorting };
