import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogoutClick = () => [dispatch(logoutUser())];

  const userInfo = isLoggedIn ? (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={onLogoutClick}>Logout</button>
        </li>
      </ul>
    </nav>
  ) : null;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {userInfo}
    </header>
  );
};

export { Header };
