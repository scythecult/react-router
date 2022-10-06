import React, { useEffect } from "react";
import styles from "./app.module.css";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Meals } from "./components/meals/meals";
import { RecentItems } from "./components/recent-items/recent-items";
import { Login } from "./components/login/login";
import { useHttp } from "./hooks/hooks";
import { FIRE_DB_USERS } from "./constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { login, updateUser } from "./features/auth/user-auth";
import { Cart } from "./components/cart/cart";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthVisible, isCartVisible } = useSelector((state) => state.render);
  const [fetchData] = useHttp({ url: FIRE_DB_USERS, method: "GET" });

  useEffect(() => {
    fetchData().then((response) => {
      if (response) {
        for (const [key, value] of Object.entries(response)) {
          if (localStorage.getItem(key)) {
            dispatch(login());
            dispatch(updateUser({ userId: key, ...value }));
          }
        }
      }
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Meals />
      {isAuthVisible && <Login />}
      {isCartVisible && <Cart />}
      <RecentItems />
    </div>
  );
};

export { App };
