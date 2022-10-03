import React, { useEffect, useReducer, useState } from "react";
import styles from "./app.module.css";
import { CartContext, DispatchContext } from "./context/context";
import { Cart } from "./components/cart/cart";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Meals } from "./components/meals/meals";
import { cartReducer, initialState } from "./reducers/reducers";
import { RecentItems } from "./components/recent-items/recent-items";
import { Login } from "./components/login/login";
import { useHttp } from "./hooks/hooks";
import { FIRE_DB_USERS } from "./constants/constants";
import { useDispatch } from "react-redux";
import { login } from "./features/auth/user-auth";

const App = () => {
  const dispatch2 = useDispatch();
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCartShown, setIsCartShown] = useState(false);
  const [isLoginShown, setIsLoginShown] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isNewUser, setIsNewUser] = useState(false);
  const [fetchData] = useHttp({ url: FIRE_DB_USERS, method: "GET" });

  useEffect(() => {
    fetchData().then((response) => {
      if (response) {
        for (const [key, value] of Object.entries(response)) {
          if (localStorage.getItem(key)) {
            dispatch2(login());
            setIsLoggedIn(true);
            setCurrentUser({ userId: key, ...value });
          }
        }
      }
    });
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CartContext.Provider
        value={{
          state,
          cartItems: state.cartItems,
          isLoggedIn,
          currentUser,
          isNewUser,
          setIsCartShown,
          setIsLoginShown,
          setIsLoggedIn,
          setCurrentUser,
          setIsNewUser,
        }}>
        <div className={styles.app}>
          <Header />
          <Hero />
          <Meals meals={state.meals} />
          {isCartShown && <Cart />}
          {isLoginShown && <Login />}
          <RecentItems />
        </div>
      </CartContext.Provider>
    </DispatchContext.Provider>
  );
};

export { App };
