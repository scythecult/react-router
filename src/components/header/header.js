import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const Header = () => {
  const { isDark } = useSelector((state) => state.theme);
  const themeClasses = isDark ? classes.dark : "";

  return (
    <header className={`${classes.header} ${themeClasses}`}>
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
