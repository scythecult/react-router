import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        Great Quotes
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/all-quotes">All Quotes</Link>
          </li>
          <li>
            <Link to="/add-quote">Add a Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
