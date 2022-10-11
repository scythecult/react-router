import React from "react";

import classes from "./MainNavigation.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="/">All Quotes</a>
          </li>
          <li>
            <a href="/">Add a Quote</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
