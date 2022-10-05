import React, { useEffect, useReducer } from "react";
import styles from "./app.module.css";
import { CartContext, DispatchContext } from "./context/context";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Meals } from "./components/meals/meals";
import { cartReducer, initialState } from "./reducers/reducers";
import { RecentItems } from "./components/recent-items/recent-items";
import { Login } from "./components/login/login";
import { useHttp } from "./hooks/hooks";
import { FIRE_DB_USERS } from "./constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { login, updateUser } from "./features/auth/user-auth";
import { Cart } from "./components/cart/cart";

const App = () => {
  const dispatch2 = useDispatch();
  const { isAuthVisible, isCartVisible } = useSelector((state) => state.render);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [fetchData] = useHttp({ url: FIRE_DB_USERS, method: "GET" });

  useEffect(() => {
    fetchData().then((response) => {
      if (response) {
        for (const [key, value] of Object.entries(response)) {
          if (localStorage.getItem(key)) {
            dispatch2(login());
            dispatch2(updateUser({ userId: key, ...value }));
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
        }}>
        <div className={styles.app}>
          <Header />
          <Hero />
          <Meals meals={state.meals} />
          {isAuthVisible && <Login />}
          {isCartVisible && <Cart />}
          <RecentItems />
        </div>
      </CartContext.Provider>
    </DispatchContext.Provider>
  );
};

export { App };
