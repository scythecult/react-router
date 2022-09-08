import React, { useReducer, useState } from "react";
import styles from "./app.module.css";
import { CartContext, DispatchContext } from "./context/context";
import { Cart } from "./components/cart/cart";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Meals } from "./components/meals/meals";
import { cartReducer, initialState } from "./reducers/reducers";
import { RecentItems } from "./components/recent-items/recent-items";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartShown, setIsCartShown] = useState(false);

  return (
    <DispatchContext.Provider value={dispatch}>
      <CartContext.Provider
        value={{
          cartItems: state.cartItems,
          setIsCartShown,
        }}>
        <div className={styles.app}>
          <Header />
          <Hero />
          <Meals meals={state.meals} />
          {isCartShown && <Cart />}
          <RecentItems />
        </div>
      </CartContext.Provider>
    </DispatchContext.Provider>
  );
};

export { App };
