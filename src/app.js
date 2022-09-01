import React, { useReducer, useState } from "react";
import { addMealToCart, removeMealFromCart } from "./actions/actions";
import styles from "./app.module.css";
import { CartContext } from "./cart-context/cart-context";
import { Cart } from "./components/cart/cart";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { MealsSummary } from "./components/meals-summary/meals-summary";
import { Meals } from "./components/meals/meals";
import { cartReducer } from "./reducers/reducers";
import { getMeals } from "./services/meals";

const meals = getMeals();
const initialState = {
  meals,
  cartItems: [],
};

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isCartShown, setIsCartShown] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        onAdd: (info) => {
          dispatch(addMealToCart(info));
        },
        onRemove: (id) => dispatch(removeMealFromCart(id)),
        setIsCartShown,
      }}>
      <div className={styles.app}>
        <Header />
        <Hero />
        <Meals meals={state.meals} />
        {isCartShown && <Cart />}
      </div>
    </CartContext.Provider>
  );
};

export { App };
