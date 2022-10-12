import React from "react";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${classes.active}` : "";
              }}
              to="/all-quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? `${classes.active}` : "";
              }}
              to="/add-quote">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
